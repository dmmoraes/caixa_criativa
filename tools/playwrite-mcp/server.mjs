// Minimal MCP server exposing Playwright controls via stdio
// Name: playwrite-mcp
// Requires dev deps: @modelcontextprotocol/sdk, playwright, zod

import { chromium } from 'playwright';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

let browser = null;
let context = null;
let page = null;

async function ensurePage() {
  if (!browser) {
    browser = await chromium.launch({ headless: true });
  }
  if (!context) {
    context = await browser.newContext();
  }
  if (!page) {
    page = await context.newPage();
  }
  return page;
}

const tools = [
  {
    name: 'playwright.goto',
    description: 'Navigate to a URL. Input: { url: string }',
    inputSchema: {
      type: 'object',
      properties: { url: { type: 'string' } },
      required: ['url'],
    },
    handler: async ({ url }) => {
      const p = await ensurePage();
      await p.goto(url, { waitUntil: 'domcontentloaded' });
      return { content: [{ type: 'text', text: `Navigated to ${url}` }] };
    },
  },
  {
    name: 'playwright.click',
    description: 'Click a selector. Input: { selector: string }',
    inputSchema: {
      type: 'object',
      properties: { selector: { type: 'string' } },
      required: ['selector'],
    },
    handler: async ({ selector }) => {
      const p = await ensurePage();
      await p.click(selector);
      return { content: [{ type: 'text', text: `Clicked ${selector}` }] };
    },
  },
  {
    name: 'playwright.fill',
    description: 'Fill text into a selector. Input: { selector: string, value: string }',
    inputSchema: {
      type: 'object',
      properties: { selector: { type: 'string' }, value: { type: 'string' } },
      required: ['selector', 'value'],
    },
    handler: async ({ selector, value }) => {
      const p = await ensurePage();
      await p.fill(selector, value);
      return { content: [{ type: 'text', text: `Filled ${selector}` }] };
    },
  },
  {
    name: 'playwright.screenshot',
    description: 'Take a screenshot. Input: { fullPage?: boolean }',
    inputSchema: {
      type: 'object',
      properties: { fullPage: { type: 'boolean' } },
      required: [],
    },
    handler: async ({ fullPage = true } = {}) => {
      const p = await ensurePage();
      const buffer = await p.screenshot({ fullPage });
      const b64 = buffer.toString('base64');
      return {
        content: [
          { type: 'text', text: 'Screenshot captured (base64)' },
          { type: 'image', data: b64, mimeType: 'image/png' },
        ],
      };
    },
  },
  {
    name: 'playwright.close',
    description: 'Close the browser context/page.',
    inputSchema: { type: 'object', properties: {} },
    handler: async () => {
      if (browser) await browser.close();
      browser = null;
      context = null;
      page = null;
      return { content: [{ type: 'text', text: 'Browser closed' }] };
    },
  },
];

const server = new Server(
  { name: 'playwrite-mcp', version: '0.1.0' },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: tools.map((t) => ({ name: t.name, description: t.description, inputSchema: t.inputSchema })),
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const name = req.params.name;
  const args = (req.params.arguments || {});
  const tool = tools.find((t) => t.name === name);
  if (!tool) {
    return {
      content: [{ type: 'text', text: `Unknown tool: ${name}` }],
      isError: true,
    };
  }
  try {
    return await tool.handler(args);
  } catch (err) {
    return {
      content: [{ type: 'text', text: `Error: ${err?.message || String(err)}` }],
      isError: true,
    };
  }
});

const transport = new StdioServerTransport();
server.connect(transport);

// Guard against environments where 'process' may not be defined during lint/static analysis
if (typeof process !== 'undefined' && typeof process.on === 'function') {
  process.on('SIGINT', async () => {
    if (browser) await browser.close();
    if (typeof process.exit === 'function') {
      process.exit(0);
    }
  });
}

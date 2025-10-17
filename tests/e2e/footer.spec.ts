import { test, expect } from '@playwright/test';

const INSTAGRAM = 'https://www.instagram.com/acaixa_criativa';
const LINKEDIN = 'https://www.linkedin.com/company/caixa-criativa/about/';
const MEME_SAPIENS = '#/meme-sapiens';

// Escopo sempre dentro do <footer> para evitar colisões
const footer = (page: import('@playwright/test').Page) => page.locator('footer');

test.describe('Footer - Links Sociais e Navegação', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Instagram: href correto e abre em nova aba', async ({ page }) => {
    const ig = footer(page).locator(`a[href="${INSTAGRAM}"]`).first();
    await expect(ig).toBeVisible();
    await expect(ig).toHaveAttribute('target', '_blank');
    await expect(ig).toHaveAttribute('rel', /noopener noreferrer/);
  });

  test('LinkedIn: href correto e abre em nova aba', async ({ page }) => {
    const li = footer(page).locator(`a[href="${LINKEDIN}"]`).first();
    await expect(li).toBeVisible();
    await expect(li).toHaveAttribute('target', '_blank');
    await expect(li).toHaveAttribute('rel', /noopener noreferrer/);
  });

  test('Jogo Meme Sapiens: link visível, target _blank e abre nova aba na hash correta', async ({ page }) => {
    const link = footer(page).getByRole('link', { name: /jogo meme sapiens/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', MEME_SAPIENS);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noopener noreferrer/);

    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      link.click(),
    ]);

    await popup.waitForLoadState('domcontentloaded');
    await expect(popup).toHaveURL(/#\/meme-sapiens$/);
  });
});

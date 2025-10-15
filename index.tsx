import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChatbotProvider } from './contexts/ChatbotContext';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ChatbotProvider>
        <App />
      </ChatbotProvider>
    </HashRouter>
  </React.StrictMode>,
);

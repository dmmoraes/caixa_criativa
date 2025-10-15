import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChatbotProvider } from './contexts/ChatbotContext';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChatbotProvider>
        <App />
      </ChatbotProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

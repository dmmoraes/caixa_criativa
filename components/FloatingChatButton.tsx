import React from 'react';
import { MessageSquareIcon } from './icons/MessageSquareIcon';
import { useChatbot } from '../contexts/ChatbotContext';

const FloatingChatButton: React.FC = () => {
  const { openChat } = useChatbot();

  return (
    <button
      onClick={() => openChat()}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full cta-button shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40"
      aria-label="Abrir chat com assistente"
    >
      <MessageSquareIcon className="h-8 w-8 text-white" />
    </button>
  );
};

export default FloatingChatButton;

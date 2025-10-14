import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ChatbotContextType {
  isChatOpen: boolean;
  openChat: (initialMessage?: string) => void;
  closeChat: () => void;
  initialMessage: string | null;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string | null>(null);


  const openChat = (message?: string) => {
    if (message) {
      setInitialMessage(message);
    } else {
      setInitialMessage(null);
    }
    setIsChatOpen(true);
  }
  const closeChat = () => setIsChatOpen(false);

  return (
    <ChatbotContext.Provider value={{ isChatOpen, openChat, closeChat, initialMessage }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};

import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { useChatbot } from '../contexts/ChatbotContext';
import { XIcon } from './icons/XIcon';
import { BoxIcon } from './icons/BoxIcon';
import { SendIcon } from './icons/SendIcon';

const API_KEY = process.env.API_KEY;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatbotWindow: React.FC = () => {
  const { isChatOpen, closeChat, initialMessage } = useChatbot();
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!API_KEY) {
      console.error("API_KEY is not set.");
      // Handle this case gracefully, maybe show a message in the chat window
      setMessages([{ role: 'model', text: 'Desculpe, meu cérebro está offline agora. A configuração da API está faltando.' }]);
      return;
    }

    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: 'Você é um assistente virtual amigável e profissional da Caixa Criativa. Seu objetivo é ajudar pequenas empresas a entenderem os serviços de automação e presença digital. Seja conciso, prestativo e guie o usuário para uma solução. Comece a conversa com uma saudação calorosa e se apresentando.',
      },
    });
    setChat(chatSession);

    // Start conversation with a welcome message from the model
    setIsLoading(true);
    chatSession.sendMessage({ message: "Olá" }).then(response => {
        setMessages([{ role: 'model', text: response.text }]);
        setIsLoading(false);
    });

  }, []);

   useEffect(() => {
    if (initialMessage && isChatOpen && chat) {
        setMessages(prev => [...prev, { role: 'user', text: initialMessage }]);
        setIsLoading(true);
        chat.sendMessage({ message: initialMessage }).then(response => {
            setMessages(prev => [...prev, { role: 'model', text: response.text }]);
            setIsLoading(false);
        });
    }
  }, [initialMessage, isChatOpen, chat]);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !chat || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: input });
      const modelMessage: Message = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = { role: 'model', text: "Oops, algo deu errado. Tente novamente." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 transition-all duration-300 ease-in-out ${isChatOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <div className="w-full h-[70vh] md:w-96 md:h-[600px] bg-white/80 backdrop-blur-xl rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col clay-card">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-indigo-200 to-purple-200 p-2 rounded-lg clay-shadow">
              <BoxIcon className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Assistente Virtual</h3>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
          <button onClick={closeChat} className="p-2 rounded-lg hover:bg-gray-200/50">
            <XIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-blue-500 text-white rounded-br-lg' : 'bg-gray-200 text-gray-800 rounded-bl-lg'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="max-w-xs md:max-w-sm px-4 py-2 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-lg">
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-0"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                    </div>
                </div>
              </div>
            )}
             <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 clay-inset"
              disabled={isLoading}
            />
            <button type="submit" className="p-3 bg-blue-500 text-white rounded-xl clay-button disabled:opacity-50" disabled={isLoading || !input.trim()}>
              <SendIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWindow;
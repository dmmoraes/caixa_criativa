import React, { useState, useEffect, useRef } from 'react';
import { useChatbot } from '../contexts/ChatbotContext';
import { XIcon } from './icons/XIcon';
import { ChatBotIcon } from './icons/ChatBotIcon';
import { SendIcon } from './icons/SendIcon';
import { useTheme } from '../contexts/ThemeContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatbotWindow: React.FC = () => {
  const { isChatOpen, closeChat, initialMessage } = useChatbot();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<Message[]>([]);

  // Resolve webhook URL: env > fallback por ambiente > produção
  const mode = (import.meta as any)?.env?.MODE as string | undefined;
  const ENV_URL = (import.meta as any)?.env?.VITE_N8N_WEBHOOK_URL as string | undefined;
  const TEST_URL = 'https://n8n-n8n.zg9ibw.easypanel.host/webhook-test/chat-site';
  const PROD_URL = 'https://n8n-n8n.zg9ibw.easypanel.host/webhook/chat-site';
  const WEBHOOK_URL = ENV_URL || (mode === 'development' ? TEST_URL : PROD_URL);
  const AUTH_TOKEN = (import.meta as any)?.env?.VITE_CHAT_TOKEN as string | undefined;

  useEffect(() => {
    // Iniciar conversa pedindo uma saudação ao n8n
    let canceled = false;
    const init = async () => {
      try {
        setIsLoading(true);
        const cid =
          sessionStorage.getItem('chat_cid') || crypto.randomUUID();
        const res = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {}),
          },
          body: JSON.stringify({
            message: 'Olá',
            conversationId: cid,
            history: [],
          }),
        });
        const data = await res.json();
        if (canceled) return;
        if (data?.conversationId) {
          sessionStorage.setItem('chat_cid', data.conversationId);
        } else {
          sessionStorage.setItem('chat_cid', cid);
        }
        setMessages([{ role: 'model', text: data?.reply ?? 'Olá! Como posso ajudar?' }]);
      } catch (e) {
        console.error(e);
        if (!canceled) {
          setMessages([
            {
              role: 'model',
              text: 'Não consegui conectar ao servidor agora. Tente novamente em instantes.',
            },
          ]);
        }
      } finally {
        if (!canceled) setIsLoading(false);
      }
    };
    init();
    return () => {
      canceled = true;
    };
  }, [AUTH_TOKEN, WEBHOOK_URL]);

  useEffect(() => {
    if (initialMessage && isChatOpen) {
      const sendInitial = async () => {
        const userMsg = { role: 'user' as const, text: initialMessage };
        setMessages((prev) => [...prev, userMsg]);
        setIsLoading(true);
        try {
          const cid =
            sessionStorage.getItem('chat_cid') || crypto.randomUUID();
          const res = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...(AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {}),
            },
            body: JSON.stringify({
              message: initialMessage,
              conversationId: cid,
              history: messagesRef.current,
            }),
          });
          const data = await res.json();
          if (data?.conversationId) {
            sessionStorage.setItem('chat_cid', data.conversationId);
          }
          setMessages((prev) => [
            ...prev,
            { role: 'model', text: data?.reply ?? 'Sem resposta.' },
          ]);
        } catch (e) {
          console.error(e);
          setMessages((prev) => [
            ...prev,
            { role: 'model', text: 'Erro ao falar com o servidor. Tente novamente.' },
          ]);
        } finally {
          setIsLoading(false);
        }
      };
      sendInitial();
    }
  }, [initialMessage, isChatOpen, AUTH_TOKEN, WEBHOOK_URL]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const cid = sessionStorage.getItem('chat_cid') || crypto.randomUUID();
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {}),
        },
        body: JSON.stringify({
          message: userMessage.text,
          conversationId: cid,
          history: messages,
        }),
      });
      const data = await res.json();
      if (data?.conversationId) {
        sessionStorage.setItem('chat_cid', data.conversationId);
      } else {
        sessionStorage.setItem('chat_cid', cid);
      }
      const modelMessage: Message = { role: 'model', text: data?.reply ?? 'Sem resposta.' };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'model',
        text: 'Oops, algo deu errado. Tente novamente.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 transition-all duration-300 ease-in-out ${isChatOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <div className={`w-full h-[70vh] md:w-96 md:h-[600px] rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col border ${isDark ? 'bg-[#1A202C] border-white/10' : 'bg-white border-black/10'}`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <div className="flex items-center space-x-3">
            <div className={`bg-gradient-to-br p-2 rounded-lg shadow-md ${isDark ? 'from-purple-600 via-pink-500 to-teal-400' : 'from-[#B7A6FF] via-[#F7A9C8] to-[#A9F5E7]'}`}>
              <ChatBotIcon className={`h-5 w-5 ${isDark ? 'text-white' : 'text-slate-800'}`} />
            </div>
            <div>
              <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Assistente Virtual</h3>
              <p className={`text-xs ${isDark ? 'text-teal-400' : 'text-slate-500'}`}>Online</p>
            </div>
          </div>
          <button onClick={closeChat} className={`p-2 rounded-lg ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
            <XIcon className={`h-6 w-6 ${isDark ? 'text-gray-300' : 'text-slate-600'}`} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.role === 'user' 
                  ? (isDark 
                      ? 'bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-br-lg'
                      : 'bg-gradient-to-br from-[#B7A6FF] to-[#F7A9C8] text-slate-800 rounded-br-lg border border-black/10')
                  : (isDark 
                      ? 'bg-slate-700 text-gray-200 rounded-bl-lg'
                      : 'bg-slate-100 text-slate-800 rounded-bl-lg border border-black/10')
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${isDark ? 'bg-slate-700 text-gray-200' : 'bg-slate-100 text-slate-700'} rounded-bl-lg`}>
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
        <div className={`p-4 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className={`flex-1 w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 border ${isDark ? 'bg-slate-800 text-white focus:ring-purple-500 border-slate-700' : 'bg-white text-slate-800 focus:ring-purple-300 border-black/10'}`}
              disabled={isLoading}
            />
            <button type="submit" className={`p-3 rounded-xl disabled:opacity-50 ${isDark ? 'bg-gradient-to-br from-purple-600 to-pink-500 text-white cta-button' : 'bg-gradient-to-br from-[#B7A6FF] to-[#F7A9C8] text-slate-800 border border-black/10'}`} disabled={isLoading || !input.trim()}>
              <SendIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWindow;

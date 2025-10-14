import React, { useState } from 'react';
import { MessageSquareIcon } from './icons/MessageSquareIcon';
import { XIcon } from './icons/XIcon';
import { useChatbot } from '../contexts/ChatbotContext';
import { ChatBotIcon } from './icons/ChatBotIcon';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openChat } = useChatbot();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenChat = () => {
    closeMenu();
    openChat();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-300 to-blue-300 flex items-center justify-center shadow-lg">
              <ChatBotIcon className="w-7 h-7 text-white" />
            </div>
            <h1 className="ml-3 text-xl font-bold text-gray-800">Caixa Criativa</h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Serviços
            </a>
            <a
              href="#about-us"
              onClick={(e) => handleNavClick(e, 'about-us')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleOpenChat}
              className="clay-button bg-gradient-to-br from-blue-400 to-blue-500 text-white font-semibold px-6 py-3 hover:opacity-90 flex items-center space-x-2"
            >
              <MessageSquareIcon className="w-4 h-4" />
              <span>Fale com nosso assistente</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-6 6H4"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen shadow-xl border-t border-gray-200' : 'max-h-0'}`}
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="text-lg text-gray-700 hover:text-blue-600"
          >
            Serviços
          </a>
          <a
            href="#about-us"
            onClick={(e) => handleNavClick(e, 'about-us')}
            className="text-lg text-gray-700 hover:text-blue-600"
          >
            Sobre
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="text-lg text-gray-700 hover:text-blue-600"
          >
            Contato
          </a>
          <button
            onClick={handleOpenChat}
            className="clay-button bg-gradient-to-br from-blue-400 to-blue-500 text-white font-semibold px-8 py-4 flex items-center space-x-2"
          >
            <MessageSquareIcon className="w-5 w-5" />
            <span>Fale com nosso assistente</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

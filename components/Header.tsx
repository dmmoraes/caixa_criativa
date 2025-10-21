import React, { useState } from 'react';
import { MessageSquareIcon } from './icons/MessageSquareIcon';
import { XIcon } from './icons/XIcon';
import { useChatbot } from '../contexts/ChatbotContext';
import { ChatBotIcon } from './icons/ChatBotIcon';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { UserIcon } from './icons/UserIcon';
import { LogOutIcon } from './icons/LogOutIcon';
import type { View } from '../App';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  isScrolled: boolean;
  view: View;
  setView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, view, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openChat } = useChatbot();
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    if (view !== 'landing') {
      setView('landing');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenChat = () => {
    closeMenu();
    openChat();
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    setView('landing');
  };

  const handleDashboardClick = () => {
    closeMenu();
    if (isAuthenticated) {
      setView('dashboard');
    } else {
      setView('login');
    }
  };

  const handleLogoutClick = () => {
    closeMenu();
    logout();
    setView('landing');
  };

  const isDark = theme === 'dark';
  const headerClasses = isDark
    ? (isScrolled
        ? 'bg-[#10101A]/50 backdrop-blur-lg border-b border-white/10'
        : 'bg-transparent')
    : (isScrolled
        ? 'bg-white/90 backdrop-blur-lg border-b border-black/10 shadow-md'
        : 'bg-transparent');

  const navLinkBase = isDark
    ? 'text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded'
    : 'text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded';

  const logoTextClass = isDark ? 'text-white' : 'text-slate-800';

  const landingNav = (
    <>
      <a
        href="#services"
        onClick={(e) => handleNavClick(e, 'services')}
        className={`${navLinkBase} transition-colors font-medium`}
      >
        Serviços
      </a>
      <a
        href="#about-us"
        onClick={(e) => handleNavClick(e, 'about-us')}
        className={`${navLinkBase} transition-colors font-medium`}
      >
        Sobre
      </a>
      <a
        href="#contact"
        onClick={(e) => handleNavClick(e, 'contact')}
        className={`${navLinkBase} transition-colors font-medium`}
      >
        Contato
      </a>
      <button onClick={handleDashboardClick} className={`flex items-center gap-2 font-medium ${navLinkBase}`}>
        <UserIcon className="w-4 h-4" />
        <span>Área do Cliente</span>
      </button>
    </>
  );

  const dashboardNav = (
    <>
      <span className="font-medium text-white">Painel do Cliente</span>
      <button onClick={handleLogoutClick} className={`flex items-center gap-2 font-medium ${navLinkBase}`}>
        <LogOutIcon className="w-4 h-4" />
        <span>Sair</span>
      </button>
    </>
  );

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" onClick={handleLogoClick} className="flex items-center">
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg ${
                isDark
                  ? 'from-purple-600 via-pink-500 to-teal-400'
                  : 'from-[#B7A6FF] via-[#F7A9C8] to-[#A9F5E7]'
              }`}
            >
              <ChatBotIcon className={`w-7 h-7 ${isDark ? 'text-white' : 'text-slate-800'}`} />
            </div>
            <h1 className={`ml-3 text-xl font-bold ${logoTextClass}`}>Caixa Criativa</h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {view === 'landing' ? landingNav : dashboardNav}
          </nav>

              {/* Desktop CTA */}
              {view === 'landing' && (
                <div className="hidden md:flex items-center gap-3">
                  <button
                    onClick={handleOpenChat}
                    aria-label="Fale com nosso assistente"
                    className="cta-button text-white font-semibold px-6 py-3 flex items-center space-x-2"
                  >
                    <MessageSquareIcon className="w-4 h-4" />
                    <span>Fale com nosso assistente</span>
                  </button>
                </div>
              )}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
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
        className={`md:hidden absolute top-full left-0 w-full ${isDark ? 'bg-[#10101A]/80 border-white/10' : 'bg-white/90 border-black/10'} backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen shadow-xl border-t' : 'max-h-0'}`}
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          {view === 'landing' ? (
            <>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className={`text-lg ${isDark ? 'text-gray-200 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
              >
                Serviços
              </a>
              <a
                href="#about-us"
                onClick={(e) => handleNavClick(e, 'about-us')}
                className={`text-lg ${isDark ? 'text-gray-200 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
              >
                Sobre
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`text-lg ${isDark ? 'text-gray-200 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
              >
                Contato
              </a>
              <button onClick={handleDashboardClick} className={`text-lg flex items-center gap-2 ${isDark ? 'text-gray-200 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}>
                <UserIcon className="w-5 h-5" />
                Área do Cliente
              </button>
              <button
                onClick={handleOpenChat}
                className="cta-button text-white font-semibold px-8 py-4 flex items-center space-x-2"
              >
                <MessageSquareIcon className="w-5 w-5" />
                <span>Fale com nosso assistente</span>
              </button>
            </>
          ) : (
            <>
              <button onClick={handleLogoutClick} className="cta-button text-white font-semibold px-8 py-4 flex items-center space-x-2">
                <LogOutIcon className="w-5 h-5" />
                <span>Sair do Painel</span>
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
    {/* Discrete theme toggle - fixed top-right */}
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      title="Alternar tema"
      className="theme-toggle fixed top-4 right-4 z-[60] p-2 rounded-full transition-colors"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5 text-yellow-300" />
      ) : (
        <MoonIcon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  </>
  );
};

export default Header;

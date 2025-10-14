import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { SparkleIcon } from './icons/SparkleIcon';
import { ChatBotIcon } from './icons/ChatBotIcon';
import { useChatbot } from '../contexts/ChatbotContext';

const HeroSection: React.FC = () => {
  const { openChat } = useChatbot();

  const scrollToQuiz = () => {
    document.getElementById('interactive-quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-200/40 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-pink-200/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 fade-in-up">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full clay-card">
            <SparkleIcon className="w-4 h-4 mr-2 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">
              Automação para pequenas empresas
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Sua empresa, online e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500">
              vendendo 24h por dia.
            </span>{' '}
            Sem estresse.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Soluções práticas de automação, sites e identidade visual para pequenas empresas
            crescerem com eficiência
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => openChat()}
              className="clay-button bg-gradient-to-br from-blue-400 to-blue-500 text-white font-semibold px-8 py-4 text-lg group flex items-center justify-center"
            >
              Comece agora - Fale com nosso bot
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToQuiz}
              className="clay-card font-semibold px-8 py-4 text-lg border-2 border-transparent"
            >
              Faça um diagnóstico grátis
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 pt-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-600">Atendimento 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span className="text-sm text-gray-600">Entrega rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-400"></div>
              <span className="text-sm text-gray-600">Suporte incluso</span>
            </div>
          </div>
        </div>

        {/* Right Content - Illustration */}
        <div
          className="relative hidden lg:block"
          role="img"
          aria-label="Ilustração de um robô amigável flutuando, representando a automação e tecnologia da Caixa Criativa."
        >
          <div className="clay-card p-8 floating-animation">
            <div className="relative">
              {/* The main gradient background with blur overlay */}
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-purple-300/80 via-blue-300/80 to-pink-300/80 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                {/* Central Robot elements */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
                  {/* Robot Head */}
                  <div className="w-32 h-32 bg-white/90 rounded-3xl clay-card flex items-center justify-center">
                    <ChatBotIcon className="w-20 h-20 text-blue-500" />
                  </div>

                  {/* Robot Body */}
                  <div className="w-40 h-16 bg-white/80 rounded-2xl clay-card flex items-center justify-center">
                    <div className="flex gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse [animation-delay:0.15s]"></div>
                      <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse [animation-delay:0.3s]"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Sparkle Elements */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-white/60 rounded-2xl clay-card flex items-center justify-center floating-animation">
                  <SparkleIcon className="w-6 h-6 text-purple-500" />
                </div>
                <div
                  className="absolute bottom-8 right-8 w-12 h-12 bg-white/60 rounded-2xl clay-card flex items-center justify-center floating-animation"
                  style={{ animationDelay: '0.5s' }}
                >
                  <SparkleIcon className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

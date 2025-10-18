import React from 'react';
import { useChatbot } from '../contexts/ChatbotContext';
import { FileTextIcon } from './icons/FileTextIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import AnimateOnScroll from './AnimateOnScroll';

const LeadMagnetSection: React.FC = () => {
  const { openChat } = useChatbot();

  const handleDownloadClick = () => {
    const initialMessage =
      "Olá! Gostaria de receber o 'Guia Grátis: 5 Erros que Pequenas Empresas Cometem no Atendimento Online'.";
    openChat(initialMessage);
  };

  return (
    <section className="hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row gap-8 items-center aurora-card p-8 sm:p-12 overflow-hidden">
            {/* Left side: Illustration */}
            <div className="flex-shrink-0 text-center">
              <div className="inline-block p-5 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-3xl border border-white/10">
                <FileTextIcon className="w-16 h-16 text-teal-400" />
              </div>
            </div>

            {/* Right side: Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Ainda não se decidiu?</h2>
              <p className="text-lg text-gray-400 mb-8">
                Baixe nosso guia gratuito e descubra os 5 erros mais comuns no atendimento online
                que podem estar custando vendas para sua empresa. É um conteúdo prático para você
                aplicar hoje mesmo!
              </p>
              <button
                onClick={handleDownloadClick}
                className="cta-button text-white font-semibold px-8 py-4 text-lg group flex items-center justify-center w-full sm:w-auto mx-auto md:mx-0"
              >
                Receber Guia Grátis
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default LeadMagnetSection;

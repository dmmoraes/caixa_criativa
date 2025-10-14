import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { SparkleIcon } from './icons/SparkleIcon';
import { MessageSquareIcon } from './icons/MessageSquareIcon';
import { useChatbot } from '../contexts/ChatbotContext';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import AnimateOnScroll from './AnimateOnScroll';

const FinalCTASection: React.FC = () => {
  const { openChat } = useChatbot();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <div className="clay-card p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 mb-6">
                <SparkleIcon className="w-4 h-4 mr-2 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">
                  Comece sua transformação digital hoje
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Pronto para automatizar e crescer?
              </h2>

              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Fale com nosso assistente virtual agora e receba uma proposta personalizada para o
                seu negócio
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => openChat()}
                  className="clay-button bg-gradient-to-br from-blue-400 to-blue-500 text-white font-semibold px-10 py-4 text-lg group flex items-center"
                >
                  <MessageSquareIcon className="w-5 h-5 mr-2" />
                  Começar agora
                </button>

                <a
                  href="https://wa.me/5548984001305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors font-medium"
                >
                  <WhatsAppIcon className="w-5 h-5 text-green-500" />
                  <span>(48) 98400-1305</span>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-10 mt-10 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                  <span>Satisfação Garantida</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <SparkleIcon className="w-5 h-5 text-purple-500" />
                  <span>Suporte Dedicado</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MessageSquareIcon className="w-5 h-5 text-blue-500" />
                  <span>Proposta em 24h</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FinalCTASection;

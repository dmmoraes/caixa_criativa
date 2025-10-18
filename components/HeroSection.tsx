import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { SparkleIcon } from './icons/SparkleIcon';
import { useChatbot } from '../contexts/ChatbotContext';
import { EnergyRobotIllustration } from './EnergyRobotIllustration';

const HeroSection: React.FC = () => {
  const { openChat } = useChatbot();

  const scrollToQuiz = () => {
    document.getElementById('interactive-quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10 fade-in-up">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full aurora-card mb-6">
              <SparkleIcon className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm font-medium text-gray-300">Automação para pequenas empresas</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Sua empresa, online e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400">
                vendendo 24h.
              </span>{" "}
              Sem estresse.
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mt-6">
              Soluções práticas de automação, sites e identidade visual para pequenas empresas crescerem com eficiência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <button
                onClick={() => openChat()}
                aria-label="Fale com nosso assistente"
                className="cta-button text-white font-semibold px-8 py-4 text-lg group flex items-center justify-center"
              >
                Comece agora - Fale com nosso bot
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToQuiz}
                aria-label="Ir para o diagnóstico"
                className="btn-outline font-semibold px-8 py-4 text-lg"
              >
                Faça um diagnóstico grátis
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <EnergyRobotIllustration className="w-full max-w-lg h-auto" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

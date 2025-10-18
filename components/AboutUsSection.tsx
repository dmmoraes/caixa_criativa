import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { SparkleIcon } from './icons/SparkleIcon';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <div className="aurora-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 text-center">
              <div className="flex flex-col sm:flex-row md:flex-col items-center justify-center gap-6">
                <div className="relative inline-block avatar-gradient">
                  <div className="absolute -inset-2 bg-gradient-to-br from-purple-600 via-pink-500 to-teal-500 rounded-full blur-md opacity-70"></div>
                  <img
                    src="/mission.jpg"
                    alt="Foto do fundador da Caixa Criativa"
                    className="relative w-48 h-48 rounded-full object-cover shadow-lg border-4 avatar-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative inline-block avatar-gradient">
                  <div className="absolute -inset-2 bg-gradient-to-br from-pink-500 via-purple-500 to-teal-500 rounded-full blur-md opacity-70"></div>
                  <img
                    src="/tati.jpeg"
                    alt="Foto da fundadora da Caixa Criativa"
                    className="relative w-48 h-48 rounded-full object-cover shadow-lg border-4 avatar-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/20 mb-4">
                <SparkleIcon className="w-4 h-4 mr-2 text-teal-300" />
                <span className="text-sm font-medium text-teal-300">Nossa Missão</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Impulsionar o coração do mercado: as pequenas empresas.
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  A Caixa Criativa nasceu de uma paixão: ver pequenos negócios prosperarem na era digital. Acreditamos que a tecnologia não deve ser um bicho de sete cabeças, mas sim a ferramenta que libera seu tempo e potencializa suas vendas.
                </p>
                <p>
                  Nossa missão é descomplicar a automação e a presença online, oferecendo soluções práticas e rápidas. Estamos aqui para sermos seus parceiros na jornada de crescimento.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AboutUsSection;

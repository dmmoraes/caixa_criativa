import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { SparkleIcon } from './icons/SparkleIcon';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <div className="clay-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur"></div>
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Foto do fundador da Caixa Criativa"
                  className="relative w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 mb-4">
                <SparkleIcon className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Nossa Missão</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Impulsionar o coração do mercado: as pequenas empresas.
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  A Caixa Criativa nasceu de uma paixão: ver pequenos negócios, como o seu, prosperarem na era digital. Acreditamos que a tecnologia não deve ser um bicho de sete cabeças, mas sim a ferramenta que libera seu tempo e potencializa suas vendas.
                </p>
                <p>
                  Nossa missão é descomplicar a automação e a presença online, oferecendo soluções práticas, rápidas e com um toque humano. Estamos aqui para sermos seus parceiros na jornada de crescimento.
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
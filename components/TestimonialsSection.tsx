import React from 'react';
import { ScissorsIcon } from './icons/ScissorsIcon';
import { ZapIcon } from './icons/ZapIcon';
import { StorefrontIcon } from './icons/StorefrontIcon';
import { CoffeeIcon } from './icons/CoffeeIcon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../contexts/ThemeContext';

const sectors = [
  {
    name: 'Salão de Beleza',
    icon: ScissorsIcon,
    color: 'from-pink-500 to-fuchsia-500',
    description:
      'Automatize seus agendamentos e nunca mais perca clientes por não conseguir atender o WhatsApp.',
  },
  {
    name: 'Serviços Locais',
    icon: ZapIcon,
    color: 'from-purple-500 to-pink-500',
    description:
      'Qualifique seus clientes via bot e envie orçamentos muito mais rápido.',
  },
  {
    name: 'Cafés & Restaurantes',
    icon: CoffeeIcon,
    color: 'from-yellow-500 to-orange-500',
    description:
      'Use um bot para receber pedidos e reservas, otimizando o fluxo da cozinha.',
  },
  {
    name: 'Lojas Online',
    icon: StorefrontIcon,
    color: 'from-teal-400 to-blue-500',
    description:
      'Ofereça suporte 24h e rastreamento de pedidos de forma automática.',
  },
];

const TestimonialsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const mapPastel = (c: string) => {
    switch (c) {
      case 'from-pink-500 to-fuchsia-500':
        return 'from-pink-300 to-fuchsia-300';
      case 'from-purple-500 to-pink-500':
        return 'from-purple-300 to-pink-300';
      case 'from-yellow-500 to-orange-500':
        return 'from-yellow-300 to-orange-300';
      case 'from-teal-500 to-blue-500':
        return 'from-teal-300 to-blue-300';
      default:
        return c;
    }
  };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos Clientes
          </h2>
          <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto">
            Atendemos uma grande variedade de pequenos negócios. Veja alguns exemplos de quem confia
            em nosso trabalho.
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <AnimateOnScroll key={index} style={{ transitionDelay: `${index * 100}ms` }}>
              <div
                className="aurora-card p-8 text-center group flex flex-col h-full"
              >
                <div
                  className={`icon-swatch w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${isDark ? sector.color : mapPastel(sector.color)} flex items-center justify-center shadow-lg md:group-hover:scale-110 transition-transform flex-shrink-0`}
                >
                  <sector.icon className={`w-10 h-10 ${isDark ? 'text-white' : 'text-slate-700'}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{sector.name}</h3>
                <p className="text-sm text-gray-400 flex-grow">{sector.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        {/* <AnimateOnScroll className="text-center mt-16">
            <h3 className="text-xl font-bold text-white">Em breve, depoimentos reais.</h3>
            <p className="text-gray-400 mt-2">Seja um dos nossos primeiros casos de sucesso e ganhe um bônus especial!</p>
        </AnimateOnScroll> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;

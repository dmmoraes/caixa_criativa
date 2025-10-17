import React from 'react';
import { ClockIcon } from './icons/ClockIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { ZapIcon } from './icons/ZapIcon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../contexts/ThemeContext';

const benefits = [
  {
    icon: ClockIcon,
    title: 'Economize tempo',
    description: 'Economize até 10 horas por semana e foque no estratégico',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUpIcon,
    title: 'Aumente conversões',
    description: 'Responda 100% dos clientes e aumente suas vendas em até 30%',
    color: 'from-teal-400 to-blue-500',
  },
  {
    icon: ZapIcon,
    title: 'Cresça com eficiência',
    description: 'Foque no que importa enquanto a tecnologia trabalha por você',
    color: 'from-pink-500 to-orange-500',
  },
];

const BenefitsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const mapPastel = (c: string) => {
    switch (c) {
      case 'from-purple-500 to-pink-500':
        return 'from-purple-300 to-pink-300';
      case 'from-teal-400 to-blue-500':
        return 'from-teal-300 to-blue-300';
      case 'from-pink-500 to-orange-500':
        return 'from-pink-300 to-orange-300';
      default:
        return c;
    }
  };
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que automatizar seu negócio?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Descubra como a automação pode transformar sua empresa
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index} style={{ transitionDelay: `${index * 100}ms` }}>
              <div
                className="aurora-card p-8 text-center group h-full"
              >
                <div className={`icon-swatch w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${isDark ? benefit.color : mapPastel(benefit.color)} flex items-center justify-center shadow-lg md:group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`w-10 h-10 ${isDark ? 'text-white' : 'text-slate-700'}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

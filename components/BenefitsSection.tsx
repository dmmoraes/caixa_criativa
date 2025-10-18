import React from 'react';
import { ClockIcon } from './icons/ClockIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { ZapIcon } from './icons/ZapIcon';
import AnimateOnScroll from './AnimateOnScroll';
import { useTheme } from '../contexts/ThemeContext';

const benefits = [
  {
    icon: ClockIcon,
    title: 'Recupere Seu Tempo Precioso',
    description: 'Diga adeus às horas perdidas com tarefas repetitivas. Economize até 10 horas por semana e dedique-se ao estratégico, ao invés do operacional.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUpIcon,
    title: 'Dispare Suas Vendas e Atendimento',
    description: 'Nunca mais perca um cliente por falta de resposta. Responda 100% dos seus clientes 24/7 e veja suas vendas crescerem em até 30%, qualificando leads automaticamente.',
    color: 'from-teal-400 to-blue-500',
  },
  {
    icon: ZapIcon,
    title: 'Cresça com Eficiência e Profissionalismo',
    description: 'Deixe a tecnologia trabalhar por você. Aumente a eficiência do seu negócio em até 80%, garanta uma presença digital impecável e foque na expansão, não na burocracia.',
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
            Pare de Trabalhar no Escuro: A Automação que Entrega Resultados Reais</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nunca mais perca uma venda por não atender o WhatsApp. Converta 100% dos contatos, 24h por dia, e aumente suas vendas com um atendimento que não dorme.          </p>
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


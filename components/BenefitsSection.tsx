import React from 'react';
import { ClockIcon } from './icons/ClockIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { ZapIcon } from './icons/ZapIcon';
import AnimateOnScroll from './AnimateOnScroll';

const benefits = [
  {
    icon: ClockIcon,
    title: "Economize tempo",
    description: "Economize até 10 horas por semana e foque no estratégico",
    color: "from-purple-300 to-purple-400"
  },
  {
    icon: TrendingUpIcon,
    title: "Aumente conversões",
    description: "Responda 100% dos clientes e aumente suas vendas em até 30%",
    color: "from-blue-300 to-blue-400"
  },
  {
    icon: ZapIcon,
    title: "Cresça com eficiência",
    description: "Foque no que importa enquanto a tecnologia trabalha por você",
    color: "from-pink-300 to-pink-400"
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por que automatizar seu negócio?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra como a automação pode transformar sua empresa
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index} style={{ transitionDelay: `${index * 100}ms` }}>
              <div
                className="clay-card p-8 text-center group h-full"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareIcon } from './icons/MessageSquareIcon';
import { FileTextIcon } from './icons/FileTextIcon';
import { CheckIcon } from './icons/CheckIcon';
import { RocketIcon } from './icons/RocketIcon';
import AnimateOnScroll from './AnimateOnScroll';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const steps = [
  {
    number: 1,
    icon: MessageSquareIcon,
    title: 'Você fala com nosso bot',
    description: 'Conte suas necessidades e objetivos de forma simples e rápida',
    color: 'from-purple-300 to-purple-400',
  },
  {
    number: 2,
    icon: FileTextIcon,
    title: 'Recebe uma proposta',
    description: 'Orçamento personalizado e transparente para seu projeto',
    color: 'from-blue-300 to-blue-400',
  },
  {
    number: 3,
    icon: CheckIcon,
    title: 'Aprovação e início',
    description: 'Após aprovação, começamos o trabalho imediatamente',
    color: 'from-pink-300 to-pink-400',
  },
  {
    number: 4,
    icon: RocketIcon,
    title: 'Entrega e suporte',
    description: 'Recebe tudo pronto com suporte completo incluso',
    color: 'from-green-300 to-green-400',
  },
];

const CountUpNumber: React.FC<{ target: number; start: boolean }> = ({ target, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (start) {
      const duration = 1000;
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [start, target]);

  return <>{`0${count}`}</>;
};

const HowItWorksSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.3, triggerOnce: true });

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sua automação em 4 passos simples
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nosso processo é descomplicado para você focar no que importa
          </p>
        </AnimateOnScroll>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative h-full">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-x-1/2 z-0"></div>
                )}

                <div className="clay-card p-6 relative z-10 h-full">
                  <div className="text-4xl font-bold text-gray-200 mb-4">
                    <CountUpNumber target={step.number} start={isVisible} />
                  </div>

                  <div
                    className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>

                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

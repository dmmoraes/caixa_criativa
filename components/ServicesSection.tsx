import React from 'react';
import { ChatBotIcon } from './icons/ChatBotIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { WebsiteIcon } from './icons/WebsiteIcon';
import { PaletteIcon } from './icons/PaletteIcon';
import ServiceCard from './ServiceCard';
import AnimateOnScroll from './AnimateOnScroll';

const services = [
  {
    icon: ChatBotIcon,
    title: "Automação de Atendimento",
    description: "Crie bots humanizados que atendem seus clientes 24h, agendam serviços e qualificam leads automaticamente.",
    benefits: ["Atendimento 24/7", "Respostas instantâneas", "Qualificação de leads"],
    cta: "Quero automatizar",
    color: "from-purple-300 to-purple-400",
  },
  {
    icon: InstagramIcon,
    title: "Bio e Link na Bio",
    description: "Bio otimizada e link personalizado que reúne todos os seus canais em um só lugar.",
    benefits: ["Mais conversões", "Fácil navegação", "Profissionalismo"],
    cta: "Quero otimizar minha bio",
    color: "from-pink-300 to-pink-400",
  },
  {
    icon: WebsiteIcon,
    title: "Sites e Landing Pages",
    description: "Sites responsivos e landing pages focadas em converter visitantes em clientes.",
    benefits: ["Presença digital", "Design moderno", "Foco em conversão"],
    cta: "Quero um site",
    color: "from-blue-300 to-blue-400",
  },
  {
    icon: PaletteIcon,
    title: "Logos e Identidade Visual",
    description: "Logos personalizados que representam sua marca e criam identidade profissional.",
    benefits: ["Destaque no mercado", "Identidade consistente", "Profissionalismo"],
    cta: "Quero um logo",
    color: "from-green-300 to-green-400",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-pink-50/50">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que fazemos por você
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas para impulsionar seu negócio
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
             <AnimateOnScroll key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                <ServiceCard service={service} />
             </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
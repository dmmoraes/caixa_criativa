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
    title: 'Nunca Mais Perca um Cliente ou Agendamento',
    description:
      'Crie bots humanizados que funcionam como um funcionário que nunca dorme, atendendo seus clientes 24h por dia, agendando serviços e qualificando leads automaticamente. Garanta que nenhuma oportunidade escape, mesmo fora do horário comercial.',
    benefits: ['Atendimento Ininterrupto 24/7', 'Respostas Instantâneas e Precisas', 'Qualificação Automática de Leads'],
    cta: 'Quero Automatizar Meu Atendimento',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: InstagramIcon,
    title: 'Pare de Perder Vendas no Instagram por uma Bio Amadora',
    description:
      'Chega de passar vários links ou sentir que sua bio não reflete seu profissionalismo. Tenha uma bio otimizada e um link personalizado que reúne todos os seus canais e informações importantes em um único local, com banners e design que impressionam.',
    benefits: ['Mais Conversões e Engajamento', 'Navegação Intuitiva e Fácil', 'Imagem Profissional e Coesa'],
    cta: 'Quero Otimizar Meu Instagram',
    color: 'from-pink-500 to-orange-500',
  },
  {
    icon: WebsiteIcon,
    title: 'Sites e Landing Pages que Convertem Visitas em Clientes',
    description: 'Acabe com a sensação de amadorismo e conquiste a confiança dos seus clientes. Desenvolvemos sites responsivos e landing pages com design moderno, focados em transformar visitantes em clientes fiéis, garantindo uma presença digital profissional e eficaz.',
    benefits: ['Presença Digital de Impacto', 'Design Moderno e Responsivo', 'Foco Total na Conversão'],
    cta: 'Quero um Site Profissional',
    color: 'from-teal-400 to-blue-500',
  },
  {
    icon: PaletteIcon,
    title: 'Sua Marca, Sua Identidade Precisam Deixam uma Impressão Duradoura',
    description: 'Sua logo não é apenas uma imagem; é a alma da sua marca. Criamos logos personalizados e identidade visual completa que representam a essência do seu negócio, garantindo profissionalismo e destaque em um mercado competitivo. Mostre aos seus clientes que você se preocupa com cada detalhe.',
    benefits: ['Destaque e Reconhecimento no Mercado', 'Identidade Visual Consistente', 'Profissionalismo em Cada Detalhe'],
    cta: 'Quero um Logo Exclusivo',
    color: 'from-fuchsia-500 to-purple-600',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            O que fazemos por você
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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


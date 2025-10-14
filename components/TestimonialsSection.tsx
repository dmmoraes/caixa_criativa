import React from 'react';
import { ScissorsIcon } from './icons/ScissorsIcon';
import { ZapIcon } from './icons/ZapIcon';
import { StorefrontIcon } from './icons/StorefrontIcon';
import { CoffeeIcon } from './icons/CoffeeIcon';
import AnimateOnScroll from './AnimateOnScroll';

const sectors = [
  { name: 'Salão de Beleza', icon: ScissorsIcon, color: 'from-pink-300 to-pink-400', description: 'Como a Ana, que automatizou seus agendamentos e nunca mais perdeu cliente por não conseguir atender o telefone.' },
  { name: 'Serviços Locais', icon: ZapIcon, color: 'from-purple-300 to-purple-400', description: 'Como o Pedro, eletricista, que agora qualifica seus clientes via bot e envia orçamentos muito mais rápido.' },
  { name: 'Cafés & Restaurantes', icon: CoffeeIcon, color: 'from-yellow-400 to-yellow-500', description: 'Como a Cafeteria Aconchego, que usa um bot para receber pedidos e reservas, otimizando o fluxo da cozinha.' },
  { name: 'Lojas Online', icon: StorefrontIcon, color: 'from-blue-300 to-blue-400', description: 'Como a loja da Bia, que agora oferece suporte 24h e rastreamento de pedidos de forma automática.' },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-pink-50/50">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Nossos Clientes</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">Atendemos uma grande variedade de pequenos negócios. Veja alguns exemplos de quem confia em nosso trabalho.</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
             <AnimateOnScroll
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="clay-card p-8 text-center group flex flex-col h-full"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${sector.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                  <sector.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{sector.name}</h3>
                <p className="text-sm text-gray-600 flex-grow">{sector.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="text-center mt-16">
            <h3 className="text-xl font-bold text-gray-800">Em breve, depoimentos reais.</h3>
            <p className="text-gray-600 mt-2">Seja um dos nossos primeiros casos de sucesso e ganhe um bônus especial!</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
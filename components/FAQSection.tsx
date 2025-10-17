import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import AnimateOnScroll from './AnimateOnScroll';

const faqData = [
  {
    question: 'O que é automação de atendimento?',
    answer:
      'É o uso de tecnologia, como chatbots, para responder clientes, agendar serviços e qualificar leads automaticamente, 24 horas por dia, sem intervenção humana.',
  },
  {
    question: 'Quanto tempo leva para criar um bot/site?',
    answer:
      'O tempo varia com a complexidade. Um bot simples pode ser configurado em poucos dias, enquanto um site personalizado leva em média de 1 a 3 semanas.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega?',
    answer:
      'Sim! Todos os nossos serviços incluem um período de suporte para garantir que tudo funcione perfeitamente e para tirar qualquer dúvida que você tenha.',
  },
  {
    question: 'Como faço para contratar?',
    answer:
      "É simples! Basta clicar em qualquer botão 'Fale com nosso assistente', conversar com nosso bot e ele te guiará para receber uma proposta personalizada.",
  },
  {
    question: 'Qual o investimento necessário?',
    answer:
      'Nossos preços são pensados para pequenas empresas. O investimento depende dos serviços que você precisa. Fale com nosso bot para receber um orçamento sem compromisso.',
  },
  {
    question: 'Posso personalizar os serviços?',
    answer:
      'Com certeza! Nossas soluções são flexíveis. Montamos um pacote que atenda exatamente às necessidades do seu negócio.',
  },
];

const FAQItem: React.FC<{ item: (typeof faqData)[0]; isOpen: boolean; onClick: () => void }> = ({
  item,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-4 font-semibold text-white hover:text-purple-400 transition-colors"
      >
        <span>{item.question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-400' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-gray-400">{item.answer}</div>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-400">Tire suas dúvidas sobre nossos serviços</p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="aurora-card p-8">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FAQSection;

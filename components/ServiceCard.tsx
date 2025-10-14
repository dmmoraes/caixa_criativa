import React from 'react';
import { useChatbot } from '../contexts/ChatbotContext';
import { CheckIcon } from './icons/CheckIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface Service {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  color: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { openChat } = useChatbot();

  const handleOpenChat = () => {
    const initialMessage = `Olá! Tenho interesse no serviço: ${service.title}. Pode me falar mais sobre?`;
    openChat(initialMessage);
  };

  return (
    <div className="clay-card p-8 h-full flex flex-col">
      <div
        className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg flex-shrink-0`}
      >
        <service.icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>

      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

      <div className="space-y-3 mb-6">
        {service.benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <CheckIcon className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-sm text-gray-700 font-medium">{benefit}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleOpenChat}
        className="clay-button bg-gradient-to-br from-green-400 to-green-500 w-full text-white font-semibold group mt-auto py-3 flex items-center justify-center space-x-2"
      >
        <span>{service.cta}</span>
        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default ServiceCard;

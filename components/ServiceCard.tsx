import React from 'react';
import { useChatbot } from '../contexts/ChatbotContext';
import { CheckIcon } from './icons/CheckIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { useTheme } from '../contexts/ThemeContext';

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
      case 'from-yellow-500 to-orange-500':
        return 'from-yellow-300 to-orange-300';
      case 'from-teal-500 to-blue-500':
        return 'from-teal-300 to-blue-300';
      default:
        return c;
    }
  };

  const handleOpenChat = () => {
    const initialMessage = `Olá! Tenho interesse no serviço: ${service.title}. Pode me falar mais sobre?`;
    openChat(initialMessage);
  };

  return (
    <div
      className="aurora-card p-8 h-full flex flex-col"
    >
      <div
        className={`icon-swatch w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${isDark ? service.color : mapPastel(service.color)} flex items-center justify-center shadow-lg md:group-hover:scale-110 transition-transform flex-shrink-0`}
      >
        <service.icon className={`w-8 h-8 ${isDark ? 'text-white' : 'text-slate-700'}`} />
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">
        {service.title}
      </h3>

      <p className="text-gray-400 mb-6 flex-grow">
        {service.description}
      </p>

      <div className="space-y-3 mb-6">
        {service.benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
              <CheckIcon className="w-4 h-4 text-teal-400" />
            </div>
            <span className="text-sm text-gray-300 font-medium">{benefit}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleOpenChat}
        className="cta-button w-full text-white font-semibold group mt-auto py-3 flex items-center justify-center space-x-2"
      >
        <span>{service.cta}</span>
        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default ServiceCard;

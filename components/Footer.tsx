import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { ChatBotIcon } from './icons/ChatBotIcon';
import { MailIcon } from './icons/MailIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-300 to-blue-300 flex items-center justify-center shadow-lg">
                <ChatBotIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="ml-2 text-lg font-bold text-gray-800">Caixa Criativa</h3>
            </div>
            <p className="text-sm text-gray-600">Automatize seu negócio e cresça com eficiência.</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/caixacriativa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500 transition-transform hover:-translate-y-px inline-block"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/caixacriativa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition-transform hover:-translate-y-px inline-block"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#/meme-sapiens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Jogo Meme Sapiens
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Automação de Atendimento</li>
              <li className="text-gray-600 text-sm">Bio e Link na Bio</li>
              <li className="text-gray-600 text-sm">Sites e Landing Pages</li>
              <li className="text-gray-600 text-sm">Logos e Identidade Visual</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5548984001305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm flex items-center"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  (48) 98400-1305
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@caixacriativa.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center"
                >
                  <MailIcon className="w-4 h-4 mr-2" />
                  contato@caixacriativa.com
                </a>
              </li>
              <li className="text-gray-600 text-sm pt-2">CNPJ: 00.000.000/0001-00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Caixa Criativa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

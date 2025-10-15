import React from 'react';
import InfoTooltip from './InfoTooltip';

interface GameHeaderProps {
  memecoins: number;
}

const CoinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
    </svg>
);

const GameHeader: React.FC<GameHeaderProps> = ({ memecoins }) => {
  return (
    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 shadow-md rounded-full px-4 py-2">
      <CoinIcon />
      <span className="font-bold text-lg text-gray-800 dark:text-gray-200">{memecoins}</span>
      <div className="flex items-center space-x-1">
        <span className="text-sm text-gray-500 dark:text-gray-400">Memecoins</span>
        <InfoTooltip text="Memecoins são a moeda do jogo! Acumule-as acertando desafios para desbloquear novos conteúdos e customizações no futuro." />
      </div>
    </div>
  );
};

export default GameHeader;

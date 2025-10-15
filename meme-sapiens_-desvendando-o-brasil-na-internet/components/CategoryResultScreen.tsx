import React, { useState, useEffect } from 'react';

interface CategoryResultScreenProps {
  score: number;
  total: number;
  onPlayAgain: () => void;
}

const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v1.268l.965.344a1 1 0 01.535 1.579l-1.889 3.272a1 1 0 01-1.688.088l-1.04-1.802a1 1 0 00-1.732 1l.52 1.271a1 1 0 01-1.54 1.271L7 9.421a1 1 0 01-1.272-1.54l1.27-.521a1 1 0 001-1.732l-1.8-1.04a1 1 0 01.088-1.688l3.272-1.89a1 1 0 011.58.535L10.732 2H12a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V6h-1V4.414l-1.293-1.293L11.3 1.046zM14 8a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM5 8a1 1 0 011-1h1a1 1 0 110 2H6a1 1 0 01-1-1zM4 14a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M5 16a1 1 0 100 2h10a1 1 0 100-2H5z" />
    </svg>
);


const CategoryResultScreen: React.FC<CategoryResultScreenProps> = ({ score, total, onPlayAgain }) => {
    const [displayScore, setDisplayScore] = useState(0);
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    let message = "Continue praticando!";
    if (percentage > 90) {
        message = "Você é um verdadeiro Mestre dos Memes!";
    } else if (percentage > 60) {
        message = "Excelente! Você está no caminho certo.";
    }

    useEffect(() => {
        if (score === 0) {
            setDisplayScore(0);
            return;
        }

        const duration = 1000;
        let start: number | null = null;

        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const currentAnimatedScore = Math.floor(progress * score);
            setDisplayScore(currentAnimatedScore);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setDisplayScore(score); // Ensure it ends on the exact score
            }
        };

        window.requestAnimationFrame(step);
    }, [score]);


  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 p-6 md:p-8 animate-results-appear">
        <style>{`
            @keyframes results-appear {
                from { opacity: 0; transform: scale(0.95) translateY(10px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-results-appear { animation: results-appear 0.5s ease-out forwards; }
        `}</style>
        <TrophyIcon />
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Trilha Concluída!</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Você acertou <span className="font-bold text-2xl tabular-nums">{displayScore}</span> de <span className="font-bold text-2xl">{total}</span> perguntas!
      </p>
      <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">{message}</p>
      <button
        onClick={onPlayAgain}
        className="py-3 px-8 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-105"
      >
        Jogar Novamente
      </button>
    </div>
  );
};

export default CategoryResultScreen;
import React, { useState, useEffect } from 'react';
import { Challenge, AnswerResult } from '../types';
import ProgressBar from './ProgressBar';

interface ChallengeScreenProps {
  challenge: Challenge;
  onAnswer: (selectedIndex: number) => void;
  categoryTitle: string;
  difficultyName?: string;
  currentChallengeIndex: number;
  totalChallenges: number;
  answerResult: AnswerResult | null;
  onNext: () => void;
}

const ChallengeScreen: React.FC<ChallengeScreenProps> = ({
  challenge,
  onAnswer,
  categoryTitle,
  difficultyName,
  currentChallengeIndex,
  totalChallenges,
  answerResult,
  onNext
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    // Reseta a resposta selecionada quando o desafio muda.
    // Isso corrige o bug de a próxima pergunta já vir respondida.
    setSelectedAnswer(null);
  }, [challenge.id]);

  const handleOptionClick = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setTimeout(() => onAnswer(index), 500);
  };
  
  const getButtonClass = (index: number) => {
    if (selectedAnswer === null) {
      return 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm hover:shadow-lg hover:scale-[1.02]';
    }
    
    const isCorrect = index === challenge.correctAnswerIndex;
    const isSelected = index === selectedAnswer;

    if (isSelected && isCorrect) return 'bg-green-500 text-white animate-pulse-correct';
    if (isSelected && !isCorrect) return 'bg-red-500 text-white animate-shake';
    
    // After an incorrect selection, this highlights the correct answer with a pulse.
    if (isCorrect) return 'bg-green-500 text-white animate-pulse-correct';
    
    return 'bg-white dark:bg-gray-800 opacity-60';
  };

  return (
    <div className="space-y-6">
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
          }
          .animate-shake { animation: shake 0.5s ease-in-out; }
          
          @keyframes pulse-correct {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7); }
            50% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(22, 163, 74, 0); }
          }
          .animate-pulse-correct { animation: pulse-correct 0.8s; }
          
          @keyframes meme-appear {
            from { opacity: 0; transform: scale(0.9) rotate(-3deg); }
            to { opacity: 1; transform: scale(1) rotate(0deg); }
          }
          .animate-meme-appear { animation: meme-appear 0.6s ease-out; }

          @keyframes option-appear {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-option-appear {
            opacity: 0; /* Start hidden to prevent flash */
            animation: option-appear 0.5s ease-out forwards;
          }

          @keyframes slide-up-feedback {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-up-feedback { animation: slide-up-feedback 0.5s ease-out forwards; }
        `}
      </style>
      <div>
        <div className="flex justify-between items-start mb-2">
           <div>
              <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">{categoryTitle}</h2>
              {difficultyName && <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{difficultyName}</p>}
           </div>
          <div className="text-right">
             <div className="text-sm font-semibold text-gray-500">{currentChallengeIndex} / {totalChallenges}</div>
          </div>
        </div>
        <ProgressBar current={currentChallengeIndex} total={totalChallenges} />
      </div>
      
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 italic">Fonte: {challenge.source}</p>
        <p className="text-lg leading-relaxed whitespace-pre-wrap">{challenge.text}</p>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-8 items-start space-y-6 md:space-y-0">
          <div className="text-center p-4 bg-gray-200 dark:bg-gray-700 rounded-xl animate-meme-appear">
              <img src={challenge.meme.url} alt={challenge.meme.alt} className="w-full h-auto max-h-64 object-contain rounded-lg mx-auto"/>
              {challenge.meme.caption && <p className="mt-2 text-md font-semibold italic">"{challenge.meme.caption}"</p>}
          </div>

          <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center md:text-left">{challenge.question}</h3>
              <div className="flex flex-col space-y-3">
              {challenge.options.map((option, index) => (
                  <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-lg text-left font-medium transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-purple-500 animate-option-appear ${getButtonClass(index)}`}
                  style={{ animationDelay: `${150 * index}ms` }}
                  >
                  {option}
                  </button>
              ))}
              </div>
          </div>
      </div>
      
      {answerResult && (
        <div className="mt-8 p-6 bg-white dark:bg-gray-900/50 rounded-xl shadow-md text-center animate-slide-up-feedback">
          <h3 className={`text-2xl font-bold mb-2 ${answerResult.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {answerResult.isCorrect ? 'Boa, mandou bem!' : 'Ops, quase lá!'}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{answerResult.explanation}</p>
          <button
            onClick={onNext}
            className="py-3 px-8 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all duration-300 text-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Próximo Desafio
          </button>
        </div>
      )}
    </div>
  );
};

export default ChallengeScreen;
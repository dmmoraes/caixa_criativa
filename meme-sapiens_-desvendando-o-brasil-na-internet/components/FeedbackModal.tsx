import React from 'react';
import { AnswerResult } from '../types';

interface FeedbackModalProps {
  result: AnswerResult;
  onNext: () => void;
}

const SuccessIcon = () => (
    <svg className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
  
const ErrorIcon = () => (
    <svg className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const FeedbackModal: React.FC<FeedbackModalProps> = ({ result, onNext }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in">
        <style>{`
            @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            .animate-fade-in { animation: fade-in 0.3s ease-out; }
            .animate-slide-up { animation: slide-up 0.4s ease-out; }
        `}</style>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center space-y-4 animate-slide-up">
        <div className="flex justify-center">
            {result.isCorrect ? <SuccessIcon /> : <ErrorIcon />}
        </div>
        <h2 className={`text-3xl font-bold ${result.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
          {result.isCorrect ? 'Correto!' : 'Ops! Não foi dessa vez.'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">{result.explanation}</p>
        <button
          onClick={onNext}
          className="w-full py-3 px-6 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-105"
        >
          Próximo Desafio
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;

import React, { useEffect, useState } from 'react';
import { LOADING_MEMES } from '../constants.tsx';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [displayMeme, setDisplayMeme] = useState(LOADING_MEMES[0]);

  useEffect(() => {
    // Pick a random meme to display
    setDisplayMeme(LOADING_MEMES[Math.floor(Math.random() * LOADING_MEMES.length)]);

    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000); // 3-second loading simulation

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center h-[60vh] animate-fadeIn">
        <div className="w-full max-w-sm">
            <img 
                src={displayMeme.meme.url}
                alt={displayMeme.meme.alt} 
                className="rounded-lg shadow-2xl mx-auto mb-6"
            />
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 italic">"{displayMeme.text}"</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-8 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full animate-loading-bar"></div>
            </div>
        </div>
        <style>
        {`
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .animate-fadeIn {
                animation: fadeIn 0.5s ease-in-out;
            }
            @keyframes loading-bar {
                0% { width: 0%; }
                100% { width: 100%; }
            }
            .animate-loading-bar {
                animation: loading-bar 3s linear forwards;
            }
        `}
        </style>
    </div>
  );
};

export default LoadingScreen;

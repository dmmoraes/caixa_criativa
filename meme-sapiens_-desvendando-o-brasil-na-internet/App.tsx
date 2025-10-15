import React, { useState, useCallback, useMemo } from 'react';
import { GameState, Category, AnswerResult } from './types';
import { CATEGORIES } from './constants.tsx';
import HomeScreen from './components/HomeScreen';
import LoadingScreen from './components/LoadingScreen';
import ChallengeScreen from './components/ChallengeScreen';
import CategoryResultScreen from './components/CategoryResultScreen';
import GameHeader from './components/GameHeader';

function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.HOME);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [memecoins, setMemecoins] = useState(0);
  const [lastAnswerResult, setLastAnswerResult] = useState<AnswerResult | null>(null);
  const [sessionScore, setSessionScore] = useState(0);

  const handleSelectCategory = useCallback((category: Category) => {
    setCurrentCategory(category);
    setChallengeIndex(0);
    setSessionScore(0);
    setGameState(GameState.LOADING);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setGameState(GameState.PLAYING);
  }, []);

  const handleAnswer = useCallback((selectedIndex: number) => {
    if (!currentCategory) return;
    const challenge = currentCategory.challenges[challengeIndex];
    const isCorrect = selectedIndex === challenge.correctAnswerIndex;
    if (isCorrect) {
        setMemecoins(prev => prev + 10);
        setSessionScore(prev => prev + 1);
    }
    setLastAnswerResult({ isCorrect, explanation: challenge.explanation });
  }, [currentCategory, challengeIndex]);

  const handleNextChallenge = useCallback(() => {
    setLastAnswerResult(null);
    if (currentCategory && challengeIndex < currentCategory.challenges.length - 1) {
      setChallengeIndex(prev => prev + 1);
    } else {
      setGameState(GameState.FINISHED_CATEGORY);
    }
  }, [currentCategory, challengeIndex]);

  const handlePlayAgain = useCallback(() => {
    setCurrentCategory(null);
    setGameState(GameState.HOME);
  }, []);

  const currentChallenge = useMemo(() => {
    if (gameState === GameState.PLAYING && currentCategory) {
      return currentCategory.challenges[challengeIndex];
    }
    return null;
  }, [gameState, currentCategory, challengeIndex]);
  
  const renderContent = () => {
    switch (gameState) {
      case GameState.LOADING:
        return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
      case GameState.PLAYING:
        if (currentChallenge && currentCategory) {
          return (
            <ChallengeScreen
              challenge={currentChallenge}
              onAnswer={handleAnswer}
              categoryTitle={currentCategory.title}
              difficultyName={currentCategory.difficultyName}
              currentChallengeIndex={challengeIndex + 1}
              totalChallenges={currentCategory.challenges.length}
              answerResult={lastAnswerResult}
              onNext={handleNextChallenge}
            />
          );
        }
        return null;
       case GameState.FINISHED_CATEGORY:
        if (currentCategory) {
             return <CategoryResultScreen 
                score={sessionScore} 
                total={currentCategory.challenges.length}
                onPlayAgain={handlePlayAgain}
            />;
        }
        return null;
      case GameState.HOME:
      default:
        return <HomeScreen categories={CATEGORIES} onSelectCategory={handleSelectCategory} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
       <style>{`
        @keyframes screen-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-screen-fade-in {
          animation: screen-fade-in 0.5s ease-out forwards;
        }
      `}</style>
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Meme Sapiens
          </h1>
          {gameState !== GameState.HOME && <GameHeader memecoins={memecoins} />}
        </header>
        <div
          key={gameState}
          className="animate-screen-fade-in"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/70 dark:border-white/10 bg-white/80 dark:bg-gray-900/40 shadow-[0_10px_30px_rgba(31,41,55,0.15)] backdrop-blur p-6 md:p-10">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
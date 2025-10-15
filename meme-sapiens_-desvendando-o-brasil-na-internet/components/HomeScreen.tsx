import React, { useMemo, useState } from 'react';
import { Category, CategoryWithDifficulties, DifficultyLevel } from '../types';

interface HomeScreenProps {
  categories: CategoryWithDifficulties[];
  onSelectCategory: (category: Category) => void;
}

const personaDisplay: Record<DifficultyLevel, { label: string; color: string; bg: string; emoji?: string }> = {
  'Jovem Geração Z': { label: 'Geração Z', color: 'from-purple-600 to-fuchsia-500', bg: 'bg-purple-600', emoji: '📱' },
  'Adulto Raiz': { label: 'Adulto Raiz', color: 'from-blue-600 to-indigo-500', bg: 'bg-blue-600', emoji: '🖨️' },
  'Expert da Internet': { label: 'Expert da Internet', color: 'from-emerald-600 to-green-500', bg: 'bg-emerald-600', emoji: '🤓' },
};

const HomeScreen: React.FC<HomeScreenProps> = ({ categories, onSelectCategory }) => {
  const [selectedPersona, setSelectedPersona] = useState<DifficultyLevel | null>(null);

  const allPersonaKeys = useMemo(() => {
    // Collect union of difficulty keys present across categories to be robust
    const keys = new Set<DifficultyLevel>();
    categories.forEach((c) => Object.keys(c.difficulties).forEach((k) => keys.add(k as DifficultyLevel)));
    return Array.from(keys) as DifficultyLevel[];
  }, [categories]);

  const handleStartCategory = (categoryData: CategoryWithDifficulties, level: DifficultyLevel) => {
    const selectedDifficulty = categoryData.difficulties[level];
    if (!selectedDifficulty) return;
    const categoryForGame: Category = {
      id: categoryData.id,
      title: categoryData.title,
      description: categoryData.description,
      icon: categoryData.icon,
      challenges: selectedDifficulty.challenges,
      difficultyName: selectedDifficulty.name,
    };
    onSelectCategory(categoryForGame);
  };

  const handleStartAllTrails = (level: DifficultyLevel) => {
    // Merge challenges from all categories for the chosen persona
    const merged = categories.flatMap((c) => c.difficulties[level]?.challenges || []);
    const categoryForGame: Category = {
      id: 'todas-as-trilhas',
      title: 'Todas as Trilhas',
      description: 'Misture tudo e teste seu conhecimento geral!',
      icon: <div className="text-3xl">✨</div>,
      challenges: merged,
      difficultyName: personaDisplay[level]?.label || level,
    };
    onSelectCategory(categoryForGame);
  };

  if (!selectedPersona) {
    // Step 1: choose persona
    return (
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
          Meme Sapiens
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">Escolha seu perfil para começar a desvendar o Brasil na internet!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-stretch">
          {allPersonaKeys.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedPersona(level)}
              className={`rounded-2xl p-8 text-left bg-gradient-to-br ${personaDisplay[level]?.color || 'from-slate-500 to-slate-600'} text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className="text-5xl mb-4">{personaDisplay[level]?.emoji || '🧠'}</div>
              <h3 className="text-2xl font-extrabold mb-2">{personaDisplay[level]?.label || level}</h3>
              <p className="opacity-90">
                {level === 'Jovem Geração Z' && 'Domina os trends e a linguagem da internet como ninguém.'}
                {level === 'Adulto Raiz' && 'Viveu a era do Orkut e MSN, mas ainda se vira no zap.'}
                {level === 'Expert da Internet' && 'Manja dos memes, das tretas e dos primórdios da web.'}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Step 2: choose theme within persona
  return (
    <div className="text-center">
      <button
        onClick={() => setSelectedPersona(null)}
        className="text-sm text-gray-600 dark:text-gray-300 mb-4 inline-flex items-center hover:text-gray-800"
        aria-label="Voltar"
      >
        <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        Voltar
      </button>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
        Olá, {personaDisplay[selectedPersona]?.label || selectedPersona}!
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Escolha uma trilha de desafios para exercitar seus neurônios e se tornar um Meme Sapiens!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleStartCategory(category, selectedPersona)}
            className="rounded-2xl p-6 text-left bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="mb-3">{category.icon}</div>
            <h3 className="text-xl font-extrabold mb-2 text-gray-900 dark:text-white">{category.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
          </button>
        ))}

        {/* Todas as Trilhas */}
        <button
          onClick={() => handleStartAllTrails(selectedPersona)}
          className="rounded-2xl p-6 text-left bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="text-4xl mb-3">✨</div>
          <h3 className="text-xl font-extrabold mb-2 text-gray-900 dark:text-white">Todas as Trilhas</h3>
          <p className="text-gray-600 dark:text-gray-400">Misture tudo e teste seu conhecimento geral!</p>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
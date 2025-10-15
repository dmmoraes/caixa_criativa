import React from 'react';

export type DifficultyLevel = 'Jovem Geração Z' | 'Adulto Raiz' | 'Expert da Internet';

export interface Meme {
  url: string;
  alt: string;
  caption?: string;
}

export interface Challenge {
  id: number;
  text: string;
  source: string;
  meme: Meme;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

// Represents a category with all its difficulty levels, used on the home screen
export interface CategoryWithDifficulties {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulties: {
    [key in DifficultyLevel]?: {
      name: string;
      challenges: Challenge[];
    }
  };
}

// Represents a category that is actively being played
export interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  challenges: Challenge[];
  difficultyName?: string;
}


export enum GameState {
  HOME,
  LOADING,
  PLAYING,
  FINISHED_CATEGORY,
}

export interface AnswerResult {
    isCorrect: boolean;
    explanation: string;
}
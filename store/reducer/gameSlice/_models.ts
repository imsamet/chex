import { Child, GetGame } from '@/core/_model';
import { Level } from '@/db/_model';

export type SelectLetter = {
  index: number;
  letter: string;
};
export type Score = {
  level: Level;
  stepId: string;
  score: number;
  addTime: number;
  matchWords: string[];
  notMatchWords: string[];
  child: Child;
  message: string;
};
export type GameState = {
  level: Level;
  isLastGame: boolean;
  isLoading: boolean;
  letterSetId: null | string;
  selectLetter: SelectLetter[];
  game: null | GetGame;
  isRunning: boolean;
  time: number;
  words: {
    level: Level;
    letterSetId: string;
    word: string;
  }[];
  scores: Score[];
};

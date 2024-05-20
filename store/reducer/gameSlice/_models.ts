import { GetGame } from '@/core/_model';
import { Level } from '@/db/_model';

export type SelectLetter = {
  index: number;
  letter: string;
};
export type GameState = {
  level: Level;
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
};

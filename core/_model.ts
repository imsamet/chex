import { Level } from '@/db/_model';

type Game = {
  id: string;
  'letter-set': string[];
  wordsLength: number;
};
type Step = {
  level: Level;
  games: Game[];
};
export type GetGame = {
  steps: Step[];
};

export type Lang = 'en' | 'tr';

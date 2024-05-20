import { GetGame } from '@/core/_model';
import { Level } from '@/db/_model';

export type GameState = {
  level: Level;
  isLoading: boolean;
  game: null | GetGame;
  time: number;
  words:
    | null
    | {
        level: Level;
        letterSetId: string;
        word: string;
      }[];
};

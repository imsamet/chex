export type Level = 1 | 2 | 3;
type GameStep = {
  id: string;
  'letter-set': string[];
  words: string[];
};
type Step = {
  level: Level;
  games: GameStep[];
};
export type Game = {
  steps: Step[];
};
export interface DB {
  en: Game;
  tr: Game;
}

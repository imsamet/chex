type GameStep = {
  id: string;
  'letter-set': string[];
  words: string[];
};
type Step = {
  level: 1 | 2 | 3;
  games: GameStep[];
};
export type Game = {
  steps: Step[];
};
export interface DB {
  en: Game;
  tr: Game;
}

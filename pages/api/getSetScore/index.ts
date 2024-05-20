import { getData } from '@/server/getData';
import { NextApiRequest, NextApiResponse } from 'next';

type BodyType = {
  lang: 'en' | 'tr';
  level: 1 | 2 | 3;
  steps: {
    id: string;
    words: string[];
  }[];
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { lang, level, steps } = req.body as BodyType;
  getData(lang)
    .then(game => {
      let matchWords: string[] = [];
      let notMatchWords: string[] = [];
      game.steps
        .find(i => i.level === level)
        ?.games.map(i => {
          const step = steps.find(s => s.id === i.id);
          matchWords = [...matchWords, ...i.words.filter(w => step?.words.some(s => s === w))];
          notMatchWords = [...notMatchWords, ...i.words.filter(w => !step?.words.some(s => s === w))];
        });
      const resJson = {
        score: matchWords.length * 5,
        addTime: matchWords.length * 15,
        matchWords,
        notMatchWords,
      };
      res.status(200).json(resJson);
    })
    .catch(e => res.status(500).json(e));
}

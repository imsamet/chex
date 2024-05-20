import { Lang } from '@/core/_model';
import { getData } from '@/server/getData';
import { NextApiRequest, NextApiResponse } from 'next';

type BodyType = {
  lang: Lang;
  level: 1 | 2 | 3;
  step: {
    id: string;
    words: string[];
  };
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { lang, level, step } = req.body as BodyType;
  getData(lang)
    .then(game => {
      let matchWords: string[] = [];
      let notMatchWords: string[] = [];
      const temp = game.steps.find(i => i.level === level)?.games.find(i => i.id === step.id);
      matchWords = [...(temp?.words.filter(w => step?.words.some(s => s === w)) || [])];
      notMatchWords = [...(temp?.words.filter(w => !step?.words.some(s => s === w)) || [])];
      const resJson = {
        level,
        stepId: step.id,
        score: matchWords.length * 5,
        addTime: matchWords.length * 15 + notMatchWords.length * -1,
        matchWords,
        notMatchWords,
      };
      res.status(200).json(resJson);
    })
    .catch(e => res.status(500).json(e));
}

import { Child, Lang } from '@/core/_model';
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
const randomChild = (): Child => {
  const temp: Child[] = ['Berkesu', 'Cansu', 'Fatmasu', 'Karsu'];
  const randomIndex = Math.floor(Math.random() * temp.length);
  return temp[randomIndex];
};
const randomMessage = (): string => {
  const temp: string[] = ['message-1', 'message-2', 'message-3', 'message-4', 'message-5'];
  const randomIndex = Math.floor(Math.random() * temp.length);
  return temp[randomIndex];
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
        score: matchWords.length * 5 + notMatchWords.length * -1,
        addTime: matchWords.length * 15 + notMatchWords.length * -1,
        matchWords,
        notMatchWords,
        child: randomChild(),
        message: randomMessage(),
      };
      res.status(200).json(resJson);
    })
    .catch(e => res.status(500).json(e));
}

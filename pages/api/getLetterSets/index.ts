import { getData } from '@/server/getData';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lang } = req.query;
  getData(lang)
    .then(game => {
      const resJson = {
        steps: game.steps.map(i => ({
          level: i.level,
          games: i.games.map(g => ({
            id: g.id,
            'letter-set': g['letter-set'],
            words: g.words.length,
          })),
        })),
      };
      res.status(200).json(resJson);
    })
    .catch(e => res.status(500).json(e));
}

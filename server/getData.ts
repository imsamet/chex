import path from 'path';
import { promises as fs } from 'fs';
import { DB, Game } from '@/db/_model';
export const getData = async (lang: string | string[] | undefined): Promise<Game> => {
  return new Promise(async (resolve, reject) => {
    const jsonFilePath = path.join(process.cwd(), 'db', 'db.json');
    try {
      const jsonData = await fs.readFile(jsonFilePath, 'utf8');
      const data: DB = JSON.parse(jsonData);
      if (lang && (lang === 'en' || lang === 'tr')) {
        resolve(data[lang]);
      } else {
        reject({ error: 'language not detected' });
      }
    } catch (error) {
      console.error('Error reading JSON file:', error);
      reject({ error: 'Internal Server Error' });
    }
  });
};

import { GetGame, Lang, ScoreBody } from '@/core/_model';
import { URL } from '@/lib/api';
import axios, { AxiosResponse } from 'axios';

export const getGame = async (lang: Lang): Promise<GetGame> => {
  return axios.get(URL + 'getLetterSets', { params: { lang } }).then((res: AxiosResponse<GetGame>) => res.data);
};
export const getScore = async (body: ScoreBody): Promise<GetGame> => {
  return axios.post(URL + 'getScore', body).then((res: AxiosResponse<GetGame>) => res.data);
};

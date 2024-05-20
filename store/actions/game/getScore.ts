import { createAsyncThunk } from '@reduxjs/toolkit';
import { getScore as get } from './core/_request';
import { Lang, ScoreBody } from '@/core/_model';
import { Score } from '@/store/reducer/gameSlice/_models';

const getScore = createAsyncThunk<Score, ScoreBody, { rejectValue: string }>(
  'game/score',
  //@ts-ignore
  async (data: ScoreBody, { rejectWithValue }) => {
    try {
      const response = await get(data);
      return response;
    } catch (e) {
      //@ts-ignore
      return rejectWithValue(e);
    }
  },
);

export default getScore;

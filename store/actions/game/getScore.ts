import { createAsyncThunk } from '@reduxjs/toolkit';
import { getScore as get } from './core/_request';
import { Lang, ScoreBody } from '@/core/_model';

const getScore = createAsyncThunk('game/score', async (data: ScoreBody, { rejectWithValue }) => {
  try {
    const response = await get(data);
    return response;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export default getScore;

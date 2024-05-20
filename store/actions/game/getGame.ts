import { createAsyncThunk } from '@reduxjs/toolkit';
import { postCreateGym as get } from './core/_request';
import { Lang } from '@/core/_model';

const getGame = createAsyncThunk('game/get', async (lang: Lang, { rejectWithValue }) => {
  try {
    const response = await get(lang);
    return response;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export default getGame;

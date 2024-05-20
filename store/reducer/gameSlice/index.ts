import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GameState } from './_models';
import getGame from '../../actions/game/getGame';

const initialState: GameState = {
  isLoading: false,
  level: 1,
  game: null,
  time: 300,
  words: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // setLoading: (state, actions: PayloadAction<boolean>) => {
    //   state.isLoading = actions.payload;
    // },
  },
  extraReducers: builder => {
    builder.addCase(getGame.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getGame.fulfilled, (state, action) => {
      state.isLoading = false;
      state.game = action.payload;
    });
    builder.addCase(getGame.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {} = gameSlice.actions;
export default gameSlice.reducer;

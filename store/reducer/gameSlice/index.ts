import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GameState, SelectLetter } from './_models';
import getGame from '../../actions/game/getGame';
import getScore from '@/store/actions/game/getScore';

const initialState: GameState = {
  isLoading: false,
  level: 1,
  letterSetId: null,
  game: null,
  selectLetter: [],
  isRunning: false,
  time: 60,
  words: [],
  scores: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startTimer: state => {
      state.isRunning = true;
    },
    stopTimer: state => {
      state.isRunning = false;
    },
    tick: state => {
      state.time -= 1;
    },
    setSelectLetter: (state, actions: PayloadAction<SelectLetter>) => {
      state.selectLetter = state.selectLetter.some(i => i.index === actions.payload.index)
        ? state.selectLetter.filter(i => i.index !== actions.payload.index)
        : [...state.selectLetter, actions.payload];
    },
    setBackwardSelectLetter: state => {
      state.selectLetter.pop();
    },
    setCheck: state => {
      const word = state.selectLetter.map(i => i.letter).join('');
      if (!state.letterSetId) return;
      !state.words.some(i => i.word === word) &&
        (state.words = [
          ...state.words,
          {
            level: state.level,
            letterSetId: state.letterSetId,
            word: word,
          },
        ]);
      state.selectLetter = [];
    },
    setDeleteWord: (state, action: PayloadAction<string>) => {
      state.words = state.words.filter(i => i.word !== action.payload);
    },
    setNextStep: state => {
      if (!state.game) return;
      const temp = state.game.steps.find(i => i.level === state.level);
      const index = temp?.games.findIndex(i => i.id === state.letterSetId) || 0;
      if (temp && index < temp?.games.length - 1) {
        state.letterSetId = temp.games[index + 1].id;
        state.selectLetter = [];
        state.time = 60;
      }
      // else if (state.level < 3) {
      //   state.letterSetId = state.game.steps.find(i => i.level === state.level + 1)?.games[0].id || null;
      //   state.level += 1;
      //   state.selectLetter = [];
      //   state.time = 60;
      // }
    },
  },
  extraReducers: builder => {
    builder.addCase(getGame.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getGame.fulfilled, (state, action) => {
      state.isLoading = false;
      state.game = action.payload;
      state.letterSetId = action.payload.steps[0].games[0].id;
    });
    builder.addCase(getGame.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getScore.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getScore.fulfilled, (state, action) => {
      state.isLoading = false;
      //@ts-ignore
      state.scores.push(action.payload);
    });
    builder.addCase(getScore.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {
  stopTimer,
  startTimer,
  tick,
  setSelectLetter,
  setBackwardSelectLetter,
  setCheck,
  setDeleteWord,
  setNextStep,
} = gameSlice.actions;
export default gameSlice.reducer;

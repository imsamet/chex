import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer/gameSlice';

export const store = configureStore({
  reducer: {
    game: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

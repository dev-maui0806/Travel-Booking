import { configureStore } from '@reduxjs/toolkit';
import islandReducer from './slices/islandSlice';

export const store = configureStore({
  reducer: {
    island: islandReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
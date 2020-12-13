import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import transformerReducer from '../features/transformer/transformerSlice';

export const store = configureStore({
  reducer: {
    transformer: transformerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

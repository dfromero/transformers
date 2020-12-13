import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Transformer } from './definitions';
import teams from './transformer.data';

interface TransformerState {
  list: Transformer[];
}

const initialState: TransformerState = {
  list: [...teams],
};

export const transformerSlice = createSlice({
  name: 'transformer',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addTransformer: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    reset: (state) => {
      state.list = [];
    },
  },
});

export const { addTransformer, reset } = transformerSlice.actions;

export const selectTransformers = (state: RootState) => state.transformer.list;

export default transformerSlice.reducer;

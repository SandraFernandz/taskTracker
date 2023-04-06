import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    duration: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDuration(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { changeName, changeDuration } = formSlice.actions;
export const formReducer = formSlice.reducer;

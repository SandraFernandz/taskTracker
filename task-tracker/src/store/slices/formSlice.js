import { createSlice } from '@reduxjs/toolkit';
import { addTask } from './tasksSlice';

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
      state.duration = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addTask, (state, action) => {
      state.name = '';
      state.duration = 0;
    });
  },
});

export const { changeName, changeDuration } = formSlice.actions;
export const formReducer = formSlice.reducer;

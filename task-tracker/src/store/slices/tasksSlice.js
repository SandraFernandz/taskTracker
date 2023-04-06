import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    searchTask: '',
    tasks: [],
  },
  reducers: {
    changeSearchTask(state, action) {
      state.searchTask = action.payload;
    },
    addTask(state, action) {
      // Assumption:
      // action.payload === { name: 'ab', duration: 140}
      state.tasks.push({
        name: action.payload.name,
        duration: action.payload.duration,
        id: nanoid(),
      });
    },
    removeTask(state, action) {
      // Assumption:
      // action.payload === id of the task we want to remove
      const updated = state.tasks.filter((task) => {
        return task.id !== action.payload;
      });
      state.tasks = updated;
    },
  },
});

export const { changeSearchTask, addTask, removeTask, reducers } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

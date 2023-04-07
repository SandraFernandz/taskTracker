import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    searchTask: '',
    tasksData: [],
  },
  reducers: {
    changeSearchTask(state, action) {
      state.searchTask = action.payload;
    },
    addTask(state, action) {
      // Assumption:
      // action.payload === { name: 'ab', duration: 140}
      state.tasksData.push({
        name: action.payload.name,
        duration: action.payload.duration,
        id: nanoid(),
      });
    },
    removeTask(state, action) {
      // Assumption:
      // action.payload === id of the task we want to remove
      const updated = state.tasksData.filter((task) => {
        return task.id !== action.payload;
      });
      state.tasksData = updated;
    },
  },
});

export const { changeSearchTask, addTask, removeTask, reducers } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    searchTask: '',
    cars: [],
  },
  reducers: {
    changeSearchTask(state, action) {
      state.searchTask = action.payload;
    },
    addTask(state, action) {
      // Assumption:
      // action.payload === { name: 'ab', cost: 140}
      state.tasks.push({
        name: action.payload.name,
        duration: action.payload.duration,
        id: nanoid(),
      });
    },
    removeTask(state, action) {
      // Assumption:
      // action.payload === id of the car we want to remove
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updated;
    },
  },
});

export const { changeSearchTask, addTask, removeTask, reducers } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

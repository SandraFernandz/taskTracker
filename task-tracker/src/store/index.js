import { configureStore } from '@reduxjs/toolkit';
import {
  tasksReducer,
  addTask,
  removeTask,
  changeSearchTask,
} from './slices/tasksSlice';
import { formReducer, changeName, changeDuration } from './slices/formSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    form: formReducer,
  },
});

export {
  store,
  changeName,
  changeDuration,
  addTask,
  removeTask,
  changeSearchTask,
};

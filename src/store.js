import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Reducers/index';

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
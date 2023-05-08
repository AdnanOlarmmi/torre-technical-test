import { configureStore } from '@reduxjs/toolkit';
import { bioReducer } from './bio/bioSlice';

const store = configureStore({
  reducer: bioReducer,
});

export default store;

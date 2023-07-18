import { configureStore } from '@reduxjs/toolkit';
import glampingSlice from './gampling/gamplingSlice';

const store = configureStore({
  reducer: {
    glamping: glampingSlice,
  },
});

export default store;

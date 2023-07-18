import { configureStore } from '@reduxjs/toolkit';
import glampingSlice from './gampling/gamplingSlice';
import fileUploadSlice from './file/FileSlice'

const store = configureStore({
  reducer: {
    glamping: glampingSlice,
    fileUpload: fileUploadSlice,
  },
});

export default store;

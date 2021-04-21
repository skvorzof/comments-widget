import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './commentsSlice';

export default configureStore({
  reducer: {
    comments: commentReducer,
  },
});

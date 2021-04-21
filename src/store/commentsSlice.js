import { createSlice } from '@reduxjs/toolkit';
import { getDataStore } from '../api';

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: getDataStore(), // Комментарии из LocalStore
  },
  reducers: {
    addComment: (state, { payload }) => {
      state.comments.push(payload);
    },
    deleteComment: (state, { payload }) => {
      state.comments = state.comments.filter(
        (comment) => comment.date !== payload
      );
    },
  },
});

export const { addComment, deleteComment } = commentSlice.actions;

export default commentSlice.reducer;

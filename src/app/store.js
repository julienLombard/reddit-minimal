import { configureStore } from '@reduxjs/toolkit';
import allPostsReducer from '../features/allPosts/allPostsSlice';
import allCommentsReducer from '../features/allComments/allCommentsSlice';

export const store = configureStore({
  reducer: {
    allPosts: allPostsReducer,
    allComments: allCommentsReducer,
  },
});

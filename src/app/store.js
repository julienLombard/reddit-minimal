import { configureStore } from '@reduxjs/toolkit';
import allPostsReducer from '../features/allPosts/allPostsSlice';

export const store = configureStore({
  reducer: {
    allPosts: allPostsReducer,
  },
});

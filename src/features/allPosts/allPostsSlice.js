import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAsyncAllPosts = createAsyncThunk(
  'allPosts/fetchAsyncAllPosts',
  async (subReddit = 'pic') => {
    const response = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
    const posts = await response.json();
    return posts.data.children;
  }
);

const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState: {
    posts: [],
    subreddit: 'pic',
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAsyncAllPosts.pending]: (state) => {
      console.log('Posts - Pending');
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchAsyncAllPosts.fulfilled]: (state, { payload }) => {
      console.log('Posts - Fetched Successfully!');
      state.posts = payload;
      state.subreddit = payload[0].data.subreddit;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchAsyncAllPosts.rejected]: (state) => {
      console.log('Posts - Rejected!');
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const getAllPosts = (state) => state.allPosts.posts;
export default allPostsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAsyncAllPosts = createAsyncThunk(
  'allPosts/fetchAsyncAllPosts',
  async (subReddit = 'pic') => {
    const response = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
    const posts = await response.json();
    return posts.data.children;
  }
);

export const fetchAsyncSearchedPosts = createAsyncThunk(
  'allPosts/fetchAsyncSearchedPosts',
  async (request) => {
    if (request !== undefined) {
      const response = await fetch(
        `https://www.reddit.com/search.json?q=${request}`
      );
      const posts = await response.json();
      return posts.data.children;
    }
  }
);

const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState: {
    posts: [],
    subreddit: '',
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
    [fetchAsyncSearchedPosts.pending]: (state) => {
      console.log('Searched Posts - Pending');
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchAsyncSearchedPosts.fulfilled]: (state, { payload }) => {
      console.log('Searched Posts - Fetched Successfully!');
      state.posts = payload;
      state.subreddit = '';
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchAsyncSearchedPosts.rejected]: (state) => {
      console.log('Searched Posts - Rejected!');
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const getAllPosts = (state) => state.allPosts.posts;
export default allPostsSlice.reducer;

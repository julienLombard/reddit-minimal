import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAsyncAllPosts = createAsyncThunk(
  'allPosts/fetchAsyncAllPosts',
  async () => {
    const response = await fetch('https://www.reddit.com/r/pic.json');
    const posts = await response.json();
    return posts.data.children;
  }
);

const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAsyncAllPosts.pending]: (state) => {
      console.log('Pending');
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchAsyncAllPosts.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      state.posts = payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchAsyncAllPosts.rejected]: (state) => {
      console.log('Rejected!');
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const getAllPosts = (state) => state.allPosts.posts;
export default allPostsSlice.reducer;

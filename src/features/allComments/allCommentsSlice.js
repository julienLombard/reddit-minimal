import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAsyncAllComments = createAsyncThunk(
  'allPosts/fetchAsyncComments',
  async (permalink) => {
    if (permalink) {
      const response = await fetch(`https://www.reddit.com${permalink}.json`);
      const comments = await response.json();
      return {
        id: comments[0].data.children[0].data.id,
        comments: comments[1].data.children,
      };
    }
  }
);

const allCommentsSlice = createSlice({
  name: 'allComments',
  initialState: {
    comments: [],
    isLoadingComments: false,
    hasErrorComments: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAsyncAllComments.pending]: (state) => {
      console.log('Comments - Pending');
      state.isLoadingComments = true;
      state.hasErrorComments = false;
    },
    [fetchAsyncAllComments.fulfilled]: (state, { payload }) => {
      console.log('Comments - Fetched Successfully!');
      if (payload) {
        state.comments = state.comments.every(
          (comment) => comment.id !== payload.id
        )
          ? [...state.comments, { id: payload.id, comments: payload.comments }]
          : state.comments.map((comment) =>
              comment.id === payload.id ? (comment = payload) : comment
            );
      }
      state.isLoadingComments = false;
      state.hasErrorComments = false;
    },
    [fetchAsyncAllComments.rejected]: (state) => {
      console.log('Comments - Rejected!');
      state.isLoadingComments = false;
      state.hasErrorComments = true;
    },
  },
});

export const getAllComments = (state) => state.allComments.comments;
export default allCommentsSlice.reducer;

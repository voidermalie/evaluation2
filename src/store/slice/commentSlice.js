import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    return response.data;
  }
);

export const refetchComments = createAsyncThunk(
  'comments/refetchComments',
  async (postId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    return response.data;
  }
);

export const addComment = createAsyncThunk(
  'comments/addComment',
  async (data) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/comments/',
      data
    );
    return response.data;
  }
);

export const deleteComment = createAsyncThunk(
  'task/deleteComment',
  async (data) => {
    const { status } = await axios.delete(
      `https://jsonplaceholder.typicode.com/comments/${data}`
    );
    return { status, id: data };
  }
);

export const updateComment = createAsyncThunk(
  'task/updateComment',
  async (data) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/comments/${data.id}`,
      data
    );
    return response.data;
  }
);

const initialState = {
  comment: {
    name: '',
    body: '',
    id: '',
    postId: '',
    email: '',
  },
  comments: [],
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setCommentContent(state, action) {
      state.comment.body = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    }),
      builder.addCase(addComment.fulfilled, (state, action) => {
        state.comments.unshift({
          ...action.payload,
          id: state.comments.length + 1,
        });
        state.comment.body = '';
      }),
      builder.addCase(refetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});

export const { setCommentContent } = commentSlice.actions;

export default commentSlice.reducer;

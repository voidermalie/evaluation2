import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const initialState = {
  post: {
    title: '',
    body: '',
    userId: '',
    id: '',
  },
  posts: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
  return response.data;
});

export const addPost = createAsyncThunk(
    'posts/addPost',
    async (data) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts/', data)
        return response.data;
    }
)

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
  reducers: {
    setPostTitle(state, action) {
      state.post.title = action.payload;
    },
    setPostContent(state, action) {
      state.post.body = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift({...action.payload, id: state.posts.length + 1})
        state.post.title = ''
        state.post.body = ''
        state.post.userId = '1'
    })
  },
});

export const { setPostTitle, setPostContent } = postSlice.actions;

export default postSlice.reducer;

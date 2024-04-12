import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (postId) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        return response.data;
    }
)

const initialState = {
    comment: {
        name: '',
        content: '',
        id: '',
        postId: '',
        email: ''
    },
    comments: []
}

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload
    })
  }
});

export const {} = commentSlice.actions

export default commentSlice.reducer

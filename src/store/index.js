import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice";
import commentSlice from "./slice/commentSlice";
import apiStatusSlice from "./slice/apiStatusSlice";
import apiStatusMiddleware from "./middleware/apiStatusMiddleware";

const store = configureStore({
    reducer: {
        posts: postSlice,
        comments: commentSlice,
        apiStatus: apiStatusSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        apiStatusMiddleware
    ])
})

export default store;

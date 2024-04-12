import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice";
import commentSlice from "./slice/commentSlice";

const store = configureStore({
    reducer: {
        posts: postSlice,
        comments: commentSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([

    ])
})

export default store;

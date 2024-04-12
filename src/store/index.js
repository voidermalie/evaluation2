import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice";

const store = configureStore({
    reducer: {
        posts: postSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([

    ])
})

export default store;

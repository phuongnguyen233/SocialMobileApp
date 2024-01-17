import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from "../src/feature/AuthSlice";
import PostSlice from "../src/feature/PostSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        post: PostSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

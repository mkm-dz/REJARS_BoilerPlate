import { applyMiddleware, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import appReducer from "../reducers/appReducer";

const store = configureStore({
    reducer: appReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: e.g {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
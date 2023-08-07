"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blogs/blogs-slice";

const rootReducer = combineReducers({
  blogs: blogReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

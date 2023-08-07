"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [] as any,
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    getBlog: (state, { payload }) => {
      return state.blogs.find((item: any) => item.id === payload);
    },
    getAllBlogs: (state) => {
      state.blogs;
    },
    createBlog: (state, { payload }) => {
      payload.values.id = Date.now();
      state.blogs.unshift(payload?.values);
    },
    updateBlog: (state, { payload }) => {
      const findBlog = state.blogs.find((blog: any) => blog.id === payload.id);
      if (findBlog) {
        findBlog.title = payload.title;
        findBlog.description = payload.description;
        findBlog.body = payload.body;
        findBlog.image = payload.image;
      }
    },
    deleteBlog: (state, { payload }) => {
      return {
        ...state,
        blogs: [...state.blogs].filter((item) => item.id !== payload),
      };
    },
  },
});

export const { getBlog, getAllBlogs, deleteBlog, createBlog, updateBlog } =
  blogSlice.actions;

export default blogSlice.reducer;

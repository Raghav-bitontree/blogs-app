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
      state.blogs.find((item: any) => item.id === payload);
    },
    getBlogs: (state, { payload }) => {
      state.blogs = payload;
    },
    getBlogById: (state, { payload }) => {
      state.blogs.find((item: any) => item.id === payload);
    },
    createBlog: (state, { payload }) => {
      try {
        const savedBlogs = localStorage.getItem("blogs")
          ? JSON.parse(localStorage.getItem("blogs") as string)
          : [];
        payload.values.id = Date.now();
        payload.values.image = payload.image;
        localStorage.setItem("blogs", JSON.stringify([payload, ...savedBlogs]));
        payload?.values && state.blogs.unshift(payload?.values);
      } catch (err) {
        console.log(err);
      }
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

export function fetchBlogs() {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("blogs") as string);

      dispatch(getBlogs(response));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchBlogById(blogId: string) {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("blogs") as string);

      dispatch(getBlogs(response));
    } catch (error) {
      console.log(error);
    }
  };
}

export const {
  getBlog,
  getBlogs,
  getBlogById,
  deleteBlog,
  createBlog,
  updateBlog,
} = blogSlice.actions;

export default blogSlice.reducer;

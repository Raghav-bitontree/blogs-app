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
        blogs: [...state.blogs].filter((item) => item?.id !== payload),
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

export function deleteBlogById(blogId: string) {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("blogs") as string);
      const res = response.filter(
        ({ values }: { values: { id: string } }) => values?.id !== blogId
      );
      localStorage.setItem("blogs", JSON.stringify(res));
      dispatch(getBlogs(res));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateBlogById(payload: any) {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("blogs") as string);

      const findBlog = response.find(
        (blog: any) => blog.values.id === payload.id
      );
      if (findBlog) {
        findBlog.values.title = payload.title;
        findBlog.values.description = payload.description;
        findBlog.values.body = payload.body;
        findBlog.values.image = payload.image;
      }
      const res = response.filter(
        ({ values }: { values: { id: string } }) => values?.id !== payload.id
      );
      localStorage.setItem("blogs", JSON.stringify([...res, findBlog]));

      dispatch(getBlogs([...res, findBlog]));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchBlogById(blogId: string) {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("blogs") as string);
      const findBlog = response.find((blog: any) => {
        return Number(blog.values.id) === Number(blogId);
      });
      dispatch(getBlogs(findBlog));
    } catch (error) {
      console.log(error);
    }
  };
}

export function createNewBlog(payload: any) {
  return (dispatch: (arg: any) => void) => {
    try {
      const savedBlogs = localStorage.getItem("blogs")
        ? JSON.parse(localStorage.getItem("blogs") as string)
        : [];
      payload.values.id = Date.now();
      payload.values.image = payload.image;
      localStorage.setItem("blogs", JSON.stringify([payload, ...savedBlogs]));
      // payload?.values && state.blogs.unshift(payload?.values);
      dispatch(getBlogs([payload, ...savedBlogs]));
    } catch (err) {
      console.log(err);
    }
  };
}

export const { getBlog, getBlogs, getBlogById, deleteBlog, updateBlog } =
  blogSlice.actions;

export default blogSlice.reducer;

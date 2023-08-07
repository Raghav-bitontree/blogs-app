/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

import { fetchBlogs } from "@/redux/features/blogs/blogs-slice";
import { blogLink } from "@/styles/styles";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BlogList = () => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const blogs = useSelector((state: any) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogs())
   }, [dispatch])
  
  return (
    <div
      style={{
        padding: "20px 80px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1 style={{ paddingBottom: "20px" }}>Blogs List</h1>
      {blogs &&
        blogs.length > 0 &&
        blogs.map(({values}: any) => {
          return (
            <div style={{ display: "flex" }} key={values.title}>
              <img
                src={values?.image}
                alt={values?.title}
                height={"200px"}
                width={"300px"}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  margin: "20px",
                }}
              >
                <div>
                  <h2>{values?.title}</h2>
                  <h4>{values?.description}</h4>
                </div>
                <span
                  className={blogLink}
                  onClick={() => router.push(`/blogs/${values?.id}`)}
                >
                  Know more
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BlogList;

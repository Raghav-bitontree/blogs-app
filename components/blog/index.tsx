/* eslint-disable @next/next/no-img-element */
import { fetchBlogById } from "@/redux/features/blogs/blogs-slice";
import { blogByIdContainer } from "@/styles/styles";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BlogById = () => {
  const { query } = useRouter();
  const { slug } = query;
  const dispatch: any = useDispatch();
  const blogs = useSelector((state: any) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogById(slug as string));
  }, [dispatch]);

  console.log(blogs, "res");

  const blog = {
    title: "a",
    description: "saffa",
    body: "fsaffa",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  };

  return (
    <div className={blogByIdContainer}>
      <img
        style={{ margin: "auto" }}
        src={blog?.image}
        alt={blog?.title}
        height={300}
        width={300}
      />

      <h2>{blog?.title}</h2>
      <h3>{blog?.description}</h3>
      <span>{blog?.body}</span>
    </div>
  );
};

export default BlogById;

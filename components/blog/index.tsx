/* eslint-disable @next/next/no-img-element */
import { getBlog } from "@/redux/features/blogs/blogs-slice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const BlogById = () => {
  const { query } = useRouter();
  const { slug } = query;
  const dispatch = useDispatch();

  useEffect(() => {
    const res = dispatch(getBlog(slug));
  }, [query]);

  const blog = {
    title: "a",
    description: "saffa",
    body: "fsaffa",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", margin: "20px 80px" }}
    >
      <img
        style={{ margin: "auto" }}
        src={blog?.image}
        alt={blog?.title}
        height={"300px"}
        width={"300px"}
      />

      <h2>{blog?.title}</h2>
      <h3>{blog?.description}</h3>
      <span>{blog?.body}</span>
    </div>
  );
};

export default BlogById;

/* eslint-disable @next/next/no-img-element */
import { fetchBlogById } from "@/redux/features/blogs/blogs-slice";
import { blogByIdContainer, blogDescription, blogTitle } from "@/styles/styles";
import { ArrowBackIos } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

const BlogById = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;
  const dispatch: any = useDispatch();
  const blogs = useSelector((state: any) => state.blogs.blogs);
  const blog = blogs?.values;
  useEffect(() => {
    dispatch(fetchBlogById(slug as string));
  }, [dispatch, slug]);

  return (
    <>
      <Head>
        <title>{blog?.title}</title>
        <meta name="title" content={blog?.title} />
      </Head>
      <ArrowBackIos
        style={{ cursor: "pointer", margin: "20px 80px" }}
        onClick={() => router.back()}
      />
      <div className={blogByIdContainer}>
        <h2 className={blogTitle}>{blog?.title}</h2>
        <h3 className={blogDescription}>{blog?.description}</h3>
        <img src={blog?.image} alt={blog?.title} height={300} width={300} />
        <span>{blog?.body}</span>
      </div>
    </>
  );
};

export default BlogById;

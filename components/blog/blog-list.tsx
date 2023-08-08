/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

import { fetchBlogs } from "@/redux/features/blogs/blogs-slice";
import {
  blogInnerContainer,
  blogLink,
  blogListContainer,
  blogListDescription,
  blogListHeader,
  blogListInnerContainer,
  paddingBottom30,
} from "@/styles/styles";
import { ArrowBackIos } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header";

const BlogList = () => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const blogs = useSelector((state: any) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
      <div className={blogListContainer}>
        <div className={blogListHeader}>
          <ArrowBackIos
            style={{ cursor: "pointer" }}
            onClick={() => router.back()}
          />
          <h1>Blogs List</h1>
        </div>
        <div className={blogListInnerContainer}>
          {blogs &&
            blogs.length > 0 &&
            blogs.map(({ values }: any) => {
              return (
                <div style={{ display: "flex" }} key={values.title}>
                  <img
                    style={{ borderRadius: "6px" }}
                    src={values?.image}
                    alt={values?.title}
                    height={200}
                    width={200}
                  />
                  <div className={blogInnerContainer}>
                    <div>
                      <h2>{values?.title}</h2>
                      <h4 className={blogListDescription}>
                        {values?.description}
                      </h4>
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
      </div>
    </>
  );
};

export default BlogList;

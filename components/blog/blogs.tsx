/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

import { blogLink } from "@/styles/styles";
import { useRouter } from "next/router";

const BlogList = () => {
  const router = useRouter();

  const blogs = [
    {
      title: "a",
      description: "saffa",
      body: "fsaffa",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      title: "a",
      description: "saffa",
      body: "fsaffa",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      title: "a",
      description: "saffa",
      body: "fsaffa",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
  ];
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
        blogs.map((item: any) => {
          return (
            <div style={{ display: "flex" }} key={item.title}>
              <img
                src={item?.image}
                alt={item?.title}
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
                  <h2>{item?.title}</h2>
                  <h4>{item?.description}</h4>
                </div>
                <span
                  className={blogLink}
                  onClick={() => router.push(`/blogs/${item?.id}`)}
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

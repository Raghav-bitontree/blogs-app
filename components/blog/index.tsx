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
    console.log(res);
  }, [query]);

  return <div>BlogById</div>;
};

export default BlogById;

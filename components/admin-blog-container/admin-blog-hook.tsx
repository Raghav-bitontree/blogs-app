/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import {
  deleteBlog,
  deleteBlogById,
  fetchBlogs,
} from "@/redux/features/blogs/blogs-slice";
import { blogLink } from "@/styles/styles";
import { Delete, Edit } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useAdminBlogControl() {
  const [currentBlogData, setCurrentBlogData] = useState();
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch: any = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleEdit = (item: any) => {
    setCurrentBlogData(item);
    setModal(true);
    setIsEdit(true);
  };

  const getTableData = (data: any) => {
    const list: any = [];
    data?.length > 0 &&
      data?.forEach(({ values }: any) => {
        let eachData = [
          values?.title,
          values?.image ? (
            <img
              style={{ borderRadius: "8px" }}
              src={values?.image}
              width={60}
              height={60}
              alt="img"
            />
          ) : (
            "_"
          ),
          <span
            className={blogLink}
            onClick={() => router.push(`/blogs/${values?.id}`)}
          >
            {values?.description?.substring(0, 15)} ...
          </span>,
          <div>
            <Edit
              sx={{ cursor: "pointer" }}
              onClick={() => handleEdit(values)}
            />
            <Delete
              sx={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(deleteBlog(values?.id));
                dispatch(deleteBlogById(values?.id));
              }}
            />
          </div>,
        ];
        list.push(eachData);
      });

    return list;
  };

  return {
    modal,
    setModal,
    currentBlogData,
    setCurrentBlogData,
    getTableData,
    isEdit,
    setIsEdit,
  };
}

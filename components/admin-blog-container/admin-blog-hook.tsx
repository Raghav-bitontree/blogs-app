/* eslint-disable react/jsx-key */
import { deleteBlog } from "@/redux/features/blogs/blogs-slice";
import { blogLink } from "@/styles/styles";
import { Delete, Edit } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function useAdminBlogControl() {
  const [currentBlogData, setCurrentBlogData] = useState();
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleEdit = (item: any) => {
    setCurrentBlogData(item);
    setModal(true);
    setIsEdit(true);
  };

  const getTableData = (data: any) => {
    const list: any = [];
    data.length > 0 &&
      data?.forEach((item: any) => {
        let eachData = [
          item?.title,
          "image",
          <span
            className={blogLink}
            onClick={() => router.push(`/blogs/${item?.id}`)}
          >
            {item?.description?.substring(0, 15)} ...
          </span>,
          <div>
            <Edit sx={{ cursor: "pointer" }} onClick={() => handleEdit(item)} />
            <Delete
              sx={{ cursor: "pointer" }}
              onClick={() => dispatch(deleteBlog(item?.id))}
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

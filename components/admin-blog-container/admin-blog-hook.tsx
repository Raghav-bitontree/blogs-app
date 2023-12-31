/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { fetchBlogs } from "@/redux/features/blogs/blogs-slice";
import { iconStyle } from "@/styles/mui-styles";
import { formikInitialValue } from "@/utils/helper";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useAdminBlog() {
  const [currentBlogData, setCurrentBlogData] = useState();
  const [formValue, setFormValue] = useState(formikInitialValue);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const dispatch: any = useDispatch();
  const router = useRouter();
  const [deleteData, setDeleteData] = useState();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleEdit = (item: any) => {
    setCurrentBlogData(item);
    setModal(true);
    setIsEdit(true);
    setFormValue({
      title: item?.title,
      description: item?.description,
      body: item?.body,
    });
  };

  const handleDelete = (item: any) => {
    setDeleteModal(true);
    setModal(true);
    setDeleteData(item);
  };

  const getTableData = (data: any) => {
    const list: any = [];
    data?.length > 0 &&
      data?.forEach((dat: any) => {
        let eachData = [
          dat?.values?.image ? (
            <img
              style={{ borderRadius: "8px" }}
              src={dat?.values?.image}
              width={60}
              height={60}
              alt="img"
            />
          ) : (
            "_"
          ),
          dat?.values?.title,
          <span onClick={() => router.push(`/blogs/${dat?.values?.id}`)}>
            {dat?.values?.description?.substring(0, 30)}
          </span>,
          <div style={{ display: "flex", gap: "2px" }}>
            <IconButton>
              <Visibility
                sx={iconStyle}
                onClick={() => router.push(`/blogs/${dat?.values?.id}`)}
              />
            </IconButton>
            <IconButton>
              <Edit sx={iconStyle} onClick={() => handleEdit(dat?.values)} />
            </IconButton>
            <IconButton>
              <Delete
                sx={iconStyle}
                onClick={() => handleDelete(dat?.values)}
              />
            </IconButton>
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
    deleteModal,
    setDeleteModal,
    deleteData,
    formValue,
    setFormValue,
  };
}

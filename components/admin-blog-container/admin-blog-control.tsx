import { header } from "@/styles/mui-styles";
import { addButton, pageTitleSection, tableMargin } from "@/styles/styles";
import { columns, options } from "@/utils/helper";
import { Container } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { useState } from "react";
import MuiModal from "../common/modal";
import BlogAddEditForm from "./blog-add-edit-form";
import { useSelector } from "react-redux";
import useAdminBlogControl from "./admin-blog-hook";

const AdminBlogControl = () => {
  const blogs = useSelector((state: any) => state.blogs.blogs);
  const {
    modal,
    setModal,
    currentBlogData,
    setCurrentBlogData,
    getTableData,
    isEdit,
    setIsEdit,
  } = useAdminBlogControl();

  return (
    <>
      <Container maxWidth={"xl"} sx={header}>
        THE BLOG
      </Container>
      <div className={pageTitleSection}>
        <h3>Blogs List</h3>
        <button onClick={() => setModal(true)} className={addButton}>
          Add Blog
        </button>
      </div>
      <div className={tableMargin}>
        <MUIDataTable
          data={getTableData(blogs)}
          columns={columns}
          options={options as any}
          title={""}
        />
      </div>
      <MuiModal
        modal={modal}
        setModal={setModal}
        add={isEdit ? false : true}
        content={
          <BlogAddEditForm
            setModal={setModal}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            currentBlogData={currentBlogData}
          />
        }
      />
    </>
  );
};

export default AdminBlogControl;

import { addButton, pageTitleSection, tableMargin } from "@/styles/styles";
import { columns, formikInitialValue, options } from "@/utils/helper";
import MUIDataTable from "mui-datatables";
import MuiModal from "../common/modal";
import BlogAddEditForm from "./blog-add-edit-form";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useAdminBlog from "./admin-blog-hook";

const AdminBlogControl = () => {
  const blogs = useSelector((state: any) => state.blogs.blogs);
  const router = useRouter();
  const {
    modal,
    setModal,
    currentBlogData,
    getTableData,
    isEdit,
    setIsEdit,
    deleteModal,
    setDeleteModal,
    deleteData,
    formValue,
    setFormValue,
  } = useAdminBlog();

  return (
    <>
      <div className={pageTitleSection}>
        <h3 style={{ cursor: "pointer" }} onClick={() => router.push("/blogs")}>
          Blogs List
        </h3>
        <button
          onClick={() => {
            setFormValue(formikInitialValue);
            setModal(true);
          }}
          className={addButton}
        >
          Add Blog
        </button>
      </div>
      <div className={tableMargin}>
        <MUIDataTable
          title={"Blogs"}
          data={getTableData(blogs)}
          columns={columns}
          options={options as any}
        />
      </div>
      <MuiModal
        modal={modal}
        setModal={setModal}
        deleteModal={deleteModal}
        deleteData={deleteData}
        setIsEdit={setIsEdit}
        setDeleteModal={setDeleteModal}
        add={isEdit ? false : true}
        content={
          !deleteModal && (
            <BlogAddEditForm
              setModal={setModal}
              isEdit={isEdit}
              formValue={formValue}
              setIsEdit={setIsEdit}
              currentBlogData={currentBlogData}
            />
          )
        }
      />
    </>
  );
};

export default AdminBlogControl;

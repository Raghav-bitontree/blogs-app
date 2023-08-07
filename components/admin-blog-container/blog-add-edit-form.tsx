import { createBlog, updateBlog } from "@/redux/features/blogs/blogs-slice";
import { addEditFormSubmit, formStyle, inputStyle } from "@/styles/styles";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

const BlogAddEditForm = ({
  setModal,
  currentBlogData,
  isEdit,
  setIsEdit,
}: any) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          title: currentBlogData?.title ? currentBlogData?.title : "",
          description: currentBlogData?.description
            ? currentBlogData?.description
            : "",
          body: currentBlogData?.body ? currentBlogData?.body : "",
          image: currentBlogData?.image ? currentBlogData?.image : "",
        }}
        validate={(values) => {
          // const errors = {};
          // if (!values.email) {
          //   errors.email = "Required";
          // } else if (
          //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          // ) {
          //   errors.email = "Invalid email address";
          // }
          // return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          isEdit
            ? dispatch(
                updateBlog({
                  id: currentBlogData?.id,
                  title: values.title,
                  description: values?.description,
                  body: values?.body,
                  image: values?.image,
                })
              )
            : dispatch(createBlog({ values }));
          setModal(false);
          setIsEdit(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className={formStyle} onSubmit={handleSubmit}>
            <input
              className={inputStyle}
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <input
              type="text"
              className={inputStyle}
              name="description"
              placeholder="Description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <input
              type="text"
              className={inputStyle}
              name="body"
              placeholder="Body"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
            />
            <input
              type="text"
              name="image"
              className={inputStyle}
              placeholder="Image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            <button
              className={addEditFormSubmit}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BlogAddEditForm;

import { createNewBlog, updateBlogById } from "@/redux/features/blogs/blogs-slice";
import {
  addEditFormSubmit,
  formStyle,
  formikError,
  inputStyle,
  textAreaStyle,
} from "@/styles/styles";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useState } from "react";

const BlogAddEditForm = ({
  setModal,
  currentBlogData,
  isEdit,
  setIsEdit,
}: any) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  const handleUploadImage = (e: any) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader?.result as any);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          title: currentBlogData?.title ? currentBlogData?.title : "",
          description: currentBlogData?.description
            ? currentBlogData?.description
            : "",
          body: currentBlogData?.body ? currentBlogData?.body : "",
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.title) {
            errors.title = "Title is Required";
          }
          if (!values.description) {
            errors.description = "Description is Required";
          }
          if (!values.body) {
            errors.body = "Body is  Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          isEdit
            ? dispatch(
                updateBlogById({
                  id: currentBlogData?.id,
                  title: values.title,
                  description: values?.description,
                  body: values?.body,
                  image: image ? image : currentBlogData?.image,
                }) as any
              )
            : dispatch(createNewBlog({ values, image }) as any);
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

            {errors.title && touched.title && errors.title ? (
              <span className={formikError}> {errors.title as any}</span>
            ) : null}

            <input
              type="text"
              className={inputStyle}
              name="description"
              placeholder="Description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && errors.description ? (
              <span className={formikError}> {errors.description as any}</span>
            ) : null}

            <textarea
              cols={50}
              className={textAreaStyle}
              name="body"
              placeholder="Body"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
            />
            {errors.body && touched.body && errors.body ? (
              <span className={formikError}> {errors.body as any}</span>
            ) : null}
            <label htmlFor="file-input"> Upload blog image </label>
            <input
              id="file-input"
              placeholder="Upload blog image"
              type="file"
              onChange={handleUploadImage}
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

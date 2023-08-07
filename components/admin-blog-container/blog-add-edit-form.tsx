import { createBlog, updateBlog } from "@/redux/features/blogs/blogs-slice";
import {
  addEditFormSubmit,
  formStyle,
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
                  image: image ? image : currentBlogData?.image,
                })
              )
            : dispatch(createBlog({ values, image }));
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
            <textarea
              cols={50}
              className={textAreaStyle}
              name="body"
              placeholder="Body"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
            />
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

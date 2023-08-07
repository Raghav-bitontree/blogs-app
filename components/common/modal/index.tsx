import { deleteBlog, deleteBlogById } from "@/redux/features/blogs/blogs-slice";
import { modalStyle } from "@/styles/mui-styles";
import { addButton, secondaryButton } from "@/styles/styles";
import { Box, Modal, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const MuiModal = ({
  modal,
  setModal,
  add,
  content,
  deleteModal,
  setDeleteModal,
  deleteData,
  setIsEdit,
}: any) => {
  const dispatch = useDispatch();
  return (
    <Modal
      open={modal}
      onClose={() => {
        setModal(false);
        setIsEdit(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {!deleteModal ? (
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {add ? "Add Blog" : "Edit Blog"}
          </Typography>
          {content}
        </Box>
      ) : (
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete ?
          </Typography>
          <div style={{ margin: "20px auto" }}>
            <button
              className={addButton}
              onClick={() => {
                dispatch(deleteBlog(deleteData?.id));
                dispatch(deleteBlogById(deleteData?.id) as any);
                setModal(false);
                setDeleteModal(false);
              }}
            >
              {" "}
              Yes{" "}
            </button>
            <button
              className={secondaryButton}
              onClick={() => {
                setModal(false);
                setDeleteModal(false);
              }}
            >
              No
            </button>
          </div>
        </Box>
      )}
    </Modal>
  );
};

export default MuiModal;

import { modalStyle } from "@/styles/mui-styles";
import { Box, Modal, Typography } from "@mui/material";

const MuiModal = ({ modal, setModal, add, content }: any) => {
  return (
    <Modal
      open={modal}
      onClose={() => setModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {add ? "Add Blog" : "Edit Blog"}
        </Typography>
        {content}
      </Box>
    </Modal>
  );
};

export default MuiModal;

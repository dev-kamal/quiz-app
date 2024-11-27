// Created By Kamal

// React Imports
import * as React from "react";

// MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DialogContent from "@mui/material/DialogContent";
import modalStyle from "./modal.style";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "1rem",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(props: any) {
  // Props
  const { openModal, setOpenModal, handleSubmit } = props;

  // Functions
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <ErrorOutlineIcon sx={modalStyle.timerIcon} />
          <Typography gutterBottom variant="h6" align="center" sx={{ mb: 3 }}>
            Are You Sure?
          </Typography>
          <Typography gutterBottom variant="subtitle1" align="center">
            Want to submit the quiz? Once submitted, the quiz will be marked as
            complete. Click Submit to proceed or Cancel to make changes.
          </Typography>

          <Box
            sx={modalStyle.btnBx}
          >
            <Button
              variant="outlined"
              onClick={handleClose}
              color="error"
              sx={modalStyle.cancelBtn}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              autoFocus
              onClick={handleSubmit}
              sx={modalStyle.submitBtn}
            >
              Submit
            </Button>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}

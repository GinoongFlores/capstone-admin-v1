"use client";

import * as React from "react";

import { ThemeProviderContext } from "../../context/ThemeProvider";
import { ModalClose, Button, ModalDialog, Typography, Modal } from "@mui/joy";

const AddUsersModal = () => {
  const { theme } = React.useContext(ThemeProviderContext);
  const [open, setOpen] = React.useState(false);

  const darkTheme = theme === "dark";

  return (
    <React.Fragment>
      <Typography
        variant="contained"
        sx={{
          cursor: "pointer",
          borderRadius: 2,
          width: 80,
          textAlign: "center",
          p: 1.2,
          textTransform: "none",
          background: darkTheme ? "white" : "black",
          color: darkTheme ? "black" : "white",
          fontWeight: "500",
          fontSize: 14,
          "&:hover": {
            background: darkTheme ? "black" : "white",
            border: `1px solid ${darkTheme ? "white" : "black"}`,
            color: darkTheme ? "white" : "black",
          },
        }}
        onClick={() => setOpen(true)}
      >
        Add user
      </Typography>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="variant-modal-title"
          aria-describedby="variant-modal-description"
          variant={"outlined"}
        >
          <ModalClose />
          <Typography id="variant-modal-title" level="h2" textColor="inherit">
            Modal Dialog
          </Typography>
          <Typography
            id="variant-modal-description"
            textColor="inherit"
          ></Typography>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
};

export default AddUsersModal;

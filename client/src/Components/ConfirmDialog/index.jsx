import React from "react";
import { Button, Grid, Modal, Typography } from "@mui/material";

const ConfirmDialog = ({ header, text, onConfirm, onCancel, open }) => {
  return (
    <Modal open={open} onClose={onCancel}>
      <Grid
        container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: 5,
          boxShadow: 24,
          p: 5,
          width: 400,
        }}
        rowSpacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="800">
            {header}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ backgroundColor: "black", height: 1, width: "100%" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" lineHeight="20px">
            {text}
          </Typography>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Button variant="contained" onClick={onCancel} color="error">
            Cancel
          </Button>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Button variant="contained" onClick={onConfirm} color="success">
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ConfirmDialog;

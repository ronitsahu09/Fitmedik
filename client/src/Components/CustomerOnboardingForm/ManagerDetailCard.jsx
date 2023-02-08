import { Delete, Edit } from "@mui/icons-material";
import { Grid, Typography, Button } from "@mui/material";
import React from "react";

const ManagerDetailCard = ({
  managerDetail = {
    name: "",
    title: "",
    email: "",
  },
  isFirst = false,
  edit,
  remove,
}) => {
  return (
    <Grid
      container
      rowSpacing={2}
      sx={{
        width: "100vw",
        backgroundColor: "rgb(230, 230, 230)",
        borderTopRightRadius: 99,
        borderBottomLeftRadius: 99,
        mt: 1,
        mb: 1,
        p: 4,
        pb: 6,
      }}
      className="cof-hs-container"
    >
      <Grid item xs={12}>
        <Typography variant="h6">Manager Name</Typography>

        <Typography variant="h6" fontWeight="200">
          {managerDetail.name}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Manager Title</Typography>

        <Typography variant="h6" fontWeight="200">
          {managerDetail.title}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Manager E-mail</Typography>

        <Typography variant="h6" fontWeight="200">
          {managerDetail.email}
        </Typography>
      </Grid>

      <Grid item container xs={12} justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          color="error"
          endIcon={<Delete />}
          onClick={remove}
          sx={{ mr: 1, borderRadius: 99 }}
        >
          Remove
        </Button>
        <Button
          variant="contained"
          color="success"
          endIcon={<Edit />}
          onClick={edit}
          sx={{ ml: 1, borderRadius: 99 }}
        >
          Edit
        </Button>
      </Grid>

      {isFirst && (
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6" fontWeight="500">
            <span style={{ color: "red" }}>*</span>This manager will be
            considered as the main point of contact
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default ManagerDetailCard;

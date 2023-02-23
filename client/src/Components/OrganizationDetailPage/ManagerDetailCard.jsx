import { Grid, Typography, Paper } from "@mui/material";
import React from "react";

const ManagerDetailCard = ({
  managerDetail = {
    name: "",
    title: "",
    email: "",
  },
}) => {
  return (
    <Paper
      sx={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "30px",
      }}
    >
      <Grid container rowSpacing={2} sx={{ p: 4 }} className="cof-hs-container">
        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Manager Name
          </Typography>

          <Typography variant="h6" fontWeight="200">
            {managerDetail.name}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Manager Title
          </Typography>

          <Typography variant="h6" fontWeight="200">
            {managerDetail.title}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Manager E-mail
          </Typography>

          <Typography variant="h6" fontWeight="200">
            {managerDetail.email}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ManagerDetailCard;

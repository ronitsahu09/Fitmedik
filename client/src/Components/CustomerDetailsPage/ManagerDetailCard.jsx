import { Grid, Typography } from "@mui/material";
import React from "react";

const ManagerDetailCard = ({
  managerDetails = [
    { name: "", title: "", email: "", index: 0, validated: false },
  ],
  setManagerDetails,
  managerDetail = {
    name: "",
    title: "",
    email: "",
    index: 0,
    validated: false,
  },
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
      <Grid container item xs={12}>
        <Typography mb={0.5} variant="h6">
          Manager Name
        </Typography>

        <Typography variant="h6" fontWeight="200">
          {managerDetail.name}
        </Typography>
      </Grid>

      <Grid container item xs={12}>
        <Typography mb={0.5} variant="h6">
          Manager Title
        </Typography>

        <Typography variant="h6" fontWeight="200">
          {managerDetail.title}
        </Typography>
      </Grid>

      <Grid container item xs={12}>
        <Typography mb={0.5} variant="h6">
          Manager E-mail
        </Typography>

        <Typography variant="h6" fontWeight="200">
          {managerDetail.email}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ManagerDetailCard;

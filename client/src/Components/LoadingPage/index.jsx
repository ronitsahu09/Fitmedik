import React from "react";
import { Grid, LinearProgress, Typography } from "@mui/material";

const LoadingPage = ({ loadingText }) => (
  <Grid
    container
    sx={{ height: "100vh", width: "100vh" }}
    justifyContent="center"
    alignItems="center"
  >
    <Grid item xs={12}>
      <Typography variant="h5">{loadingText}</Typography>
    </Grid>
    <Grid item xs={12}>
      <LinearProgress color="primary" />
    </Grid>
  </Grid>
);

export default LoadingPage;

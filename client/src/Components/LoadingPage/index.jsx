import React from "react";
import { Grid, LinearProgress, Typography } from "@mui/material";

const LoadingPage = ({ loadingText }) => (
  <div
    style={{
      display: "flex",
      flex: 1,
      height: "100vh",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Grid container rowSpacing={4}>
      <Grid item xs={1} />
      <Grid container item xs={10} justifyContent="center" alignItems="center">
        <Typography variant="h5">{loadingText || "Loading..."}</Typography>
      </Grid>
      <Grid item xs={1} />

      <Grid item xs={3} />
      <Grid item xs={6}>
        <LinearProgress color="primary" />
      </Grid>
      <Grid item xs={3} />
    </Grid>
  </div>
);

export default LoadingPage;

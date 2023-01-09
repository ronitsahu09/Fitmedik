import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Error, KeyboardArrowLeft, RestartAlt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ errorText, onRetry }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
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
      <Grid container rowSpacing={2}>
        <Grid item xs={3} />
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Error fontSize="large" color="error" />
        </Grid>
        <Grid item xs={3} />

        <Grid item xs={1} />
        <Grid
          container
          item
          xs={10}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5">
            {errorText || "An error occured"}
          </Typography>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={3} />
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Grid
            container
            item
            xs={6}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="text"
              startIcon={<RestartAlt />}
              color="primary"
              onClick={onRetry}
            >
              Retry
            </Button>
          </Grid>
          <Grid
            container
            item
            xs={6}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="text"
              startIcon={<KeyboardArrowLeft />}
              color="primary"
              onClick={goBack}
            >
              Go back
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  );
};

export default ErrorPage;

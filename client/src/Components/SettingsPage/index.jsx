import React from "react";
import { IconButton, Grid, Typography, TextField } from "@mui/material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Grid container sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10} alignItems="center">
          <Grid item xs={2}>
            <IconButton size={"large"} onClick={goBack}>
              <KeyboardArrowLeft sx={{ fontSize: 64, color: "black" }} />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h2" fontWeight="900">
              Settings
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default SettingsPage;

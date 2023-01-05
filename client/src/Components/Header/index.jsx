import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { KeyboardArrowLeft } from "@mui/icons-material";

const Header = ({ navigate, title }) => {
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Grid container>
      <Grid container item xs={2} sx={{ mb: 4 }} alignItems="center">
        <IconButton size={"large"} onClick={goBack}>
          <KeyboardArrowLeft sx={{ fontSize: 64, color: "black" }} />
        </IconButton>
      </Grid>
      <Grid container item xs={10} sx={{ mb: 4 }} alignItems="center">
        <Typography variant="h2" fontWeight="900">
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;

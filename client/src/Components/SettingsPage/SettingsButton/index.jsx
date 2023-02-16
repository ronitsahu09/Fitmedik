import React from "react";
import { Grid, Typography } from "@mui/material";
import "../styles.css";

const SettingsButton = ({ style, title, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Grid
      item
      container
      xs={12}
      onClick={onClick}
      className="settings-item"
      sx={{ ...style, boxShadow: "0px 0px 5px 0.5px grey" }}
      justifyContent="center"
      alignItems="center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography
        variant="h5"
        fontWeight="400"
        color={hover ? "white" : "black"}
        sx={{ m: 4 }}
        className="settings-text"
      >
        {title}
      </Typography>
    </Grid>
  );
};

export default SettingsButton;

import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import "../styles.css";

const SettingsButton = ({ style, title, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Grid
      item
      container
      xs={12}
      onClick={onClick}
      sx={{ ...style }}
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        sx={{
          backgroundColor: "white",
          borderRadius: "30px",
          width: "100%",
          height: "100%",
          transition: "0.3s",
        }}
        className="settings-item"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Typography
          variant="h6"
          fontWeight="400"
          color={hover ? "white" : "black"}
          sx={{ m: 4 }}
          className="settings-text"
        >
          {title}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SettingsButton;

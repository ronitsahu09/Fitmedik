import React from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Header from "../Header";
import { colors } from "../../Utils/colors";

const SettingsPage = () => {
  const navigate = useNavigate();

  const style = {
    backgroundColor: colors.fitmedikOrange,
    p: 4,
    transition: "0.3s",
    mt: 1,
    mb: 1,
    borderRadius: 10,
  };

  return (
    <div>
      <Grid container sx={{ pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10} alignItems="center">
          <Header navigate={navigate} title="Settings" />

          <Grid
            item
            container
            xs={12}
            md={5.5}
            onClick={() => navigate("/departments")}
            className="settings-item"
            sx={style}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h5"
              fontWeight="400"
              color="white"
              sx={{ m: 4 }}
            >
              Organization Details
            </Typography>
          </Grid>
          <Grid item xs={1} />
          <Grid
            item
            container
            xs={12}
            md={5.5}
            onClick={() => navigate("/departments")}
            className="settings-item"
            sx={style}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h5"
              fontWeight="400"
              color="white"
              sx={{ m: 4 }}
            >
              Employees & Departments
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={5.5}
            onClick={() => navigate("/forgotpassword")}
            className="settings-item"
            sx={style}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h5"
              fontWeight="400"
              color="white"
              sx={{ m: 4 }}
            >
              Forgot Password
            </Typography>
          </Grid>
          <Grid item xs={1} />
          <Grid
            item
            container
            xs={12}
            md={5.5}
            onClick={() => navigate("/settings")}
            className="settings-item"
            sx={style}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h5"
              fontWeight="400"
              color="white"
              sx={{ m: 4 }}
            >
              Privacy Policy
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default SettingsPage;

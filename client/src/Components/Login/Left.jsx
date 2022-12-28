import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import Logo from "../../Assets/Images/Logo_Transparent.png";
import LoginImage from "../../Assets/Images/Login/Login.png";
import "../GlassmorphBG/styles.css";

const LeftLogin = () => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={6}
      sx={{
        backgroundColor: "#191B20",
        height: "100vh",
        pt: 5,
        pb: 5,
        zIndex: 1,
      }}
      style={{ zIndex: 1 }}
    >
      <div className="login-ellipse1 blur75" />
      <div className="login-ellipse2 blur75" />
      <div className="login-ellipse3 blur75" />

      <Grid container rowSpacing={6}>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <img
              src={Logo}
              alt="fitmedik_logo"
              style={{ width: 150 }}
              className="center-fit"
            />
          </Grid>
          <Grid item xs={1} />
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid
            container
            item
            xs={10}
            alignItems="center"
            justifyContent="center"
            className="glassmorph_style"
            p={4}
          >
            <Grid item xs={12}>
              <img src={LoginImage} alt="login" className="center-fit" />
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid
            container
            item
            xs={10}
            alignItems="center"
            justifyContent="center"
            p={4}
          >
            <Typography variant="h6" color="white" sx={{ fontSize: 16 }}>
              Want to know more about us?{" "}
              <Link
                href="https://fitmedik.com"
                sx={{ color: "#ff6355", fontWeight: "900" }}
                target="_blank"
              >
                Click here
              </Link>
            </Typography>
            <Grid item xs={1} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LeftLogin;

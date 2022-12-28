import React from "react";
import { Grid, Link, Typography } from "@mui/material";

const LeftLogin = () => {
  const BORDER_RADIUS = 20;

  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={6}
      sx={{ backgroundColor: "#006aff", height: "100vh", pt: 5, pb: 5 }}
    >
      <Grid container rowSpacing={6}>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Typography variant="h3" color="white">
              fitmedik
            </Typography>
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
            sx={{
              backgroundColor: "#0254c7",
              borderTopLeftRadius: BORDER_RADIUS,
              borderBottomRightRadius: BORDER_RADIUS,
            }}
            p={4}
          >
            <Grid item xs={12}>
              <Typography variant="h4" color="white">
                Welcome Back!
              </Typography>
              <div
                style={{
                  height: 1,
                  backgroundColor: "white",
                  marginTop: 16,
                  marginBottom: 16,
                }}
              />
              <Typography variant="h6" color="white" sx={{ fontSize: 16 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
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
            sx={{
              backgroundColor: "#0254c7",
              borderTopLeftRadius: BORDER_RADIUS,
              borderBottomRightRadius: BORDER_RADIUS,
            }}
            p={4}
          >
            <Grid item xs={12}>
              <Typography variant="h6" color="white" sx={{ fontSize: 16 }}>
                Want to know more about us?{" "}
                <Link
                  href="https://fitmedik.com"
                  sx={{ color: "white", fontWeight: "900" }}
                >
                  Click here
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LeftLogin;

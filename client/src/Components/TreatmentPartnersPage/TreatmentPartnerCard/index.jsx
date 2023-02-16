import React from "react";
import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import "./styles.css";

const TreatmentPartnerCard = ({
  data = {
    heading: "",
    provider: "",
    about: "",
    value: "",
    duration: "",
    thesis: "",
    expected_impact: "",
    link: "",
    onDashboard: false,
    pic: "",
  },
}) => {
  return (
    <Stack
      sx={{
        mt: 1,
        mb: 1,
        boxShadow: "0px 0px 5px 0.5px grey",
        width: "100%",
        borderRadius: "30px",
      }}
      direction="row"
    >
      <div
        style={{
          height: "100%",
          width: 20,
          backgroundColor: "#ff6355",
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
        }}
      />
      <Grid
        container
        sx={{
          pt: 4,
          pb: 4,
          backgroundColor: "white",
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <Grid item xs={0.5} />
        <Grid container item xs={7.5} rowSpacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="800">
              Name of the Provider
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.provider || "No data provided"}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="800">
              Value Added
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.value || "No data provided"}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="800">
              Thesis
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.thesis || "No data provided"}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="800">
              Expected Impact
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.expected_impact || "No data provided"}
            </Typography>
          </Grid>

          <Grid item xs={12} flexDirection="row">
            <Typography variant="h6" fontWeight="800">
              Duration
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.duration || "No data provided"}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Link href="/" underline="hover" variant="h6" fontWeight="900">
              Learn More
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={4}
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <img
            src={data.pic}
            alt={"Treatment partner image"}
            className="tp-image center-fit"
          />
          <Button variant="contained">Reach out to Onboard</Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default TreatmentPartnerCard;

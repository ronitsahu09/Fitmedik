import React from "react";
import { Button, Grid, Link, Stack, Typography } from "@mui/material";

const TreatmentPartnerCard = ({
  data = {
    sectionHeading: "",
    providerName: "",
    providerAbout: "",
    valueAdded: "",
    duration: "",
    thesis: "",
    expectedImpact: "",
    link: "",
    dashboardDisplay: false,
  },
}) => {
  return (
    <Stack sx={{ mt: 1, mb: 1, backgroundColor: "white" }} direction="row">
      <div style={{ height: "100%", width: 10, backgroundColor: "#ff6355" }} />
      <Grid container sx={{ pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={7.5} rowSpacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="800" sx={{ mb: 0.5 }}>
              Name of the Provider
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.providerName}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="800" sx={{ mb: 0.5 }}>
              Value Added
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.valueAdded}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="800" sx={{ mb: 0.5 }}>
              Thesis
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.thesis}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="800" sx={{ mb: 0.5 }}>
              Expected Impact
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.expectedImpact}
            </Typography>
          </Grid>

          <Grid container item xs={12} flexDirection="row">
            <Typography variant="h6" fontWeight="800" sx={{ mr: 1 }}>
              Duration
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.providerName}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Link href="/" underline="hover" variant="h6" fontWeight="900">
              Learn More
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={3.5}>
          <Button variant="contained">Reach out to Onboard</Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default TreatmentPartnerCard;

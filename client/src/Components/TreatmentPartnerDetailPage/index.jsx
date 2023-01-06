import React from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";

const TreatmentPartnerDetailPage = () => {
  const navigate = useNavigate();

  const [data, setData] = React.useState({
    sectionHeading: "",
    providerName: "",
    providerAbout: "",
    valueAdded: "",
    duration: "",
    thesis: "",
    expectedImpact: "",
    link: "",
  });

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const { id } = useParams();

  const GetTreatmentPartner = async () => {
    console.log(id);

    setData({
      sectionHeading: "",
      providerName: "",
      providerAbout: "",
      valueAdded: "",
      duration: "",
      thesis: "",
      expectedImpact: "",
      link: "",
    });

    setLoading(false);
    setError(false);
    setErrorText("");
  };

  React.useRef(() => {
    GetTreatmentPartner();
  }, []);

  return (
    <div style={{ width: "100vw" }}>
      <Grid container sx={{ width: "100vw", pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header navigate={navigate} title="Treatment Partner" />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="400">
              Enter the details of the Treatment Partner
            </Typography>
          </Grid>

          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Section Heading
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.sectionHeading}
            </Typography>
          </Grid>

          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Name of provider
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.providerName}
            </Typography>
          </Grid>

          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              About the provider
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {data.providerAbout}
            </Typography>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sx={{
              backgroundColor: "rgb(240, 240, 240)",
              borderRadius: 10,
              p: 6,
              mt: 4,
              mb: 4,
            }}
            rowSpacing={3}
          >
            <Grid container item xs={12}>
              <Typography variant="h4" fontWeight="800">
                More about the provider
              </Typography>
            </Grid>

            <Grid container item xs={12}>
              <div
                style={{ width: "100%", height: 1, backgroundColor: "black" }}
              />
            </Grid>

            <Grid container item xs={12}>
              <Typography mb={0.5} variant="h6">
                Value Added
              </Typography>
              <Typography variant="h6" fontWeight="200">
                {data.valueAdded}
              </Typography>
            </Grid>

            <Grid container item xs={12}>
              <Typography mb={0.5} variant="h6">
                Duration
              </Typography>
              <Typography variant="h6" fontWeight="200">
                {data.duration}
              </Typography>
            </Grid>

            <Grid container item xs={12}>
              <Typography mb={0.5} variant="h6">
                Thesis
              </Typography>
              <Typography variant="h6" fontWeight="200">
                {data.thesis}
              </Typography>
            </Grid>

            <Grid container item xs={12}>
              <Typography mb={0.5} variant="h6">
                Expected Impact
              </Typography>
              <Typography variant="h6" fontWeight="200">
                {data.expectedImpact}
              </Typography>
            </Grid>

            <Grid container item xs={12}>
              <Typography mb={0.5} variant="h6">
                Link
              </Typography>
              <Typography variant="h6" fontWeight="200">
                {data.link}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default TreatmentPartnerDetailPage;

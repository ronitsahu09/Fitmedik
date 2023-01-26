import React from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import { GetTreatmentPartnerByIdApi } from "../../Apis/Admin/TreatmentPartners";
import { GetAdminToken } from "../../Cookies/admin";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

const TreatmentPartnerDetailPage = () => {
  const navigate = useNavigate();

  const [data, setData] = React.useState({
    heading: "",
    provider: "",
    about: "",
    value: "",
    duration: "",
    thesis: "",
    expected_impact: "",
    link: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const { id } = useParams();

  const GetTreatmentPartner = async () => {
    GetTreatmentPartnerByIdApi(id, GetAdminToken(), {
      setLoading,
      setError,
      setErrorText,
      setData,
    });
  };

  React.useEffect(() => {
    const token = GetAdminToken();
    if (!token) navigate("/admin/login");
    else GetTreatmentPartner();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage loadingText={"Loading"} />
      ) : error ? (
        <ErrorPage errorText={errorText} onRetry={GetTreatmentPartner} />
      ) : (
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
                <Typography mb={0.5} variant="h6">
                  Section Heading
                </Typography>
                <Typography variant="h6" fontWeight="200">
                  {data.heading}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography mb={0.5} variant="h6">
                  Name of provider
                </Typography>
                <Typography variant="h6" fontWeight="200">
                  {data.provider}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography mb={0.5} variant="h6">
                  About the provider
                </Typography>
                <Typography variant="h6" fontWeight="200">
                  {data.about}
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
                    style={{
                      width: "100%",
                      height: 1,
                      backgroundColor: "black",
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography mb={0.5} variant="h6">
                    Value Added
                  </Typography>
                  <Typography variant="h6" fontWeight="200">
                    {data.value}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography mb={0.5} variant="h6">
                    Duration
                  </Typography>
                  <Typography variant="h6" fontWeight="200">
                    {data.duration}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography mb={0.5} variant="h6">
                    Thesis
                  </Typography>
                  <Typography variant="h6" fontWeight="200">
                    {data.thesis}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography mb={0.5} variant="h6">
                    Expected Impact
                  </Typography>
                  <Typography variant="h6" fontWeight="200">
                    {data.expected_impact}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
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
      )}
    </div>
  );
};

export default TreatmentPartnerDetailPage;

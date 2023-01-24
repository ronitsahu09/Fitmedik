import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Edit, Event } from "@mui/icons-material";
import Header from "../Header";
import { GetAllTreatmentPartnersApi } from "../../Apis/Admin/TreatmentPartners";
import { GetAdminToken } from "../../Cookies/admin";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

const SeeAllTreatmentPartners = () => {
  const [treatmentPartners, setTreatmentPartners] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const navigate = useNavigate();

  const goToTp = (id) => {
    navigate(`/admin/treatment-partner-detail/${id}`);
  };

  const goToTpEdit = (e, id) => {
    e.stopPropagation();
    navigate(`/admin/edit-treatment-partner/${id}`);
  };

  const goToTpEvents = (e, id) => {
    e.stopPropagation();
    navigate(`/admin/treatment-partner-events/${id}`);
  };

  const GetAllTp = async () => {
    GetAllTreatmentPartnersApi(GetAdminToken(), {
      setLoading,
      setError,
      setErrorText,
      setTreatmentPartners,
    });
  };

  React.useEffect(() => {
    GetAllTp();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage loadingText={"Loading"} />
      ) : error ? (
        <ErrorPage errorText={errorText} onRetry={GetAllTp} />
      ) : (
        <Grid container sx={{ pt: 4, pb: 4 }}>
          <Grid item xs={1} />
          <Grid container item xs={10}>
            <Header navigate={navigate} title={"All Treatment Partners"} />
            <Grid
              container
              item
              xs={12}
              sx={{ border: "0.5px grey", borderStyle: "solid none" }}
              p={2}
            >
              <Grid item xs={5}>
                <Typography variant="h6" fontWeight="800">
                  Section Header
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="h6" fontWeight="800">
                  Provider Name
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6" fontWeight="800">
                  Actions
                </Typography>
              </Grid>
            </Grid>
            {treatmentPartners.map((val, index) => (
              <Grid
                container
                item
                xs={12}
                key={index}
                className={
                  index === treatmentPartners.length - 1
                    ? "admin-tp-button admin-tp-button-bottom"
                    : "admin-tp-button"
                }
                p={2}
                onClick={() => goToTp(val._id)}
              >
                <Grid item xs={5}>
                  <Typography variant="h6" fontWeight="200">
                    {val.heading}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6" fontWeight="200">
                    {val.provider}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <IconButton onClick={(e) => goToTpEdit(e, val._id)}>
                    <Edit />
                  </IconButton>
                </Grid>
                <Grid item xs={1}>
                  <IconButton onClick={(e) => goToTpEvents(e, val._id)}>
                    <Event />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={1} />
        </Grid>
      )}
    </div>
  );
};

export default SeeAllTreatmentPartners;

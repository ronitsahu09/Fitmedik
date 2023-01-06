import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Edit, Event } from "@mui/icons-material";
import Header from "../Header";

const SeeAllTreatmentPartners = () => {
  const [treatmentPartners, setTreatmentPartners] = React.useState([
    { id: 0, sectionHeader: "1", providerName: "5" },
    { id: 1, sectionHeader: "2", providerName: "4" },
    { id: 2, sectionHeader: "3", providerName: "3" },
    { id: 3, sectionHeader: "4", providerName: "2" },
    { id: 4, sectionHeader: "5", providerName: "1" },
  ]);

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

  const goToTpManagers = (e, id) => {
    e.stopPropagation();
    navigate(`/admin/treatment-partner-events/${id}`);
  };

  const GetAllTp = async () => {
    // API call here
    setLoading(false);
    setError(false);
    setErrorText("");

    setTreatmentPartners([
      { id: 0, sectionHeader: "1", providerName: "5" },
      { id: 1, sectionHeader: "2", providerName: "4" },
      { id: 2, sectionHeader: "3", providerName: "3" },
      { id: 3, sectionHeader: "4", providerName: "2" },
      { id: 4, sectionHeader: "5", providerName: "1" },
    ]);
  };

  React.useEffect(() => {
    GetAllTp();
  }, []);

  return (
    <div>
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
            <Grid item xs={3.5}>
              <Typography variant="h6" fontWeight="800">
                ID
              </Typography>
            </Grid>
            <Grid item xs={3.5}>
              <Typography variant="h6" fontWeight="800">
                Section Header
              </Typography>
            </Grid>
            <Grid item xs={3.5}>
              <Typography variant="h6" fontWeight="800">
                Provider Name
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
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
              onClick={() => goToTp(val.customerId)}
            >
              <Grid item xs={3.5}>
                <Typography variant="h6" fontWeight="200">
                  {val.id}
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <Typography variant="h6" fontWeight="200">
                  {val.sectionHeader}
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <Typography variant="h6" fontWeight="200">
                  {val.providerName}
                </Typography>
              </Grid>
              <Grid item xs={0.75}>
                <IconButton onClick={(e) => goToTpEdit(e, val.id)}>
                  <Edit />
                </IconButton>
              </Grid>
              <Grid item xs={0.75}>
                <IconButton onClick={(e) => goToTpManagers(e, val.id)}>
                  <Event />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default SeeAllTreatmentPartners;

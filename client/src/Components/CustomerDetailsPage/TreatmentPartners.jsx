import React from "react";
import { Grid, Typography } from "@mui/material";
import "./styles.css";
import { GetAdminToken } from "../../Cookies/admin";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const TreatmentPartnersDetails = ({ partners }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = GetAdminToken();
    if (!token) navigate("/admin/login");
  }, []);

  return (
    <div>
      <Grid container sx={{ width: "100vw", pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header
            navigate={navigate}
            title="Hospital Details"
            showBackButton={false}
          />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="400">
              Choose treatment partners for the hospital
            </Typography>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sx={{ border: "0.5px grey", borderStyle: "solid none", mt: 4 }}
            p={2}
          >
            <Grid item xs={6}>
              <Typography variant="h6" fontWeight="800">
                Section Header
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" fontWeight="800">
                Provider Name
              </Typography>
            </Grid>
          </Grid>
          {partners.map((val, index) => (
            <Grid
              container
              item
              xs={12}
              key={index}
              className={
                index === partners.length - 1
                  ? "cdp-tp-button cdp-tp-button-bottom"
                  : "cdp-tp-button"
              }
              p={2}
            >
              <Grid item xs={6}>
                <Typography variant="h6" fontWeight="200">
                  {val.heading}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" fontWeight="200">
                  {val.provider}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default TreatmentPartnersDetails;

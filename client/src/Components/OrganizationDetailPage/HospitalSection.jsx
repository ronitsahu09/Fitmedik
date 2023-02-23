import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import "./styles.css";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const HospitalSection = ({
  hospDetails = {
    name: "",
    employee_size: "",
    typeOfHospital: "",
    city: "",
    country: "",
    website: "",
    subscription_size: 0,
    documents: "",
  },
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid container sx={{ width: "100vw", pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header navigate={navigate} title="Hospital Details" />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
          {/* Hospital Name */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Hospital Name
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {hospDetails.name}
            </Typography>
          </Grid>

          {/* Employeee Size */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Employee Size
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {hospDetails.employee_size}
            </Typography>
          </Grid>

          {/* Type of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Type of Hospital
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {hospDetails.typeOfHospital}
            </Typography>
          </Grid>

          {/* City of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              City of Hospital
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {hospDetails.city}
            </Typography>
          </Grid>

          {/* Country of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Country of Hospital
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {hospDetails.country}
            </Typography>
          </Grid>

          {/* Website link of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Website Link
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {hospDetails.website}
            </Typography>
          </Grid>

          {/* Subscribed count */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              How many users have subscribed?
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {hospDetails.subscription_size}
            </Typography>
          </Grid>

          {/* Documents link */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Documents
            </Typography>

            <Link variant="h6" fontWeight="200">
              {hospDetails.documents}
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default HospitalSection;

import React from "react";
import { Grid, Typography } from "@mui/material";
import "./styles.css";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const HospitalSection = ({
  hospDetails = {
    name: "",
    employeeSize: "",
    type: "",
    city: "",
    country: "",
    link: "",
    subscriptionCount: 0,
  },
}) => {
  const navigate = useNavigate();
  return (
    <div className="cof-hs-container">
      <Grid container sx={{ width: "100vw", pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
          <Header navigate={navigate} title="Hospital Details" />

          {/* Hospital Name */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Hospital Name
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {hospDetails.name}
            </Typography>
          </Grid>

          {/* Employeee Size */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Employee Size
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {hospDetails.employeeSize}
            </Typography>
          </Grid>

          {/* Type of Hospital */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Type of Hospital
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {hospDetails.type}
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
              {hospDetails.link}
            </Typography>
          </Grid>

          {/* Subscribed count */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              How many users have subscribed?
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {hospDetails.subscriptionCount}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default HospitalSection;

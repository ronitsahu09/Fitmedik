import React from "react";
import { Grid, Typography } from "@mui/material";
import "./styles.css";
import Header from "../Header";

const OperationalSection = ({
  opdtDetails = {
    annualSalNurse: "",
    annualSalPhysician: "",
    annualSalPhysicianSupport: "",
    annualSalTechnician: "",
    annualSalAdminManagement: "",
    noOfBeds: "",
    averageOccupancy: 0,
    avgOpd: "",
    avgIpd: "",
  },
}) => {
  return (
    <div>
      <Grid container sx={{ width: "100vw", pb: 4, pt: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header
            navigate={null}
            title="Operational Details"
            showBackButton={false}
          />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
          {/* Average  Salary of a Nurse */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Annual Salary of a nurse
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {opdtDetails.annualSalNurse}
            </Typography>
          </Grid>

          {/* Average Salary of a Physician */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Annual Salary of a Physician
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {opdtDetails.annualSalPhysician}
            </Typography>
          </Grid>

          {/* Average Salary of Physician Support Staff */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Annual Salary of Physician Support Staff
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {opdtDetails.annualSalPhysicianSupport}
            </Typography>
          </Grid>

          {/* Average Salary of a Technician */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Annual Salary of a Technician
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {opdtDetails.annualSalTechnician}
            </Typography>
          </Grid>

          {/* Average Salary of the Admin Management */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Annual Salary of the Admin Management
            </Typography>
            <Typography variant="h6" fontWeight="200">
              {opdtDetails.annualSalAdminManagement}
            </Typography>
          </Grid>

          {/* Number of beds */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Number of Hospital Beds
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {opdtDetails.noOfBeds}
            </Typography>
          </Grid>

          {/* Average Occupancy */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Occupancy
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {opdtDetails.averageOccupancy}
            </Typography>
          </Grid>

          {/* Average OPD per day */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average OPD per day
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {opdtDetails.avgOpd}
            </Typography>
          </Grid>

          {/* Average IPD per day */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average IPD per day
            </Typography>

            <Typography variant="h6" fontWeight="200">
              {opdtDetails.avgIpd}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default OperationalSection;

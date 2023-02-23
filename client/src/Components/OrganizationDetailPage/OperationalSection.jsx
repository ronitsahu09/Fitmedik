import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
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
      <Grid container sx={{ pb: 4, pt: 4 }}>
        <Grid container item xs={12} sx={{ mb: 2, ml: 4 }} alignItems="center">
          <Typography variant="h4" fontWeight="500">
            Operational Details
          </Typography>
        </Grid>

        <Paper
          sx={{ width: "100%", backgroundColor: "white", borderRadius: "30px" }}
        >
          <Grid container item xs={12} rowSpacing={3} sx={{ p: 4 }}>
            {/* Average  Salary of a Nurse */}
            <Grid item xs={12}>
              <Typography mb={0.5} variant="h6">
                Average Annual Salary of a nurse
              </Typography>

              <Typography variant="h6" fontWeight="200">
                {opdtDetails.annualSalNurse}
              </Typography>
            </Grid>

            {/* Average Salary of a Physician */}
            <Grid item xs={12}>
              <Typography mb={0.5} variant="h6">
                Average Annual Salary of a Physician
              </Typography>

              <Typography variant="h6" fontWeight="200">
                {opdtDetails.annualSalPhysician}
              </Typography>
            </Grid>

            {/* Average Salary of Physician Support Staff */}
            <Grid item xs={12}>
              <Typography mb={0.5} variant="h6">
                Average Annual Salary of Physician Support Staff
              </Typography>

              <Typography variant="h6" fontWeight="200">
                {opdtDetails.annualSalPhysicianSupport}
              </Typography>
            </Grid>

            {/* Average Salary of a Technician */}
            <Grid item xs={12}>
              <Typography mb={0.5} variant="h6">
                Average Annual Salary of a Technician
              </Typography>

              <Typography variant="h6" fontWeight="200">
                {opdtDetails.annualSalTechnician}
              </Typography>
            </Grid>

            {/* Average Salary of the Admin Management */}
            <Grid item xs={12}>
              <Typography mb={0.5} variant="h6">
                Average Annual Salary of the Admin Management
              </Typography>
              <Typography variant="h6" fontWeight="200">
                {opdtDetails.annualSalAdminManagement}
              </Typography>
            </Grid>

            {/* Number of beds */}
            <Grid item xs={12}>
              <Typography mb={0.5} variant="h6">
                Number of Hospital Beds
              </Typography>

              <Typography variant="h6" fontWeight="200">
                {opdtDetails.noOfBeds}
              </Typography>
            </Grid>

            {/* Average Occupancy */}
            <Grid item xs={12}>
              <Typography mb={0.5} variant="h6">
                Average Occupancy
              </Typography>

              <Typography variant="h6" fontWeight="200">
                {opdtDetails.averageOccupancy}
              </Typography>
            </Grid>

            {/* Average OPD per day */}
            <Grid item xs={12}>
              <Typography mb={0.5} variant="h6">
                Average OPD per day
              </Typography>

              <Typography variant="h6" fontWeight="200">
                {opdtDetails.avgOpd}
              </Typography>
            </Grid>

            {/* Average IPD per day */}
            <Grid item xs={12}>
              <Typography mb={0.5} variant="h6">
                Average IPD per day
              </Typography>

              <Typography variant="h6" fontWeight="200">
                {opdtDetails.avgIpd}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default OperationalSection;

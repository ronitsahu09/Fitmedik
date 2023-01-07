import React from "react";
import { Grid, Typography, TextField, Autocomplete } from "@mui/material";
import {
  avgPdOptions,
  avgSalOptions,
  noOfBedsOptions,
} from "../CustomerOnboardingForm/data";
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
  opdtDetailsError = {
    annualSalNurse: "",
    annualSalPhysician: "",
    annualSalPhysicianSupport: "",
    annualSalTechnician: "",
    annualSalAdminManagement: "",
    noOfBeds: "",
    averageOccupancy: "",
    avgOpd: "",
    avgIpd: "",
  },
  setOpdtDetails,
}) => {
  return (
    <div>
      <Grid container sx={{ width: "100vw", pt: 4, pb: 4 }}>
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
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="400">
              Enter the operational details of the Hospital
            </Typography>
          </Grid>

          {/* Average  Salary of a Nurse */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Annual Salary of a nurse
            </Typography>
            <Autocomplete
              fullWidth
              options={avgSalOptions}
              onChange={(_, value) => {
                setOpdtDetails({
                  ...opdtDetails,
                  annualSalNurse: value,
                });
              }}
              value={opdtDetails.annualSalNurse}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant={"outlined"}
                  placeholder="Average Annual Salary of a Nurse"
                  error={opdtDetailsError.annualSalNurse.length !== 0}
                  helperText={opdtDetailsError.annualSalNurse}
                />
              )}
            />
          </Grid>

          {/* Average Salary of a Physician */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Annual Salary of a Physician
            </Typography>
            <Autocomplete
              fullWidth
              options={avgSalOptions}
              onChange={(_, value) => {
                setOpdtDetails({
                  ...opdtDetails,
                  annualSalPhysician: value,
                });
              }}
              value={opdtDetails.annualSalPhysician}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant={"outlined"}
                  placeholder="Average Annual Salary of a Physician"
                  error={opdtDetailsError.annualSalPhysician.length !== 0}
                  helperText={opdtDetailsError.annualSalPhysician}
                />
              )}
            />
          </Grid>

          {/* Average Salary of Physician Support Staff */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Annual Salary of Physician Support Staff
            </Typography>
            <Autocomplete
              fullWidth
              options={avgSalOptions}
              onChange={(_, value) => {
                setOpdtDetails({
                  ...opdtDetails,
                  annualSalPhysicianSupport: value,
                });
              }}
              value={opdtDetails.annualSalPhysicianSupport}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant={"outlined"}
                  placeholder="Average Annual Salary of Physician Support Staff"
                  error={
                    opdtDetailsError.annualSalPhysicianSupport.length !== 0
                  }
                  helperText={opdtDetailsError.annualSalPhysicianSupport}
                />
              )}
            />
          </Grid>

          {/* Average Salary of a Technician */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Annual Salary of a Technician
            </Typography>
            <Autocomplete
              fullWidth
              options={avgSalOptions}
              onChange={(_, value) => {
                setOpdtDetails({
                  ...opdtDetails,
                  annualSalTechnician: value,
                });
              }}
              value={opdtDetails.annualSalTechnician}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant={"outlined"}
                  placeholder="Average Annual Salary of a Technician"
                  error={opdtDetailsError.annualSalTechnician.length !== 0}
                  helperText={opdtDetailsError.annualSalTechnician}
                />
              )}
            />
          </Grid>

          {/* Average Salary of the Admin Management */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Annual Salary of the Admin Management
            </Typography>
            <Autocomplete
              fullWidth
              options={avgSalOptions}
              onChange={(_, value) => {
                setOpdtDetails({
                  ...opdtDetails,
                  annualSalAdminManagement: value,
                });
              }}
              value={opdtDetails.annualSalAdminManagement}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant={"outlined"}
                  placeholder="Average Annual Salary of the Admin Management"
                  error={opdtDetailsError.annualSalAdminManagement.length !== 0}
                  helperText={opdtDetailsError.annualSalAdminManagement}
                />
              )}
            />
          </Grid>

          {/* Number of beds */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Number of Hospital Beds
            </Typography>
            <Autocomplete
              fullWidth
              options={noOfBedsOptions}
              onChange={(_, value) => {
                setOpdtDetails({
                  ...opdtDetails,
                  noOfBeds: value,
                });
              }}
              value={opdtDetails.noOfBeds}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant={"outlined"}
                  placeholder="Number of Hospital Beds"
                  error={opdtDetailsError.noOfBeds.length !== 0}
                  helperText={opdtDetailsError.noOfBeds}
                />
              )}
            />
          </Grid>

          {/* Average Occupancy */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average Occupancy
            </Typography>

            <TextField
              fullWidth
              required
              variant={"outlined"}
              type="number"
              placeholder="Average Occupancy (in percentage)"
              error={opdtDetailsError.averageOccupancy.length !== 0}
              helperText={opdtDetailsError.averageOccupancy}
              value={opdtDetails.averageOccupancy}
              onChange={(e) =>
                setOpdtDetails({
                  ...opdtDetails,
                  averageOccupancy: e.target.value,
                })
              }
            />
          </Grid>

          {/* Average OPD per day */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average OPD per day
            </Typography>
            <Autocomplete
              fullWidth
              options={avgPdOptions}
              onChange={(_, value) => {
                setOpdtDetails({
                  ...opdtDetails,
                  avgOpd: value,
                });
              }}
              value={opdtDetails.avgOpd}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant={"outlined"}
                  placeholder="Average OPD per day"
                  error={opdtDetailsError.avgOpd.length !== 0}
                  helperText={opdtDetailsError.avgOpd}
                />
              )}
            />
          </Grid>

          {/* Average IPD per day */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Average IPD per day
            </Typography>
            <Autocomplete
              fullWidth
              options={avgPdOptions}
              onChange={(_, value) => {
                setOpdtDetails({
                  ...opdtDetails,
                  avgIpd: value,
                });
              }}
              value={opdtDetails.avgIpd}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant={"outlined"}
                  placeholder="Average IPD per day"
                  error={opdtDetailsError.avgIpd.length !== 0}
                  helperText={opdtDetailsError.avgIpd}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default OperationalSection;
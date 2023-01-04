import React from "react";
import { Grid, Typography, TextField, Autocomplete } from "@mui/material";
import { employeeSizeOptions, hospitalTypeOptions } from "./data";
import "./styles.css";
import { READ } from ".";

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
  hospDetailsError = {
    name: "",
    employeeSize: "",
    type: "",
    city: "",
    country: "",
    link: "",
    subscriptionCount: "",
  },
  setHospDetails,
  adminMode,
}) => {
  return (
    <div className="cof-hs-container">
      <Grid container sx={{ width: "100vw" }}>
        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" fontWeight="900">
              Hospital Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="400">
              Enter the details of the Hospital
            </Typography>
          </Grid>

          {/* Hospital Name */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Hospital Name
            </Typography>

            {adminMode !== READ ? (
              <TextField
                required
                fullWidth
                variant={"outlined"}
                placeholder="Name of the Hospital"
                error={hospDetailsError.type.length !== 0}
                helperText={hospDetailsError.name}
                value={hospDetails.name}
                type="text"
                onChange={(e) =>
                  setHospDetails({ ...hospDetails, name: e.target.value })
                }
              />
            ) : (
              <Typography variant="h6" fontWeight="200">
                {hospDetails.name}
              </Typography>
            )}
          </Grid>

          {/* Employeee Size */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Employee Size
            </Typography>

            {adminMode !== READ ? (
              <Autocomplete
                fullWidth
                options={employeeSizeOptions}
                onChange={(_, value) => {
                  setHospDetails({
                    ...hospDetails,
                    employeeSize: value,
                  });
                }}
                value={hospDetails.employeeSize}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    variant={"outlined"}
                    placeholder="Employee Size"
                    error={hospDetailsError.employeeSize.length !== 0}
                    helperText={hospDetailsError.employeeSize}
                  />
                )}
              />
            ) : (
              <Typography variant="h6" fontWeight="200">
                {hospDetails.employeeSize}
              </Typography>
            )}
          </Grid>

          {/* Type of Hospital */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Type of Hospital
            </Typography>

            {adminMode !== READ ? (
              <Autocomplete
                fullWidth
                options={hospitalTypeOptions}
                onChange={(_, value) => {
                  setHospDetails({
                    ...hospDetails,
                    type: value,
                  });
                }}
                value={hospDetails.type}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    variant={"outlined"}
                    placeholder="Hospital type"
                    error={hospDetailsError.type.length !== 0}
                    helperText={hospDetailsError.type}
                  />
                )}
              />
            ) : (
              <Typography variant="h6" fontWeight="200">
                {hospDetails.type}
              </Typography>
            )}
          </Grid>

          {/* City of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              City of Hospital
            </Typography>

            {adminMode !== READ ? (
              <TextField
                required
                fullWidth
                variant={"outlined"}
                placeholder="City of Hospital"
                error={hospDetailsError.city.length !== 0}
                helperText={hospDetailsError.city}
                value={hospDetails.city}
                type="text"
                onChange={(e) =>
                  setHospDetails({ ...hospDetails, city: e.target.value })
                }
              />
            ) : (
              <Typography variant="h6" fontWeight="200">
                {hospDetails.city}
              </Typography>
            )}
          </Grid>

          {/* Country of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Country of Hospital
            </Typography>

            {adminMode !== READ ? (
              <TextField
                required
                fullWidth
                variant={"outlined"}
                placeholder="Country of Hospital"
                error={hospDetailsError.country.length !== 0}
                helperText={hospDetailsError.country}
                value={hospDetails.country}
                type="text"
                onChange={(e) =>
                  setHospDetails({ ...hospDetails, country: e.target.value })
                }
              />
            ) : (
              <Typography variant="h6" fontWeight="200">
                {hospDetails.country}
              </Typography>
            )}
          </Grid>

          {/* Website link of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Website Link
            </Typography>

            {adminMode !== READ ? (
              <TextField
                required
                fullWidth
                variant={"outlined"}
                placeholder="Website Link (eg. 'https://yourhospital.com')"
                error={hospDetailsError.link.length !== 0}
                helperText={hospDetailsError.link}
                value={hospDetails.link}
                type="text"
                onChange={(e) =>
                  setHospDetails({ ...hospDetails, link: e.target.value })
                }
              />
            ) : (
              <Typography variant="h6" fontWeight="200">
                {hospDetails.link}
              </Typography>
            )}
          </Grid>

          {/* Subscribed count */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              How many users have subscribed?
            </Typography>

            {adminMode !== READ ? (
              <TextField
                required
                fullWidth
                variant={"outlined"}
                placeholder="Subscription count"
                error={hospDetailsError.subscriptionCount.length !== 0}
                helperText={hospDetailsError.subscriptionCount}
                value={hospDetails.subscriptionCount}
                type="number"
                onChange={(e) =>
                  setHospDetails({
                    ...hospDetails,
                    subscriptionCount: e.target.value,
                  })
                }
              />
            ) : (
              <Typography variant="h6" fontWeight="200">
                {hospDetails.subscriptionCount}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default HospitalSection;

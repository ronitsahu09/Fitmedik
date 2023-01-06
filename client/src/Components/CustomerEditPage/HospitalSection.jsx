import React from "react";
import { Grid, Typography, TextField, Autocomplete } from "@mui/material";
import {
  employeeSizeOptions,
  hospitalTypeOptions,
} from "../CustomerOnboardingForm/data";
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
}) => {
  const navigate = useNavigate();
  return (
    <div className="cof-hs-container">
      <Grid container sx={{ width: "100vw", pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header navigate={navigate} title="Hospital Details" />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
          {/* Hospital Name */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Hospital Name
            </Typography>

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
          </Grid>

          {/* Employeee Size */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Employee Size
            </Typography>

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
          </Grid>

          {/* Type of Hospital */}
          <Grid container item xs={12}>
            <Typography mb={0.5} variant="h6">
              Type of Hospital
            </Typography>

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
          </Grid>

          {/* City of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              City of Hospital
            </Typography>

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
          </Grid>

          {/* Country of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Country of Hospital
            </Typography>

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
          </Grid>

          {/* Website link of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Website Link
            </Typography>

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
          </Grid>

          {/* Subscribed count */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              How many users have subscribed?
            </Typography>

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
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default HospitalSection;

import React from "react";
import { Grid, Typography, TextField, Autocomplete } from "@mui/material";
import { employeeSizeOptions, hospitalTypeOptions } from "./data";
import "./styles.css";
import { GraphInfo } from "../Styles_&_Components/Components";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const HospitalSection = ({
  hospDetails = {
    name: "",
    employee_size: "",
    typeOfHospital: "",
    city: "",
    country: "",
    website: "",
    subscription_size: 0,
    location: "",
    documents: "",
  },
  hospDetailsError = {
    name: "",
    employeeSize: "",
    type: "",
    city: "",
    country: "",
    link: "",
    subscriptionCount: "",
    location: "",
    documents: "",
  },
  setHospDetails,
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
                  employee_size: value,
                });
              }}
              value={hospDetails.employee_size}
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
                  typeOfHospital: value,
                });
              }}
              value={hospDetails.typeOfHospital}
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

          {/* Location of Hospital */}
          <Grid item xs={12}>
            <Typography mb={0.5} variant="h6">
              Location of Hospital
            </Typography>

            <TextField
              required
              fullWidth
              variant={"outlined"}
              placeholder="Location of Hospital ('latitute longitude')"
              error={hospDetailsError.location.length !== 0}
              helperText={hospDetailsError.location}
              value={hospDetails.location}
              type="text"
              onChange={(e) =>
                setHospDetails({ ...hospDetails, location: e.target.value })
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
              value={hospDetails.website}
              type="text"
              onChange={(e) =>
                setHospDetails({ ...hospDetails, website: e.target.value })
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
              value={hospDetails.subscription_size}
              type="number"
              onChange={(e) =>
                setHospDetails({
                  ...hospDetails,
                  subscription_size: e.target.value,
                })
              }
            />
          </Grid>

          {/* Documents link */}
          <Grid container item xs={12}>
            <Grid container item xs={12} alignItems="center">
              <Typography mb={0.5} variant="h6">
                Documents link
              </Typography>
              <GraphInfo
                props={{
                  title:
                    "Upload all required documents to a drive folder and attach it's link here",
                }}
              />
            </Grid>

            <TextField
              required
              fullWidth
              variant={"outlined"}
              placeholder="Drive link"
              error={hospDetailsError.documents.length !== 0}
              helperText={hospDetailsError.documents}
              value={hospDetails.documents}
              onChange={(e) =>
                setHospDetails({
                  ...hospDetails,
                  documents: e.target.value,
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

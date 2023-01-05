import React from "react";
import { Grid, Typography } from "@mui/material";
import ManagerDetailCard from "./ManagerDetailCard";
import "./styles.css";

const ManagerSection = ({
  managerDetails = [
    {
      name: "",
      title: "",
      email: "",
      index: 0,
    },
  ],
}) => {
  return (
    <div className="cof-hs-container">
      <Grid container sx={{ width: "100vw" }}>
        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" fontWeight="900">
              Manager Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="400">
              Enter the details of the all the Managers
            </Typography>
          </Grid>
          {managerDetails.map((val, index) => {
            return (
              <ManagerDetailCard
                key={index}
                managerDetails={managerDetails}
                managerDetail={val}
              />
            );
          })}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default ManagerSection;

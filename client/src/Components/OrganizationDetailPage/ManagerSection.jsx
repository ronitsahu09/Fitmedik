import React from "react";
import { Grid, Typography } from "@mui/material";
import ManagerDetailCard from "./ManagerDetailCard";
import "./styles.css";
import Header from "../Header";

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
    <div>
      <Grid container sx={{ pb: 4, pt: 4 }}>
        <Grid container item xs={12} rowSpacing={3}>
          <Grid
            container
            item
            xs={12}
            sx={{ mb: 2, ml: 4 }}
            alignItems="center"
          >
            <Typography variant="h4" fontWeight="500">
              Hospital Managers
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
      </Grid>
    </div>
  );
};

export default ManagerSection;

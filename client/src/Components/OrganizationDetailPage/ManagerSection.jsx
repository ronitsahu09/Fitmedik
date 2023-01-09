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
      <Grid container sx={{ width: "100vw", pb: 4, pt: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header
            navigate={null}
            title="Manager Details"
            showBackButton={false}
          />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid container item xs={10} rowSpacing={3}>
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

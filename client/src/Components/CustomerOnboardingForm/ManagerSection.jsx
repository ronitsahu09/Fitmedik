import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import ManagerDetailCard from "./ManagerDetailCard";
import { Add } from "@mui/icons-material";
import "./styles.css";
import Header from "../Header";

const ManagerSection = ({
  managerDetails = [
    {
      name: "",
      title: "",
      email: "",
      index: 0,
      validated: false,
    },
  ],
  setManagerDetails,
}) => {
  return (
    <div>
      <Grid container sx={{ width: "100vw", pt: 4, pb: 4 }}>
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
          <Grid item xs={12}>
            <Typography variant="h5" fontWeight="400">
              Enter the details of the all the Managers
            </Typography>
          </Grid>
          {managerDetails.map((val, index) => {
            val.index = index;
            return (
              <ManagerDetailCard
                key={index}
                setManagerDetails={setManagerDetails}
                managerDetails={managerDetails}
                managerDetail={val}
              />
            );
          })}
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="text"
              startIcon={<Add />}
              onClick={() =>
                setManagerDetails([
                  ...managerDetails,
                  {
                    name: "",
                    email: "",
                    title: "",
                    index: 0,
                    validated: false,
                  },
                ])
              }
            >
              Add manager
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default ManagerSection;

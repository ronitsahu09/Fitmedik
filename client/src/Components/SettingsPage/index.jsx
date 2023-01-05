import React from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Header from "../Header";

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Grid container sx={{ pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10} alignItems="center">
          <Header navigate={navigate} title="Settings" />
          <Grid
            item
            xs={12}
            className="settings-item settings-item-bottom"
            onClick={() => navigate("/employees")}
          >
            <Typography variant="h5" fontWeight="400" sx={{ m: 2 }}>
              Manage Employees
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default SettingsPage;

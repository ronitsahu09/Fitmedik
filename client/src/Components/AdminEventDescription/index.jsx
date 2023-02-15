import React from "react";
import { Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";

const TreatmentPartnerEventDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const event = location.state.event;

  return (
    <Grid container sx={{ width: "100vw", pt: 4, pb: 4 }}>
      <Grid item xs={1} />
      <Grid container item xs={10}>
        <Header navigate={navigate} title={event.name} />
      </Grid>
      <Grid item xs={1} />

      <Grid item xs={1} />
      <Grid container item xs={10} rowSpacing={3}>
        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Event name
          </Typography>
          <Typography variant="h6" fontWeight="200">
            {event.name}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Employee Description
          </Typography>

          <Typography variant="h6" fontWeight="200">
            {event.desc}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Type of Event
          </Typography>

          <Typography variant="h6" fontWeight="200">
            {event.type_of_event}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Event location
          </Typography>

          <Typography variant="h6" fontWeight="200">
            {event.location}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Duration of event
          </Typography>
          <Typography variant="h6" fontWeight="200">
            {event.duration}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Price of event
          </Typography>
          <Typography variant="h6" fontWeight="200">
            {event.price}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Delivery type of event
          </Typography>

          <Typography variant="h6" fontWeight="200">
            {event.type_of_delivery}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            What happens in the event?
          </Typography>

          <Typography variant="h6" fontWeight="200">
            {event.about}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Expected outcomes
          </Typography>

          <Typography variant="h6" fontWeight="200">
            {event.expectedOutcome}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography mb={0.5} variant="h6">
            Redirect link
          </Typography>

          <Typography variant="h6" fontWeight="200">
            {event.link}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default TreatmentPartnerEventDetailPage;

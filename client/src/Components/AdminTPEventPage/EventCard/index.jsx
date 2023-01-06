import { Delete, Edit } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const EventCard = ({
  event = {
    id: 0,
    name: "",
    desc: "",
    type: "",
    location: "",
    duration: "",
    price: "",
    deliveryType: "",
    whatHappens: "",
    expectedOutcome: "",
    redirectLink: "",
  },
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <Grid
      container
      sx={{ backgroundColor: "rgb(240, 240, 240)", borderRadius: 10, p: 4 }}
      rowSpacing={2}
    >
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">Event name</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="200">
            {event.name}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">Event description</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="200">
            {event.desc}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">Event type</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="200">
            {event.type}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">Event location</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="200">
            {event.location}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">Event duration</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="200">
            {event.duration}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">Event price</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="200">
            {event.price}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">Event delivery type</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="200">
            {event.deliveryType}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">What happens in the event?</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="200">
            {event.whatHappens}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">Expected outcomes</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="200">
            {event.expectedOutcome}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h5">Redirect Link</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="200">
            {event.redirectLink}
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="success"
            startIcon={<Edit />}
            onClick={onEditClick}
          >
            Edit
          </Button>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="error"
            startIcon={<Delete />}
            onClick={onDeleteClick}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventCard;

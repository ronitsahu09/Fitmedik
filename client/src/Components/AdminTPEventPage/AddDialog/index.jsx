import React from "react";
import { Grid, Modal, Typography, Button, TextField } from "@mui/material";
import { validateEvent } from "./validate";

const AddEventDialog = ({ open, onCancel, onConfirm, data = null }) => {
  const [event, setEvent] = React.useState({
    name: "",
    desc: "",
    type_of_event: "",
    location: "",
    duration: "",
    price: "",
    type_of_delivery: "",
    about: "",
    expectedOutcome: "",
    link: "",
  });

  const [eventError, setEventError] = React.useState({
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
  });

  React.useEffect(() => {
    if (data) setEvent(data);
  }, []);

  return (
    <Modal open={open} onClose={onCancel}>
      <Grid
        container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: 5,
          boxShadow: 24,
          p: 5,
          maxWidth: 800,
          maxHeight: 600,
          overflow: "scroll",
        }}
        rowSpacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="800">
            Event details
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <div style={{ backgroundColor: "black", height: 1, width: "100%" }} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Event name <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Event name"
            value={event.name}
            onChange={(e) => setEvent({ ...event, name: e.target.value })}
            error={eventError.name.length !== 0}
            helperText={eventError.name}
            type="text"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Event description <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Event description"
            value={event.desc}
            onChange={(e) => setEvent({ ...event, desc: e.target.value })}
            error={eventError.desc.length !== 0}
            helperText={eventError.desc}
            type="text"
            multiline={true}
            rows={3}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Event type <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Event type ('online' or 'offline')"
            value={event.type_of_event}
            onChange={(e) =>
              setEvent({ ...event, type_of_event: e.target.value })
            }
            error={eventError.type.length !== 0}
            helperText={eventError.type}
            type="text"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Event location <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Event location"
            value={event.location}
            onChange={(e) => setEvent({ ...event, location: e.target.value })}
            error={eventError.location.length !== 0}
            helperText={eventError.location}
            type="text"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Event duration <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Event duration"
            value={event.duration}
            onChange={(e) => setEvent({ ...event, duration: e.target.value })}
            error={eventError.duration.length !== 0}
            helperText={eventError.duration}
            type="text"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Event price <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Event price"
            value={event.price}
            onChange={(e) => setEvent({ ...event, price: e.target.value })}
            error={eventError.price.length !== 0}
            helperText={eventError.price}
            type="text"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Event delivery type <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Event delivery type"
            value={event.type_of_delivery}
            onChange={(e) =>
              setEvent({ ...event, type_of_delivery: e.target.value })
            }
            error={eventError.deliveryType.length !== 0}
            helperText={eventError.deliveryType}
            type="text"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            What Happens in the Event? <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="What happens?"
            value={event.about}
            onChange={(e) => setEvent({ ...event, about: e.target.value })}
            error={eventError.whatHappens.length !== 0}
            helperText={eventError.whatHappens}
            type="text"
            multiline={true}
            rows={3}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Expected Outcomes of the Event{" "}
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Expected outcomes"
            value={event.expectedOutcome}
            onChange={(e) =>
              setEvent({ ...event, expectedOutcome: e.target.value })
            }
            error={eventError.expectedOutcome.length !== 0}
            helperText={eventError.expectedOutcome}
            type="text"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Re-direct Link <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Re-direct Link"
            value={event.link}
            onChange={(e) => setEvent({ ...event, link: e.target.value })}
            error={eventError.redirectLink.length !== 0}
            helperText={eventError.redirectLink}
            type="text"
          />
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          <Grid
            container
            item
            xs={6}
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained" onClick={onCancel} color="error">
              Cancel
            </Button>
          </Grid>
          <Grid
            container
            item
            xs={6}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              onClick={() => {
                console.log(eventError);
                if (validateEvent(event, eventError, setEventError)) {
                  onConfirm(event);
                }
              }}
              color="success"
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddEventDialog;

import React from "react";
import { Button, Grid } from "@mui/material";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { Add } from "@mui/icons-material";
import Header from "../Header";
import EventCard from "./EventCard";
import ConfirmDialog from "../ConfirmDialog";
import AddEventDialog from "./AddDialog";
import { GetAdminToken } from "../../Cookies/admin";

const AdminTPEventPage = () => {
  const [events, setEvents] = React.useState([
    {
      id: 0,
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
    },
  ]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const DeleteEvent = (id) => {
    GetAllEvents();
  };

  const AddEvent = (event) => {
    GetAllEvents();
  };

  const UpdateEvent = (event) => {
    GetAllEvents();
  };

  const navigate = useNavigate();

  const { id } = useParams();

  const GetAllEvents = async () => {
    // API call here
    console.log(id);

    setLoading(false);
    setError(false);
    setErrorText("");

    setAddOpen(false);
    setEditOpen(false);
    setConfirmOpen(false);

    setEvents([
      {
        id: 0,
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
      },
    ]);
  };

  React.useEffect(() => {
    GetAllEvents();
  }, []);

  return (
    <div>
      <Grid container sx={{ pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header navigate={navigate} title={"Events"} />

          {events.map((val, index) => (
            <EventCard
              event={val}
              key={index}
              onDeleteClick={() => setConfirmOpen(true)}
              onEditClick={() => setEditOpen(true)}
            />
          ))}
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Button
        variant="contained"
        color="error"
        sx={{ position: "fixed", bottom: 50, right: 50, borderRadius: 99 }}
        startIcon={<Add />}
        size="large"
        onClick={() => setAddOpen(true)}
      >
        Add Event
      </Button>

      {confirmOpen && (
        <ConfirmDialog
          header={"This event will be deleted."}
          text={
            "This event will be deleted and this action cannot be reversed."
          }
          onCancel={() => setConfirmOpen(false)}
          onConfirm={(id) => {
            setConfirmOpen(false);
            DeleteEvent(id);
          }}
          open={confirmOpen}
        />
      )}

      {addOpen && (
        <AddEventDialog
          onCancel={() => setAddOpen(false)}
          onConfirm={(event) => {
            setAddOpen(false);
            AddEvent(event);
          }}
          open={addOpen}
        />
      )}

      {editOpen && (
        <AddEventDialog
          onCancel={() => setEditOpen(false)}
          onConfirm={(event) => {
            setAddOpen(false);
            UpdateEvent(event);
          }}
          open={editOpen}
        />
      )}
    </div>
  );
};

export default AdminTPEventPage;

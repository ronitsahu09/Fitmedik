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
import {
  AddTreatmentPartnerEventApi,
  GetTreatmentPartnerEventsApi,
  UpdateTreatmentPartnerEventApi,
} from "../../Apis/Admin/Events";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

const AdminTPEventPage = () => {
  const [events, setEvents] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const [selectedEvent, setSelectedEvent] = React.useState({});

  const DeleteEvent = (id) => {
    GetAllEvents();
  };

  const AddEvent = (event) => {
    AddEventApi(event);
  };

  const UpdateEvent = (event) => {
    UpdateEventApi(event);
  };

  const navigate = useNavigate();

  const { id } = useParams();

  const GetAllEvents = async () => {
    // API call here
    console.log("events id", id);

    GetTreatmentPartnerEventsApi(id, GetAdminToken(), {
      setLoading,
      setError,
      setErrorText,
      setEvents,
    });
  };

  const AddEventApi = async (event) => {
    AddTreatmentPartnerEventApi(
      id,
      GetAdminToken(),
      { ...event, partner: id },
      {
        setLoading,
        setError,
        setErrorText,
        setEvents,
      }
    );
  };

  const UpdateEventApi = async (event) => {
    UpdateTreatmentPartnerEventApi(
      id,
      GetAdminToken(),
      { ...event, partner: id, id: event._id },
      {
        setLoading,
        setError,
        setErrorText,
        setEvents,
      }
    );
  };

  React.useEffect(() => {
    GetAllEvents();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage loadingText={"Gathering information..."} />
      ) : error ? (
        <ErrorPage errorText={errorText} onRetry={GetAllEvents} />
      ) : (
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
                  onEditClick={() => {
                    setSelectedEvent(val);
                    setEditOpen(true);
                  }}
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
                setEditOpen(false);
                UpdateEvent(event);
              }}
              open={editOpen}
              data={selectedEvent}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminTPEventPage;

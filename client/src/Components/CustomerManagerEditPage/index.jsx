import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import { Add } from "@mui/icons-material";
import AddManagerDialog from "./AddManagerDialog";
import Header from "../Header";

const CustomerManagerEditPage = () => {
  const [managers, setManagers] = React.useState([
    { customerId: 0, name: "1", title: "4", email: "ok.com" },
    { customerId: 1, name: "2", title: "3", email: "ok.com" },
    { customerId: 2, name: "3", title: "2", email: "ok.com" },
    { customerId: 3, name: "4", title: "1", email: "ok.com" },
  ]);

  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const { id } = useParams();
  const customerId = React.useRef(id);

  const GetAllManagers = async () => {
    // API call here
    console.log(customerId.current);
    setLoading(false);
    setError(false);
    setErrorText("");
  };

  const AddManager = async (name, title, email) => {
    GetAllManagers();
    console.log({ name, title, email });
  };

  React.useEffect(() => {
    GetAllManagers();
  }, []);

  return (
    <div>
      <Grid container sx={{ pt: 4, pb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Header navigate={navigate} title={"All Managers"} />
          <Grid
            container
            item
            xs={12}
            sx={{ border: "0.5px grey", borderStyle: "solid none" }}
            p={2}
          >
            <Grid item xs={3}>
              <Typography variant="h6" fontWeight="800">
                Customer ID
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" fontWeight="800">
                Manager Name
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" fontWeight="800">
                Manager Title
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" fontWeight="800">
                Manager Email
              </Typography>
            </Grid>
          </Grid>
          {managers.map((val, index) => (
            <Grid
              container
              item
              xs={12}
              key={index}
              className={
                index === managers.length - 1
                  ? "customer-manager-button customer-manager-button-bottom"
                  : "customer-manager-button"
              }
              p={2}
            >
              <Grid item xs={3}>
                <Typography variant="h6" fontWeight="200">
                  {val.customerId}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" fontWeight="200">
                  {val.name}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" fontWeight="200">
                  {val.title}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" fontWeight="200">
                  {val.email}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1} />
      </Grid>

      {open && (
        <AddManagerDialog
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={(name, title, email) => {
            setOpen(false);
            AddManager(name, title, email);
          }}
        />
      )}

      <Button
        sx={{ position: "fixed", bottom: 50, right: 50, borderRadius: 99 }}
        startIcon={<Add />}
        size="large"
        color="error"
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Add Manager
      </Button>
    </div>
  );
};

export default CustomerManagerEditPage;

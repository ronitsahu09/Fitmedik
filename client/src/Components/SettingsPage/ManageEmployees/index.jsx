import React from "react";
import { IconButton, Grid, Typography, Button, Chip } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import "../styles.css";
import ConfirmDialog from "../../ConfirmDialog";
import LoadingPage from "../../LoadingPage";
import Header from "../../Header";
import AddManagerDialog from "../AddManagerDialog";

const ManageEmployees = () => {
  const [employees, setEmployees] = React.useState([]);
  const [emails, setEmails] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [addOpen, setAddOpen] = React.useState(false);

  const { department } = useParams();

  const delEmail = React.useRef(null);

  const GetEmployees = async () => {
    console.log(department);
    setLoading(false);
    setError(false);
    setErrorText("");

    setConfirmOpen(false);
    setAddOpen(false);

    const tempEmployees = [
      {
        email: "abc@gmail.com",
        status: false,
      },
      {
        email: "def@gmail.com",
        status: true,
      },
      {
        email: "jkl@gmail.com",
        status: false,
      },
    ];

    setEmployees(tempEmployees);

    tempEmployees.forEach((val) => {
      emails.push(val.email);
    });

    setEmails(emails);
  };

  const AddEmployee = async (department, emails) => {
    GetEmployees();
  };

  const DeleteEmployee = async (email) => {
    GetEmployees();
  };

  React.useEffect(() => {
    GetEmployees();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {loading === true ? (
        <LoadingPage />
      ) : (
        <div>
          <Grid container sx={{ pt: 4, pb: 4 }}>
            <Grid item xs={1} />
            <Grid container item xs={10} alignItems="center">
              <Header navigate={navigate} title="Manage Employees" />
              <Grid
                container
                item
                xs={12}
                style={{ border: "0.5px black", borderStyle: "solid none" }}
                sx={{ p: 2 }}
              >
                <Grid item xs={5}>
                  <Typography variant="h6" fontWeight="800">
                    E-mail
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h6" fontWeight="800">
                    Status
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h6" fontWeight="800">
                    Actions
                  </Typography>
                </Grid>
              </Grid>
              {employees.map((val, index) => (
                <Grid
                  container
                  item
                  xs={12}
                  key={index}
                  sx={{
                    p: 2,
                  }}
                  className={
                    index === employees.length - 1
                      ? "inner-settings-item inner-settings-item-bottom"
                      : "inner-settings-item"
                  }
                >
                  <Grid item xs={5}>
                    <Typography variant="h6" fontWeight="100">
                      {val.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="h6">
                      {val.status === true ? (
                        <Chip
                          color="success"
                          label="Active"
                          variant="outlined"
                        />
                      ) : (
                        <Chip
                          color="error"
                          label="Inactive"
                          variant="outlined"
                        />
                      )}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        delEmail.current = val.email;
                        setConfirmOpen(true);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={1} />
          </Grid>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              bottom: 50,
              right: 50,
              borderRadius: 99,
            }}
          >
            <Button
              variant="contained"
              color="success"
              startIcon={<Add />}
              size="large"
              sx={{ mr: 1 }}
              onClick={() => setAddOpen(true)}
            >
              Add employees
            </Button>
          </div>

          {confirmOpen === true && (
            <ConfirmDialog
              open={confirmOpen}
              header={"Employee will be removed"}
              text={
                "The employee will be removed and this action cannot be reversed."
              }
              onCancel={() => setConfirmOpen(false)}
              onConfirm={() => {
                setConfirmOpen(false);
                DeleteEmployee(delEmail.current);
              }}
            />
          )}

          {addOpen && (
            <AddManagerDialog
              open={addOpen}
              onCancel={() => setAddOpen(false)}
              onConfirm={(department, emails) =>
                AddEmployee(department, emails)
              }
              addedData={{ emails, department }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ManageEmployees;

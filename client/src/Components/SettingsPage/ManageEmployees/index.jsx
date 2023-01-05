import React from "react";
import {
  IconButton,
  Grid,
  Typography,
  Button,
  Chip,
  Badge,
} from "@mui/material";
import {
  Add,
  ClearAll,
  Delete,
  DoneAll,
  Email,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import ConfirmDialog from "../../../ConfirmDialog";
import AddEmployeeDialog from "../AddEmployeeDialog";

const ManageEmployees = () => {
  const [employees, setEmployees] = React.useState([
    { name: "", email: "", status: false },
  ]);
  const [selectedEmployees, setSelectedEmployees] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [sendOpen, setSendOpen] = React.useState(false);
  const [addOpen, setAddOpen] = React.useState(false);

  const delEmail = React.useRef(null);

  const GetEmployees = async () => {
    setLoading(false);
    setError(false);
    setErrorText("");

    setConfirmOpen(false);
    setSendOpen(false);
    setAddOpen(false);

    setEmployees([
      {
        name: "abc",
        email: "abc@gmail.com",
        status: false,
        department: "nurse",
      },
      {
        name: "def",
        email: "def@gmail.com",
        status: true,
        department: "doctor",
      },
      {
        name: "jkl",
        email: "jkl@gmail.com",
        status: false,
        department: "doctor",
      },
    ]);
  };

  const AddEmployee = async (name, email, department) => {
    GetEmployees();
  };

  const DeleteEmployee = async (email) => {
    GetEmployees();
  };

  const SendInvite = async () => {
    const selectedEmployeeData = [];
    selectedEmployees.forEach((val) => {
      selectedEmployeeData.push(employees[val]);
    });
  };

  React.useEffect(() => {
    GetEmployees();
    setSelectedEmployees([]);
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Grid container sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={1} />
        <Grid container item xs={10} alignItems="center">
          <Grid item xs={2} sx={{ mb: 4 }}>
            <IconButton size={"large"} onClick={goBack}>
              <KeyboardArrowLeft sx={{ fontSize: 64, color: "black" }} />
            </IconButton>
          </Grid>
          <Grid item xs={10} sx={{ mb: 4 }}>
            <Typography variant="h2" fontWeight="900">
              Manage Employees
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            style={{ border: "0.5px black", borderStyle: "solid none" }}
            sx={{ p: 2 }}
          >
            <Grid item xs={2.5}>
              <Typography variant="h6" fontWeight="800">
                Name
              </Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant="h6" fontWeight="800">
                E-mail
              </Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant="h6" fontWeight="800">
                Status
              </Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant="h6" fontWeight="800">
                Department
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
                backgroundColor: selectedEmployees.includes(index)
                  ? "lightgrey"
                  : "inherit",
              }}
              className={
                index === employees.length - 1
                  ? "settings-item settings-item-bottom"
                  : "settings-item"
              }
              onClick={() => {
                if (selectedEmployees.includes(index))
                  setSelectedEmployees(
                    selectedEmployees.filter((val) => val !== index)
                  );
                else setSelectedEmployees([...selectedEmployees, index]);
              }}
            >
              <Grid item xs={2.5}>
                <Typography variant="h6" fontWeight="100">
                  {val.name}
                </Typography>
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="h6" fontWeight="100">
                  {val.email}
                </Typography>
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="h6">
                  {val.status === true ? (
                    <Chip color="success" label="Active" variant="outlined" />
                  ) : (
                    <Chip color="error" label="Inactive" variant="outlined" />
                  )}
                </Typography>
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="h6" fontWeight="100">
                  {val.department}
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
          startIcon={<DoneAll />}
          size="large"
          disabled={selectedEmployees.length === employees.length}
          onClick={() => {
            let temp = [];
            for (let i = 0; i < employees.length; i++) temp.push(i);
            setSelectedEmployees(temp);
          }}
          sx={{ mr: 1 }}
        >
          Select All
        </Button>
        <Button
          variant="contained"
          startIcon={<ClearAll />}
          size="large"
          sx={{ mr: 1 }}
          disabled={selectedEmployees.length === 0}
          onClick={() => setSelectedEmployees([])}
          color="error"
        >
          De-select All
        </Button>
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
        <Badge badgeContent={selectedEmployees.length} color="error">
          <Button
            variant="contained"
            startIcon={<Email />}
            size="large"
            disabled={selectedEmployees.length === 0}
            onClick={() => setSendOpen(true)}
          >
            Invite
          </Button>
        </Badge>
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

      {sendOpen === true && (
        <ConfirmDialog
          open={sendOpen}
          header={"Send invitation E-mails?"}
          text={
            "An invitation e-mail will be sent to all employees, this action cannot be reversed."
          }
          onCancel={() => setSendOpen(false)}
          onConfirm={() => {
            setSendOpen(false);
            SendInvite();
          }}
        />
      )}

      {addOpen === true && (
        <AddEmployeeDialog
          open={addOpen}
          onCancel={() => setAddOpen(false)}
          onConfirm={(name, email, department) => {
            setAddOpen(false);
            AddEmployee(name, email, department);
          }}
        />
      )}
    </div>
  );
};

export default ManageEmployees;

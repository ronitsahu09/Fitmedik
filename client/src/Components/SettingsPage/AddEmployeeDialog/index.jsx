import React from "react";
import { Grid, Modal, Typography, Button, TextField } from "@mui/material";
import { validateEmail } from "../../../Utils/HelperFunctions";

const AddEmployeeDialog = ({ open, onCancel, onConfirm }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [department, setDepartment] = React.useState("");

  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [departmentError, setDepartmentError] = React.useState("");

  const validate = () => {
    let isValid = true;
    if (name.length === 0) {
      isValid = false;
      setNameError("Name field is empty");
    } else {
      setNameError("");
    }

    if (email.length === 0) {
      isValid = false;
      setEmailError("E-mail field is empty");
    } else if (!validateEmail(email)) {
      isValid = false;
      setEmailError("Invalid E-mail");
    } else {
      setEmailError("");
    }

    if (department.length === 0) {
      isValid = false;
      setDepartmentError("Department field is empty");
    } else {
      setDepartmentError("");
    }

    console.log(nameError);
    console.log(emailError);
    console.log(departmentError);

    return isValid;
  };

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
          width: 400,
        }}
        rowSpacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="800">
            Enter employee details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ backgroundColor: "black", height: 1, width: "100%" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            Name <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError.length !== 0}
            helperText={nameError}
            type="text"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            E-mail ID <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="E-mail ID (eg. 'youremail@abc.com'"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError.length !== 0}
            helperText={emailError}
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            Department <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            error={departmentError.length !== 0}
            helperText={departmentError}
            type="text"
          />
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Button variant="contained" onClick={onCancel} color="error">
            Cancel
          </Button>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            onClick={() => {
              if (validate()) {
                onConfirm(name, email, department);
              }
            }}
            color="success"
          >
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddEmployeeDialog;

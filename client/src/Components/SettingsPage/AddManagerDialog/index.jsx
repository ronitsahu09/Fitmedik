import React from "react";
import {
  Grid,
  Modal,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { validateEmail } from "../../../Utils/HelperFunctions";

const AddManagerDialog = ({ open, onCancel, onConfirm, addedData = null }) => {
  const [email, setEmail] = React.useState("");
  const [department, setDepartment] = React.useState(
    addedData === null ? "" : addedData.department
  );

  const [emails, setEmails] = React.useState([]);

  const [emailError, setEmailError] = React.useState("");
  const [departmentError, setDepartmentError] = React.useState("");

  const emailValidate = (temp) => {
    let isValid = true;

    let emVal = true;
    temp.forEach((val) => {
      emVal = emVal && validateEmail(val);
    });

    let dupVal = true;

    temp.forEach((val) => {
      if (addedData && addedData.emails)
        dupVal = dupVal && ![...emails, ...addedData.emails].includes(val);
      else dupVal = dupVal && !emails.includes(val);
    });

    if (email.length === 0) {
      isValid = false;
      setEmailError("E-mail field is empty");
    } else if (!emVal) {
      isValid = false;
      setEmailError("Invalid E-mail entered");
    } else if (!dupVal) {
      isValid = false;
      setEmailError("Duplicate email entered");
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const removeEmail = (index) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const addEmail = () => {
    var temp = email.split(",");
    temp = temp.map((val) => val.trim());
    if (emailValidate(temp)) {
      setEmails([...emails, ...temp]);
      setEmail("");
    }
  };

  const validate = () => {
    let isValid = true;

    if (department.length === 0) {
      isValid = false;
      setDepartmentError("Department field is empty");
    } else {
      setDepartmentError("");
    }

    if (addedData && emails.length === 0) {
      isValid = false;
      setEmailError("No E-mails have been added");
    } else if (!addedData && emails.length < 20) {
      isValid = false;
      console.log("error");
    } else {
      setEmailError("");
    }

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
          maxWidth: 600,
        }}
        rowSpacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight="800">
            Add users
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <div style={{ backgroundColor: "black", height: 1, width: "100%" }} />
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
            disabled={addedData !== null}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            Employee E-mails ({emails.length}){" "}
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            required
            placeholder="E-mail ID (eg. 'youremail@abc.com')"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError.length !== 0}
            helperText={emailError}
            type="email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => addEmail()}>
                    <Add />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid container item xs={12} flexWrap="wrap" flexDirection="row">
          {emails.map((val, index) => (
            <Chip
              sx={{ ml: 0.125, mr: 0.125, mt: 0.125, mb: 0.125 }}
              label={val}
              onClick={() => removeEmail(index)}
              onDelete={() => removeEmail(index)}
              color="primary"
              key={index}
            />
          ))}
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
                if (validate()) {
                  onConfirm(department, emails);
                }
              }}
              color="success"
              disabled={
                (!addedData && emails.length < 20) ||
                (addedData && emails.length === 0)
              }
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddManagerDialog;

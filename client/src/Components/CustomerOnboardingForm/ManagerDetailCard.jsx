import { Delete, Save } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { validateEmail } from "../../Utils/HelperFunctions";

const ManagerDetailCard = ({
  managerDetails = [
    { name: "", title: "", email: "", index: 0, validated: false },
  ],
  setManagerDetails,
  managerDetail = {
    name: "",
    title: "",
    email: "",
    index: 0,
    validated: false,
  },
  index,
  remove,
}) => {
  const [name, setName] = React.useState(managerDetail.name);
  const [title, setTitle] = React.useState(managerDetail.title);
  const [email, setEmail] = React.useState(managerDetail.email);

  const [nameError, setNameError] = React.useState("");
  const [titleError, setTitleError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const validate = () => {
    let isValid = true;
    if (name.length === 0) {
      isValid = false;
      setNameError("Name field is empty");
    } else {
      setNameError("");
    }

    if (title.length === 0) {
      isValid = false;
      setTitleError("Title field is empty");
    } else {
      setTitleError("");
    }

    if (email.length === 0) {
      isValid = false;
      setEmailError("E-mail field is empty");
    } else if (!validateEmail(email)) {
      isValid = false;
      setEmailError("Invalid E-mail ID provided");
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const save = () => {
    const temp = [];
    managerDetails.forEach((val) => {
      if (val.index === managerDetail.index && validate())
        temp.push({
          name,
          title,
          email,
          index: managerDetail.index,
          validated: true,
        });
      else temp.push(val);
    });
    setManagerDetails(temp);
  };

  return (
    <Grid
      container
      rowSpacing={2}
      sx={{
        width: "100vw",
        backgroundColor: "rgb(230, 230, 230)",
        borderTopRightRadius: 99,
        borderBottomLeftRadius: 99,
        mt: 1,
        mb: 1,
        p: 4,
        pb: 6,
        border: managerDetail.validated === false ? "1px solid red" : 0,
      }}
      className="cof-hs-container"
    >
      <Grid container item xs={12}>
        <Typography mb={0.5} variant="h6">
          Manager Name
        </Typography>

        <TextField
          required
          fullWidth
          value={name}
          placeholder="Name"
          type="text"
          error={nameError.length !== 0}
          helperText={nameError}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
      </Grid>

      <Grid container item xs={12}>
        <Typography mb={0.5} variant="h6">
          Manager Title
        </Typography>

        <TextField
          required
          fullWidth
          value={title}
          placeholder="Title"
          type="text"
          error={titleError.length !== 0}
          helperText={titleError}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
        />
      </Grid>

      <Grid container item xs={12}>
        <Typography mb={0.5} variant="h6">
          Manager E-mail
        </Typography>

        <TextField
          required
          fullWidth
          value={email}
          placeholder="E-mail ID (eg. 'youremail@domain.com')"
          type="email"
          error={emailError.length !== 0}
          helperText={emailError}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
      </Grid>

      <Grid item container xs={12} justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          color="error"
          endIcon={<Delete />}
          onClick={remove}
          sx={{ mr: 1, borderRadius: 99 }}
        >
          Remove
        </Button>
        <Button
          variant="contained"
          color="success"
          endIcon={<Save />}
          onClick={save}
          sx={{ ml: 1, borderRadius: 99 }}
        >
          Save
        </Button>
      </Grid>

      {index === 0 && (
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6" fontWeight="500">
            <span style={{ color: "red" }}>*</span>This manager will be
            considered as the main point of contact
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default ManagerDetailCard;

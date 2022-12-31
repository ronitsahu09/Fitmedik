import { Delete, Save } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { validateEmail } from "../../Utils/HelperFunctions";

const ManagerDetailCard = ({
  managerDetails = [{ name: "", title: "", email: "", index: 0 }],
  setManagerDetails,
  managerDetail = { name: "", title: "", email: "", index: 0 },
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
    } else if (validateEmail(email)) {
      isValid = false;
      setEmailError("Invalid E-mail ID provided");
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const remove = () => {
    const temp = [];
    console.log(managerDetails);
    managerDetails.forEach((val) => {
      if (val.index !== managerDetail.index) temp.push(val);
    });
    setManagerDetails(temp);
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
    <div style={{ width: "100vw" }} className="cof-hs-container">
      <Grid container sx={{ pt: 4, pb: 4 }} rowSpacing={2}>
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
            value={name}
            placeholder="E-mail ID (eg. 'youremail@domain.com')"
            type="email"
            error={emailError.length !== 0}
            helperText={emailError}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
        </Grid>

        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            endIcon={<Delete />}
            onClick={remove}
          >
            Remove
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<Save />}
            onClick={save}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ManagerDetailCard;

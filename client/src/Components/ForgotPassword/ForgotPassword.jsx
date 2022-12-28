import React from "react";
import { AppWrapper } from "../Styles_&_Components/Styles";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff, Key, Email } from "@mui/icons-material";
import "./styles.css";
import { validateEmail } from "../../Utils/HelperFunctions";
import LeftLogin from "./Left";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passVisible, setPassVisible] = React.useState(false);

  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [passwordErrorText, setPasswordErrorText] = React.useState("");

  const toggleVisibility = () => {
    setPassVisible(!passVisible);
  };

  const validate = () => {
    let isValid = true;

    // Validation checks for E-mail
    if (!validateEmail(email)) {
      isValid = false;
      setEmailErrorText("Please enter a valid E-mail ID");
    }
    if (email.length === 0) {
      isValid = false;
      setEmailErrorText("Please enter your E-mail ID");
    }

    // Validation checks for Password
    if (password.length < 6) {
      isValid = false;
      setPasswordErrorText("Please enter a valid password");
    }
    if (password.length === 0) {
      isValid = false;
      setPasswordErrorText("Please enter your password");
    }

    if (isValid === true) {
      setEmailErrorText("");
      setPasswordErrorText("");
    }

    return isValid;
  };

  const Login = async () => {
    const isValid = validate();

    if (isValid) {
      // API Call is implemented here
    }
  };

  return (
    <div style={{ ...AppWrapper, minHeight: "100vh" }}>
      <Grid container>
        <LeftLogin />
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={6}
          justifyContent="center"
          alignItems="center"
          p={{ xs: 5, md: 5, lg: 0 }}
        >
          <Grid item xs={1} />
          <Grid
            container
            item
            xs={10}
            style={{
              boxShadow: "0px 0px 2px 0.5px grey",
              borderRadius: 5,
            }}
          >
            <Grid container sx={{ p: 5 }} spacing={3}>
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h4" sx={{ fontWeight: "800" }}>
                  Forgot password
                </Typography>
              </Grid>

              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
              >
                <div
                  style={{
                    height: 0.5,
                    backgroundColor: "grey",
                    width: "100%",
                    marginTop: 16,
                    marginBottom: 16,
                  }}
                />
              </Grid>

              <Grid container item xs={12} alignItems="center">
                <Typography
                  variant="h6"
                  style={{ fontSize: 16, fontWeight: "800", marginBottom: 4 }}
                >
                  E-mail ID<span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  type="email"
                  required
                  variant="outlined"
                  fullWidth
                  value={email}
                  placeholder="E-mail ID"
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailErrorText.length !== 0}
                  helperText={emailErrorText}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid container item xs={12} alignItems="center">
                <Typography
                  variant="h6"
                  style={{ fontSize: 16, fontWeight: "800", marginBottom: 4 }}
                >
                  Password<span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                  type={passVisible === true ? "text" : "password"}
                  required
                  variant="outlined"
                  fullWidth
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordErrorText.length !== 0}
                  helperText={passwordErrorText}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Key />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleVisibility}>
                          {passVisible === true ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                  className="fp-button"
                  onClick={Login}
                >
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Login
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgotPasswordScreen;

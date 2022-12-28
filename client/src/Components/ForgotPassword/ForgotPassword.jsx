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
import { useNavigate } from "react-router-dom";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [passVisible, setPassVisible] = React.useState(false);
  const [isFirst, setIsFirst] = React.useState(true);

  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [otpErrorText, setOtpErrorText] = React.useState("");

  const navigate = useNavigate();

  const toggleVisibility = () => {
    setPassVisible(!passVisible);
  };

  const emailValidate = () => {
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

    if (isValid === true) {
      setEmailErrorText("");
    }

    return isValid;
  };

  const otpValidate = () => {
    let isValid = true;

    // Validation checks for Password
    if (otp.length !== 6) {
      isValid = false;
      setOtpErrorText("Please enter a valid OTP");
    }
    if (otp.length === 0) {
      isValid = false;
      setOtpErrorText("Please enter the OTP");
    }

    if (isValid === true) {
      setOtpErrorText("");
    }

    return isValid;
  };

  const onClickNext = async () => {
    if (isFirst) {
      const isValid = emailValidate();
      if (isValid === true) {
        // Request OTP API Call here
        setIsFirst(false);
      }
    } else {
      const isValid = otpValidate();
      if (isValid === true) {
        // Verify OTP API Call here
        navigate("/setuppassword");
      }
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
                  Forgot Password
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
                  disabled={!isFirst}
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
                  value={otp}
                  placeholder="OTP"
                  onChange={(e) => setOtp(e.target.value)}
                  error={otpErrorText.length !== 0}
                  helperText={otpErrorText}
                  disabled={isFirst}
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
                  onClick={onClickNext}
                >
                  <Typography variant="h6" sx={{ color: "white" }}>
                    {isFirst === true ? "Request OTP" : "Verify OTP"}
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

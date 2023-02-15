import React from "react";
import { AppWrapper } from "../Styles_&_Components/Styles";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Snackbar,
  Alert,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Email, KeyboardArrowLeft } from "@mui/icons-material";
import "./styles.css";
import { validateEmail } from "../../Utils/HelperFunctions";
import LeftLogin from "./Left";
import { ForgotPasswordApi } from "../../Apis/Hospital/Auth";
import { useNavigate } from "react-router-dom";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = React.useState("");
  const [isFirst, setIsFirst] = React.useState(true);

  const [emailErrorText, setEmailErrorText] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const navigate = useNavigate();

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

  const onClickNext = async () => {
    if (isFirst) {
      const isValid = emailValidate();
      if (isValid === true) {
        ForgotPasswordApi(email, {
          setIsFirst,
          setError,
          setLoading,
          setErrorText,
        });
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
                <Tooltip title={"Go back"}>
                  <IconButton sx={{ mr: 1 }} onClick={() => navigate(-1)}>
                    <KeyboardArrowLeft
                      fontSize="large"
                      sx={{ color: "black" }}
                    />
                  </IconButton>
                </Tooltip>
                <Typography variant="h4" sx={{ fontWeight: "800", ml: 1 }}>
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
                {isFirst ? (
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
                ) : (
                  <Typography variant="h6" fontWeight="100">
                    {`An E-mail has been sent to ${email}, which will give a link to reset your password`}
                  </Typography>
                )}
              </Grid>

              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                {isFirst && (
                  <Grid
                    container
                    item
                    justifyContent="center"
                    alignItems="center"
                    className="fp-button"
                    onClick={loading ? () => {} : onClickNext}
                  >
                    <Typography variant="h6" sx={{ color: "white" }}>
                      {loading ? "Requesting..." : "Request Mail"}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>

      {error && (
        <Snackbar
          open={error}
          autoHideDuration={5000}
          onClose={() => setError(false)}
        >
          <Alert
            onClose={() => setError(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {errorText}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default ForgotPasswordScreen;

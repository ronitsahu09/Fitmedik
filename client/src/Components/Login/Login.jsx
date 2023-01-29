import React from "react";
import { AppWrapper } from "../Styles_&_Components/Styles";
import {
  Grid,
  Typography,
  TextField,
  Link,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff, Key, Email } from "@mui/icons-material";
import "./styles.css";
import { validateEmail } from "../../Utils/HelperFunctions";
import LeftLogin from "./Left";
import { LoginManagerApi } from "../../Apis/Hospital/Auth";
import { useNavigate } from "react-router-dom";
import { GetUserToken } from "../../Cookies";

const LoginScreen = ({ props }) => {
  const { setUserToken } = props;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passVisible, setPassVisible] = React.useState(false);

  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [passwordErrorText, setPasswordErrorText] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    console.log(GetUserToken());
    if (GetUserToken()) navigate("/");
  }, []);

  const toggleVisibility = () => {
    setPassVisible(!passVisible);
  };

  const validate = () => {
    let isValid = true;

    // Validation checks for E-mail
    if (email.length === 0) {
      isValid = false;
      setEmailErrorText("Please enter your E-mail ID");
    } else if (!validateEmail(email)) {
      isValid = false;
      setEmailErrorText("Please enter a valid E-mail ID");
    } else setEmailErrorText("");

    // Validation checks for Password
    if (password.length === 0) {
      isValid = false;
      setPasswordErrorText("Please enter your password");
    } else if (password.length < 6) {
      isValid = false;
      setPasswordErrorText("Please enter a valid password");
    } else setPasswordErrorText("");

    return isValid;
  };

  const Login = async () => {
    const isValid = validate();

    if (isValid) {
      const res = await LoginManagerApi(
        { email, password },
        { setLoading, setError, setErrorText, setToken: setUserToken }
      );
      if (res) navigate("/");
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
                  Login to your Account
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
                  className="login-button"
                  onClick={Login}
                >
                  <Typography variant="h6" sx={{ color: "white" }}>
                    {loading ? "Logging in..." : "Login"}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h6" sx={{ fontSize: 12 }}>
                  Forgot your password?{" "}
                  <Link
                    href="/forgotpassword"
                    sx={{ color: "#ff6355", fontWeight: "900" }}
                  >
                    Click here
                  </Link>
                </Typography>
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

export default LoginScreen;

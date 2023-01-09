import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Alert,
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff, Key, Email } from "@mui/icons-material";
import React from "react";
import { validateEmail } from "../../Utils/HelperFunctions";
import { Login, VerifyOtp } from "../../Apis/Admin/Login";
import { useNavigate } from "react-router-dom";
import { GetAdminToken, LoginAdmin } from "../../Cookies/admin";

const AdminLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passVisible, setPassVisible] = React.useState(false);

  const [otp, setOtp] = React.useState("");
  const [isOtp, setIsOtp] = React.useState(false);

  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [passwordErrorText, setPasswordErrorText] = React.useState("");
  const [otpErrorText, setOtpErrorText] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const [adminToken, setAdminToken] = React.useState("");

  const navigate = useNavigate();

  const toggleVisibility = () => {
    setPassVisible(!passVisible);
  };

  React.useEffect(() => {
    const token = GetAdminToken();
    console.log(token);
    if (token) navigate("/admin/dashboard");
  }, []);

  const LoginAdminCreds = async () => {
    const isValid = validate();

    if (isValid) {
      // API Call is implemented here
      Login(
        { email, password },
        { setLoading, setError, setErrorText, setIsOtp, setAdminToken }
      );
    }
  };

  const Verify = async () => {
    const isValid = validateOtp();

    if (isValid) {
      const verified = await VerifyOtp(otp, {
        setLoading,
        setError,
        setErrorText,
        setIsOtp,
      });
      if (verified) {
        LoginAdmin(adminToken);
        navigate("/admin/dashboard");
      }
    }
  };

  const validateOtp = () => {
    let isValid = true;
    // Validation checks for OTP
    if (otp.length === 0) {
      isValid = false;
      setOtpErrorText("Please enter your OTP");
    } else setOtpErrorText("");
    return isValid;
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

  return (
    <div style={{ minHeight: "100vh" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          p={{ xs: 5, md: 5, lg: 0 }}
        >
          <Grid item xs={3} />
          <Grid
            container
            item
            xs={6}
            justifyContent="center"
            alignItems="center"
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
                  Admin Login
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
                  disabled={isOtp}
                />
              </Grid>

              <Grid container item xs={12} alignItems="center">
                <Typography
                  variant="h6"
                  style={{ fontSize: 16, fontWeight: "800", marginBottom: 4 }}
                >
                  {isOtp === false ? "Password" : "OTP"}
                  <span style={{ color: "red" }}>*</span>
                </Typography>
                {isOtp === false ? (
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
                ) : (
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
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                  className="login-button"
                  onClick={
                    loading
                      ? () => {}
                      : isOtp === false
                      ? LoginAdminCreds
                      : Verify
                  }
                >
                  <Typography variant="h6" sx={{ color: "white" }}>
                    {loading
                      ? "Loading..."
                      : isOtp === false
                      ? "Login"
                      : "Verify OTP"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} />
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

export default AdminLogin;

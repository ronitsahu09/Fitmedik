import React from "react";
import { Button, Grid, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Header from "../Header";
import { colors } from "../../Utils/colors";
import { LogoutUser } from "../../Cookies";
import { Logout } from "@mui/icons-material";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import {
  AppWrapper,
  fixedWindow,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";

const SettingsPage = () => {
  const navigate = useNavigate();

  const style = {
    backgroundColor: colors.fitmedikOrange,
    p: 4,
    transition: "0.3s",
    mt: 1,
    mb: 1,
    borderRadius: 10,
  };

  return (
    <div>
      <Stack sx={{ ...AppWrapper, height: "100vh" }} direction="row">
        <LeftSidebar />
        <Stack sx={{ ...middle }}>
          <Stack sx={{ ...middleWindow }}>
            <Typography variant="h3" component="div" fontWeight="700">
              Settings
            </Typography>

            <Stack sx={{ ...fixedWindow }}>
              <Stack gap={3} mt={3}>
                <Stack direction="column" alignItems="center" gap="0.5rem">
                  <Grid container>
                    <Grid container item xs={12} alignItems="center">
                      <Grid
                        item
                        container
                        xs={12}
                        md={5.5}
                        onClick={() => navigate("/organization-details")}
                        className="settings-item"
                        sx={style}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography
                          variant="h5"
                          fontWeight="400"
                          color="white"
                          sx={{ m: 4 }}
                        >
                          Organization Details
                        </Typography>
                      </Grid>
                      <Grid item xs={1} />
                      <Grid
                        item
                        container
                        xs={12}
                        md={5.5}
                        onClick={() => navigate("/departments")}
                        className="settings-item"
                        sx={style}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography
                          variant="h5"
                          fontWeight="400"
                          color="white"
                          sx={{ m: 4 }}
                        >
                          Employees & Departments
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        container
                        xs={12}
                        md={5.5}
                        onClick={() => navigate("/forgotpassword")}
                        className="settings-item"
                        sx={style}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography
                          variant="h5"
                          fontWeight="400"
                          color="white"
                          sx={{ m: 4 }}
                        >
                          Forgot Password
                        </Typography>
                      </Grid>
                      <Grid item xs={1} />
                      <Grid
                        item
                        container
                        xs={12}
                        md={5.5}
                        onClick={() => navigate("/settings")}
                        className="settings-item"
                        sx={style}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography
                          variant="h5"
                          fontWeight="400"
                          color="white"
                          sx={{ m: 4 }}
                        >
                          Privacy Policy
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <div style={{ position: "fixed", bottom: 50, right: 50 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={LogoutUser}
          startIcon={<Logout />}
          size="large"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;

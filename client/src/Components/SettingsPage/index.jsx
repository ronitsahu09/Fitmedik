import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import {
  AppWrapper,
  fixedWindow,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";
import SettingsButton from "./SettingsButton";

const SettingsPage = () => {
  const navigate = useNavigate();

  const style = {
    transition: "0.3s",
    mt: 1,
    mb: 1,
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
                      <SettingsButton
                        onClick={() => navigate("/organization-details")}
                        style={style}
                        title={"Organization Details"}
                      />
                      <SettingsButton
                        onClick={() => navigate("/departments")}
                        style={style}
                        title={"Employees & Departments"}
                      />
                      <SettingsButton
                        onClick={() => navigate("/forgotpassword")}
                        style={style}
                        title={"Forgot Password"}
                      />
                      <SettingsButton
                        onClick={() => navigate("/settings")}
                        style={style}
                        title={"Privacy Policy"}
                      />
                    </Grid>
                  </Grid>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default SettingsPage;

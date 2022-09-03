import {
  AttachMoney,
  Home,
  Notifications,
  SsidChart,
  Poll,
  Settings,
  LoginRounded,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

import { Link } from "react-router-dom";

import { leftSidebar } from "./Styles";

export default function LeftSidebar() {
  return (
    <Stack
      sx={{
        ...leftSidebar,
        justifyContent: "space-between",
      }}
    >
      <Stack gap={3}>
        <Box component={Link} to="/">
          <Tooltip
            title="Home"
            placement="right-start"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton>
              <Home fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box component={Link} to="/analytics">
          <Tooltip
            title="Analytics"
            placement="right-start"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton>
              <SsidChart fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box component={Link} to="/costsavings">
          <Tooltip
            title="Cost Savings"
            placement="right-start"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton>
              <AttachMoney fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box component={Link} to="/surveyresults">
          <Tooltip
            title="MBI Results"
            placement="right-start"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton>
              <Poll fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box component={Link} to="/notifications">
          <Tooltip
            title="Notifications"
            placement="right-start"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton>
              <Notifications fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>

      <Stack gap={3}>
        <Box component={Link} to="/">
          <Tooltip
            title="Settings"
            placement="right-start"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton>
              <Settings fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box component={Link} to="/">
          <Tooltip
            title="Login"
            placement="right-start"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton>
              <LoginRounded fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>

      {/* <Box>Emergency department</Box>

      <Box>Employee Alert</Box> */}
    </Stack>
  );
}

import {
  AttachMoney,
  Home,
  Notifications,
  SsidChart,
  Poll,
  Settings,
  LoginRounded,
  Monitor,
  Handshake,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

import { Link, NavLink } from "react-router-dom";

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
        <Tooltip
          title="Home"
          placement="right-start"
          TransitionComponent={Zoom}
          arrow
        >
          <Box
            component={NavLink}
            end
            style={({ isActive }) =>
              isActive ? { color: "#f55f4b" } : { color: "grey" }
            }
            to="/"
          >
            <IconButton sx={{ color: "inherit" }}>
              <Home fontSize="large" />
            </IconButton>
          </Box>
        </Tooltip>

        <Tooltip
          title="Analytics"
          placement="right-start"
          TransitionComponent={Zoom}
          arrow
        >
          <Box
            component={NavLink}
            style={({ isActive }) =>
              isActive ? { color: "hsl(166, 90%, 35%)" } : { color: "grey" }
            }
            to="/analytics"
          >
            <IconButton sx={{ color: "inherit" }}>
              <SsidChart fontSize="large" />
            </IconButton>
          </Box>
        </Tooltip>

        <Tooltip
          title="Cost Savings"
          placement="right-start"
          TransitionComponent={Zoom}
          arrow
        >
          <Box
            component={NavLink}
            style={({ isActive }) =>
              isActive ? { color: "hsl(166, 90%, 35%)" } : { color: "grey" }
            }
            to="/costsavings"
          >
            <IconButton sx={{ color: "inherit" }}>
              <AttachMoney fontSize="large" />
            </IconButton>
          </Box>
        </Tooltip>

        <Tooltip
          title="MBI Results"
          placement="right-start"
          TransitionComponent={Zoom}
          arrow
        >
          <Box
            component={NavLink}
            style={({ isActive }) =>
              isActive ? { color: "hsl(166, 90%, 35%)" } : { color: "grey" }
            }
            to="/surveyresults"
          >
            <IconButton sx={{ color: "inherit" }}>
              <Poll fontSize="large" />
            </IconButton>
          </Box>
        </Tooltip>

        {/* Notifications Hidden */}

        {/* <Tooltip
          title="Notifications"
          placement="right-start"
          TransitionComponent={Zoom}
          arrow
        >
          <Box
            component={NavLink}
            style={({ isActive }) =>
              isActive ? { color: "hsl(166, 90%, 35%)" } : { color: "grey" }
            }
            to="/notifications"
          >
            <IconButton sx={{ color: "inherit" }}>
              <Notifications fontSize="large" />
            </IconButton>
          </Box>
        </Tooltip> */}

        <Tooltip
          title="Monitor Actions"
          placement="right-start"
          TransitionComponent={Zoom}
          arrow
        >
          <Box
            component={NavLink}
            style={({ isActive }) =>
              isActive ? { color: "hsl(166, 90%, 35%)" } : { color: "grey" }
            }
            to="/monitoractions"
          >
            <IconButton sx={{ color: "inherit" }}>
              <Monitor fontSize="large" />
            </IconButton>
          </Box>
        </Tooltip>

        <Tooltip
          title="Treatment Partners"
          placement="right-start"
          TransitionComponent={Zoom}
          arrow
        >
          <Box
            component={NavLink}
            style={({ isActive }) =>
              isActive ? { color: "hsl(166, 90%, 35%)" } : { color: "grey" }
            }
            to="/treatment-partners"
          >
            <IconButton sx={{ color: "inherit" }}>
              <Handshake fontSize="large" />
            </IconButton>
          </Box>
        </Tooltip>
      </Stack>

      <Stack gap={3}>
        <Box component={Link} to="/settings">
          <Tooltip
            title="Settings"
            placement="right-start"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton sx={{ color: "grey" }}>
              <Settings fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box component={Link} to="/login">
          <Tooltip
            title="Login"
            placement="right-start"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton sx={{ color: "grey" }}>
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

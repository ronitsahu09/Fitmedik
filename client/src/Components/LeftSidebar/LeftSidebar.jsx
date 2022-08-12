import {
  AttachMoney,
  Home,
  Notifications,
  SsidChart,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

import { Link } from "react-router-dom";

import { leftSidebar } from "./Styles";

export default function LeftSidebar() {
  return (
    <Stack sx={{ ...leftSidebar }}>
      <Stack>
        <Box component={Link} to="/">
          <Tooltip
            title="Home"
            placement="right-start"
            TransitionComponent={Zoom}
            arrow
          >
            <IconButton>
              <Home />
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
              <SsidChart />
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
              <Notifications />
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
              <AttachMoney />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>

      <Box>Emergency department</Box>

      <Box>Employee Alert</Box>
    </Stack>
  );
}

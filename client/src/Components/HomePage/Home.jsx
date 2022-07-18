import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Stack, Box, Typography, Paper } from "@mui/material";
import { homePage, users_status } from "./Styles";

import ActiveUsers from "../Graphs/ActiveUsers/ActiveUsers";
import TrendGraph from "../Graphs/Trend_Graph/TrendGraph";
import {
  fixedWindow,
  graphCanvas,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";
import Speedometer from "../Graphs/Speedometer/Speedometer";

export default function Home() {
  return (
    <Stack sx={{ ...homePage }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Stack sx={{ ...middleWindow }}>
          <Typography variant="h3" component="div" fontWeight="700">
            Dashboard
          </Typography>

          <Stack sx={{...fixedWindow}}>
            <Stack mt={3} direction="row" gap={4}>
              <Paper sx={{ ...graphCanvas, ...users_status, flex: 1 }}>
                <ActiveUsers />
                <Typography variant="h6" component="div">
                  Active Users
                </Typography>
              </Paper>
              <Paper sx={{ ...graphCanvas, ...users_status, flex: 1 }}>
                <Speedometer />
                <Typography variant="h6" component="div">
                  Hospital Status
                </Typography>
              </Paper>
            </Stack>

            <Stack gap={3}>
              <Typography variant="h4" component="div" fontWeight="500">
                Burnout Trend in the organisation
              </Typography>
              <Paper
                sx={{
                  ...graphCanvas,
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  Average Burnout ⬇️
                  <Stack direction="row" gap={3}>
                    Monthly
                    <Box>{"<Apr 2022>"}</Box>
                  </Stack>
                </Stack>

                <TrendGraph />
              </Paper>
            </Stack>

            <Box sx={{ height: 5 }}></Box>
          </Stack>
        </Stack>
      </Stack>

      <RightSidebar />
    </Stack>
  );
}

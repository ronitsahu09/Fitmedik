import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Stack, Box, Typography, Paper } from "@mui/material";
import { users_status } from "./Styles";

import TrendGraph from "../Graphs/Trend_Graph/TrendGraph";
import {
  AppWrapper,
  fixedWindow,
  graphCanvas,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";
import Speedometer from "../Graphs/Speedometer/Speedometer";
import NewActiveUsers from "../Graphs/NewActiveUsers/NewActiveUsers";

export default function Home({ props }) {
  const { appHeight } = props;

  return (
    <Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Stack sx={{ ...middleWindow }}>
          <Typography variant="h3" component="div" fontWeight="700">
            Dashboard
          </Typography>

          <Stack sx={{ ...fixedWindow }}>
            <Stack mt={3} direction="row" gap={4}>
              <Paper
                sx={{
                  ...graphCanvas,
                  flex: 1,
                }}
              >
                <NewActiveUsers />
              </Paper>
              <Paper sx={{ ...graphCanvas, ...users_status, flex: 1 }}>
                <Speedometer />
                <Typography variant="h6" component="div">
                  Hospital Status
                </Typography>
              </Paper>
            </Stack>

            <Stack gap={2}>
              <Typography variant="h5" component="div" fontWeight="500">
                Burnout Trend in the organisation
              </Typography>
              <Paper
                sx={{
                  ...graphCanvas,
                  width: "5in",
                }}
              >
                <Stack direction="row" justifyContent="space-between" mb={2}>
                  <select name="Burnout" defaultValue="Average Burnout">
                    <option value="Average Burnout">Average Burnout</option>
                  </select>
                  <Stack direction="row" gap={3}>
                    <select defaultValue="April" name="Monthly-filter">
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                    </select>
                    <Box>{"<  Apr 2022  >"}</Box>
                  </Stack>
                </Stack>

                <TrendGraph />
              </Paper>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <RightSidebar />
    </Stack>
  );
}

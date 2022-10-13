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
import { NewNotification } from "../Styles_&_Components/Components";

export default function Home({ props }) {
  const { appHeight } = props;

  return (
    <Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Stack sx={{ ...middleWindow }}>
          <Typography variant="h3" component="div" fontWeight="700">
            Home
          </Typography>

          <Stack sx={{ ...fixedWindow }}>
            <Stack mt={3} direction="row" gap={4}>
              <Paper
                sx={{
                  ...graphCanvas,
                  flex: 1,
                  height: "25vh",
                }}
              >
                <NewActiveUsers />
              </Paper>

              <Paper
                sx={{
                  ...graphCanvas,
                  ...users_status,
                  flex: 1,
                }}
              >
                <Speedometer />
                <Typography variant="h6" component="div">
                  Hospital Status
                </Typography>
              </Paper>

              <Paper
                sx={{
                  ...graphCanvas,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack flex={1} justifyContent="center" alignItems="center">
                  <Typography
                    variant="div"
                    component="div"
                    fontSize="3rem"
                    color="#f55f4b"
                  >
                    $800
                  </Typography>
                </Stack>
                <Typography textAlign="center" variant="h6" component="div">
                  Total Savings
                </Typography>
              </Paper>
            </Stack>

            <Stack direction="row" gap={2}>
              <Paper
                sx={{
                  ...graphCanvas,
                  width: "70%",
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

              <Stack justifyContent="space-between" flex={1}>
                <NewNotification
                  props={{
                    title: "Average Burnout",
                    subHeading: "Organization",
                    staus: "alert",
                    content: "Lorem Ipsum"
                  }}
                />

                <NewNotification
                  props={{
                    title: "Average Burnout",
                    subHeading: "Organization",
                    staus: "alert",
                    content: "Lorem Ipsum"
                  }}
                />

                <NewNotification
                  props={{
                    title: "Average Burnout",
                    subHeading: "Organization",
                    staus: "alert",
                    content: "Lorem Ipsum"
                  }}
                />
              </Stack>
            </Stack>

            <Box sx={{ height: 5 }}></Box>
          </Stack>
        </Stack>
      </Stack>

      <RightSidebar />
    </Stack>
  );
}

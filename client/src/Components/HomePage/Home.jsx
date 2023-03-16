import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Stack, Box, Typography, Paper, Unstable_Grid2 } from "@mui/material";
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
import { useSelector } from "react-redux";
import { AverageBurnoutTrend } from "../AverageBurnoutTrend/AverageBurnoutTrend";

export default function Home({ props }) {
  const { appHeight } = props;

  const users = useSelector(
    (state) => state.organization?.organizationInfo?.users
  );

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
                <Speedometer
                  props={{
                    percent: (function () {
                      let riskCount = 0;
                      let totalCount = 0;

                      if (users) {
                        users.map((user) => {
                          const { health_data: healthData } = user;
                          const len = healthData.length;

                          totalCount++;

                          if (healthData[len - 1]?.burnout < 4) return null;

                          riskCount++;

                          return null;
                        });
                      }

                      return riskCount / totalCount;
                    })(),
                  }}
                />
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
                    fontSize="1.5rem"
                    fontWeight="bold"
                    color="#06b58c"
                    textAlign="center"
                  >
                    $6,999,929 - $3,980,000
                  </Typography>
                </Stack>
                <Typography textAlign="center" variant="h6" component="div">
                  Cost Savings
                </Typography>
              </Paper>
            </Stack>

            <AverageBurnoutTrend users={users} />

            <Box sx={{ height: 5 }}></Box>
          </Stack>
        </Stack>
      </Stack>

      <RightSidebar />
    </Stack>
  );
}

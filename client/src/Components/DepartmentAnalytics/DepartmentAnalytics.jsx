import { Box, Paper, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import HealthTracker from "../Graphs/Health_Tracker/HealthTracker";
import PieChart from "../Graphs/PieChart/PieChart";
import TrendGraph from "../Graphs/Trend_Graph/TrendGraph";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Legend, PieLegend } from "../Styles_&_Components/Components";
import {
  AppWrapper,
  fixedWindow,
  graphCanvas,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";

export default function DepartmentAnalytics({ props }) {
  const { id } = useParams();
  const { appHeight } = props;

  return (
    <Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Stack sx={{ ...middleWindow }}>
          <Typography variant="h3" component="div" fontWeight="700">
            {id}
          </Typography>

          <Stack sx={{ ...fixedWindow }}>
            <Stack direction="row" mt={3} gap={2} flexWrap="wrap">
              <Stack gap={2} flex={1}>
                <Typography variant="h5" component="div" fontWeight="500">
                  Department Status
                </Typography>
                <Paper
                  sx={{
                    ...graphCanvas,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Box position="relative" height="100%" flex={1}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 4,
                        bottom: 4,
                        left: 4,
                        right: 4,
                      }}
                    >
                      <PieChart />
                    </Box>
                  </Box>
                  <Stack gap={1}>
                    <PieLegend props={{ title: "Danger", color: "#f55f4b" }} />
                    <PieLegend props={{ title: "High", color: "#f08624" }} />
                    <PieLegend props={{ title: "Medium", color: "#fed867" }} />
                    <PieLegend props={{ title: "Low", color: "#8eabdc" }} />
                    <PieLegend props={{ title: "Safe", color: "#06b78e" }} />
                  </Stack>
                </Paper>
              </Stack>

              <Stack gap={2} flex={1}>
                <Typography variant="h5" component="div" fontWeight="500">
                  Burnout Trend in the organisation
                </Typography>
                <Paper
                  sx={{
                    ...graphCanvas,
                    width: "100%",
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

            <Stack gap={3}>
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: "1.8em", lg: "2em" },
                    fontWeight: "500",
                    mr: 2,
                  }}
                >
                  Employee Health Tracker
                </Typography>
                <Stack direction="row" gap={2}>
                  <Legend props={{ title: "Safe", color: "#06b58c" }} />
                  <Legend props={{ title: "Low", color: "#8fabdd" }} />
                  <Legend props={{ title: "Medium", color: "#fed966" }} />
                  <Legend props={{ title: "High", color: "#f08725" }} />
                  <Legend props={{ title: "Danger", color: "#f55f4b" }} />
                </Stack>
              </Stack>

              <Paper
                sx={{
                  ...graphCanvas,
                  display: "flex",
                  gap: 1,
                  rowGap: "2rem",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HealthTracker props={{ data: {}, title: "Stress" }} />
                <HealthTracker
                  props={{ data: {}, title: "Physical Fatigue" }}
                />
                <HealthTracker props={{ data: {}, title: "Sleep quality" }} />
                <HealthTracker props={{ data: {}, title: "Arrhythmia" }} />
                <HealthTracker props={{ data: {}, title: "CVD" }} />
                <HealthTracker props={{ data: {}, title: "Hypertension" }} />
              </Paper>
            </Stack>

            <Stack direction={{ xs: "column", lg: "row" }} gap={2}>
              <Stack flex={1} gap={3}>
                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: "1.8em", lg: "2em" },
                    fontWeight: "500",
                  }}
                >
                  High Risk Profession
                </Typography>
                <Paper
                  sx={{
                    ...graphCanvas,
                    p: 1,
                    pb: 0,
                  }}
                >
                  <Stack
                    direction="row"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                  >
                    <Box width="2.4in" height="2in">
                      <PieChart />
                    </Box>
                    <Stack>
                      <PieLegend
                        props={{ title: "Doctors", color: "#f55f4b" }}
                      />
                      <PieLegend
                        props={{ title: "Nurses", color: "#06b78e" }}
                      />
                      <PieLegend props={{ title: "IT", color: "#f08624" }} />
                      <PieLegend
                        props={{ title: "Students", color: "#8eabdc" }}
                      />
                      <PieLegend props={{ title: "Staff", color: "#fed867" }} />
                    </Stack>
                  </Stack>
                </Paper>
              </Stack>
              <Stack flex={1} gap={3}>
                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: "1.8em", lg: "2em" },
                    fontWeight: "500",
                  }}
                >
                  Gender
                </Typography>
                <Paper
                  sx={{
                    ...graphCanvas,
                    p: 1,
                    pb: 0,
                  }}
                >
                  <Stack
                    direction="row"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                  >
                    <Box width="2.4in" height="2in">
                      <PieChart />
                    </Box>
                    <Stack>
                      <PieLegend
                        props={{ title: "Doctors", color: "#f55f4b" }}
                      />
                      <PieLegend
                        props={{ title: "Nurses", color: "#06b78e" }}
                      />
                      <PieLegend props={{ title: "IT", color: "#f08624" }} />
                      <PieLegend
                        props={{ title: "Students", color: "#8eabdc" }}
                      />
                      <PieLegend props={{ title: "Staff", color: "#fed867" }} />
                    </Stack>
                  </Stack>
                </Paper>
              </Stack>
            </Stack>
            <Box sx={{ height: 5 }}></Box>
          </Stack>
        </Stack>
      </Stack>

      {/* <RightSidebar /> */}
    </Stack>
  );
}

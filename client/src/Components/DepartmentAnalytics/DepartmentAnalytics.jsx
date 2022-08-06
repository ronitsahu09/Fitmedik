import { Box, Paper, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import HealthTracker from "../Graphs/Health_Tracker/HealthTracker";
import PieChart from "../Graphs/PieChart/PieChart";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Legend } from "../Styles_&_Components/Components";
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
                  gap: "15%",
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
            <Stack direction="row" gap={2} alignItems="flex-end">
              <Stack flex={1} gap={3}>
                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: "1.8em", lg: "2em" },
                    fontWeight: "500",
                    mr: 2,
                  }}
                >
                  High Risk Profession
                </Typography>
                <Paper
                  sx={{
                    ...graphCanvas,
                    p: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box width="70%">
                    <PieChart />
                  </Box>
                </Paper>
              </Stack>
              <Stack flex={1} gap={3}>
                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: "1.8em", lg: "2em" },
                    fontWeight: "500",
                    mr: 2,
                  }}
                >
                  Gender
                </Typography>
                <Paper
                  sx={{
                    ...graphCanvas,
                    p: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box width="70%">
                    <PieChart />
                  </Box>
                </Paper>
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
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import HealthTracker from "../Graphs/Health_Tracker/HealthTracker";
import PieChart from "../Graphs/PieChart/PieChart";
import TrendGraph from "../Graphs/Trend_Graph/TrendGraph";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import { Legend } from "../Styles_&_Components/Components";
import {
  AppWrapper,
  fixedWindow,
  graphCanvas,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";

const genderPieData = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "Gender Diversity",
      data: [30, 25],
      backgroundColor: ["#f55f4b", "#06b58c"],
      borderColor: ["#f55f4b", "#06b58c"],
      datalabels: {
        anchor: "end",
        color: "white",
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        display: function (context) {
          const index = context.dataIndex;
          const {
            dataset: { data },
          } = context;

          return data[index] > 10;
        },
        formatter: function (value) {
          return `${value} %`;
        },
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "white",
        padding: 4,
        font: { weight: "bold" },
      },
      borderAlign: "inner",
    },
  ],
};

const genderPieOptions = {
  responsive: true,
  layout: {
    padding: 20,
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },

    doughnutLabelsLine: false,
    tooltip: {
      enabled: false,
    },
  },
};

const Profession = {
  Doctors: [20, 20],
  Nurses: [6, 20],
  IT: [14, 20],
  Students: [5, 20],
  Staff: [2, 40],
};

const EmployeePieData = {
  labels: Object.keys(Profession),
  datasets: [
    {
      label: "High Risk Profession",
      data: Object.entries(Profession).map((property) => {
        const percent = (100 * property[1][0]) / property[1][1];
        return percent;
      }),
      backgroundColor: [
        "hsl(7, 89%, 63%)",
        "hsl(166, 94%, 37%)",
        "hsl(29, 87%, 54%)",
        "hsl(218, 53%, 71%)",
        "hsl(45, 99%, 70%)",
      ],
      borderColor: [
        "hsl(7, 89%, 63%)",
        "hsl(166, 94%, 37%)",
        "hsl(29, 87%, 54%)",
        "hsl(218, 53%, 71%)",
        "hsl(45, 99%, 70%)",
      ],
      datalabels: {
        anchor: "end",
        color: "white",
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        display: function (context) {
          const index = context.dataIndex;
          const {
            dataset: { data },
          } = context;

          return data[index] > 10;
        },
        formatter: function (value) {
          return `${value} %`;
        },
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "white",
        padding: 4,
        font: { weight: "bold" },
      },
      borderAlign: "inner",
    },
  ],
};

const EmployeePieOptions = {
  responsive: true,
  layout: {
    padding: 20,
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },

    doughnutLabelsLine: false,
    tooltip: {
      enabled: false,
    },
  },
};

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
            <Stack direction="row" mt={3} gap={2}>
              <Stack gap={2} flex={1}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5" component="div" fontWeight="500">
                    Department Status
                  </Typography>
                  {/* <Stack direction="row" gap={2}>
                    <Legend props={{ title: "Nurses", color: "#06b58c" }} />
                    <Legend props={{ title: "Students", color: "#8fabdd" }} />
                    <Legend props={{ title: "Staff", color: "#fed966" }} />
                    <Legend props={{ title: "IT", color: "#f08725" }} />
                    <Legend props={{ title: "Doctors", color: "#f55f4b" }} />
                  </Stack> */}
                </Stack>
                <Paper
                  sx={{
                    ...graphCanvas,
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    flex: 1,
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 4,
                      bottom: 4,
                      left: 4,
                      right: 4,
                    }}
                  >
                    <PieChart
                      props={{
                        chartData: EmployeePieData,
                        options: EmployeePieOptions,
                      }}
                    />
                  </Box>
                </Paper>
              </Stack>

              <Stack gap={2} flex={1}>
                <Typography variant="h5" component="div" fontWeight="500">
                  Burnout Trend in the organisation
                </Typography>
                <Paper
                  sx={{
                    ...graphCanvas,
                    flex: 1,
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
                  <Box position="relative" width="98%" height="50%">
                    <TrendGraph />
                  </Box>
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

            <Stack
              direction="row"
              alignItems="flex-end"
              gap={3}
              flexWrap="wrap"
            >
              <Stack flex={1} gap={3}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
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
                  <Stack direction="row" gap={2}>
                    <Legend props={{ title: "Nurses", color: "#06b58c" }} />
                    <Legend props={{ title: "Students", color: "#8fabdd" }} />
                    <Legend props={{ title: "Staff", color: "#fed966" }} />
                    <Legend props={{ title: "IT", color: "#f08725" }} />
                    <Legend props={{ title: "Doctors", color: "#f55f4b" }} />
                  </Stack>
                </Stack>

                <Paper
                  sx={{
                    ...graphCanvas,
                    p: 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box height="2.5in" width="3in">
                    <PieChart
                      props={{
                        chartData: EmployeePieData,
                        options: EmployeePieOptions,
                      }}
                    />
                  </Box>
                </Paper>
              </Stack>

              <Stack flex={1} gap={3}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
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
                  <Stack direction="row" gap={2}>
                    <Legend props={{ title: "Male", color: "#f55f4b" }} />
                    <Legend props={{ title: "Female", color: "#06b58c" }} />
                  </Stack>
                </Stack>

                <Paper
                  sx={{
                    ...graphCanvas,
                    p: 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box height="2.5in" width="3in">
                    <PieChart
                      props={{
                        chartData: genderPieData,
                        options: genderPieOptions,
                      }}
                    />
                  </Box>
                </Paper>
              </Stack>
            </Stack>

            <Box sx={{ height: 5 }}></Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

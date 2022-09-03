import { Box, Paper, Stack, Typography } from "@mui/material";
import DepartmentsChart from "../Graphs/Departments_Chart/DepartmentsChart";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import {
  graphCanvas,
  middle,
  middleWindow,
  fixedWindow,
  AppWrapper,
} from "../Styles_&_Components/Styles";
import { Legend } from "../Styles_&_Components/Components";
import HealthTracker from "../Graphs/Health_Tracker/HealthTracker";
import PieChart from "../Graphs/PieChart/PieChart";

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

export default function Analytics({ props }) {
  const { appHeight } = props;

  return (
    <Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Stack sx={{ ...middleWindow }}>
          <Typography variant="h3" component="div" fontWeight="700">
            Analytics
          </Typography>

          <Stack sx={{ ...fixedWindow }}>
            <Stack gap={3} mt={3}>
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: "1.8em", lg: "2em" },
                    fontWeight: "500",
                    mr: 2,
                  }}
                >
                  Departments at risk
                </Typography>
                <Stack direction="row" gap={2}>
                  <Legend props={{ title: "Safe", color: "#06b58c" }} />
                  <Legend props={{ title: "Low", color: "#8fabdd" }} />
                  <Legend props={{ title: "Medium", color: "#fed966" }} />
                  <Legend props={{ title: "High", color: "#f08725" }} />
                  <Legend props={{ title: "Danger", color: "#f55f4b" }} />
                </Stack>
              </Stack>
              <Paper sx={{ ...graphCanvas, p: "1.5rem" }}>
                <DepartmentsChart />
              </Paper>
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

            <Stack gap={3}>
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
                }}
              >
                <Box height="2.5in">
                  <PieChart
                    props={{
                      chartData: EmployeePieData,
                      options: EmployeePieOptions,
                    }}
                  />
                </Box>
              </Paper>
            </Stack>

            <Stack gap={3}>
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
                }}
              >
                <Box height="2.5in">
                  <PieChart
                    props={{
                      chartData: genderPieData,
                      options: genderPieOptions,
                    }}
                  />
                </Box>
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

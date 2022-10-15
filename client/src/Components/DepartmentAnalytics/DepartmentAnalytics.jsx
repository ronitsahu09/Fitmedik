import { Box, Paper, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HealthTracker from "../Graphs/Health_Tracker/HealthTracker";
import PieChart from "../Graphs/PieChart/PieChart";
import TrendGraph from "../Graphs/Trend_Graph/TrendGraph";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import { GraphInfo, Legend } from "../Styles_&_Components/Components";
import {
  AppWrapper,
  fixedWindow,
  graphCanvas,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";

const Profession = {
  Doctors: [13, 20],
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

  const department = useSelector((state) => {
    const departments = state.organization.organizationInfo?.departments;
    if (!departments) return null;
    return departments.filter((dept) => dept._id === id)[0];
  });

  //* Fetch average Burnout according to department id later.
  const averageBurnout = useSelector(
    (state) => state?.organization?.organizationInfo?.averageBurnout
  );

  const DepartmentStatusPieData = {
    labels: ["Safe", "Low", "Medium", "High", "Danger"],
    datasets: [
      {
        label: "Department Status",
        data: (function () {
          let data = [0, 0, 0, 0, 0];

          if (department) {
            const { users } = department;

            users.map((user) => {
              const { burnout } = user;
              const len = burnout.length;

              const burnoutScore = burnout[len - 1];

              switch (burnoutScore) {
                case 5:
                  data[4]++;
                  break;
                case 4:
                  data[3]++;
                  break;
                case 3:
                  data[2]++;
                  break;
                case 2:
                  data[1]++;
                  break;
                case 1:
                  data[0]++;
                  break;
              }

              data.map((count) => +((count * 100) / len).toFixed(1));
            });
          }

          return data;
        })(),
        backgroundColor: [
          "#06b58c",
          "#8fabdd",
          "#fed966",
          "#f08725",
          "#f55f4b",
        ],
        borderColor: ["#06b58c", "#8fabdd", "#fed966", "#f08725", "#f55f4b"],
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

  const DepartmentStatusPieOptions = {
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

  const genderPieData = {
    labels: ["Male", "Female", "Transgender", "Non-Binary", "Other"],
    datasets: [
      {
        label: "Gender Diversity",
        data: (function () {
          let data = [0, 0, 0, 0, 0];

          if (department) {
            const { users } = department;

            users.map((user) => {
              switch (user.gender) {
                case "male":
                  data[0]++;
                  break;
                case "female":
                  data[1]++;
                  break;
                case "transgender":
                  data[2]++;
                  break;
                case "non-binary":
                  data[3]++;
                  break;
                case "other":
                  data[4]++;
                  break;
              }
            });

            data = data.map(
              (count) => +((100 * count) / users.length).toFixed(1)
            );
          }
          console.log(data);
          return data;
        })(),
        backgroundColor: [
          "#06b58c",
          "#8fabdd",
          "#fed966",
          "#f08725",
          "#f55f4b",
        ],
        borderColor: ["#06b58c", "#8fabdd", "#fed966", "#f08725", "#f55f4b"],
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

            const fivePercent = (5 * (department?.users?.length || 1)) / 100;

            return data[index] > fivePercent;
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

  const ethnicityPieData = {
    labels: ["American Native", "Asian", "Coloured", "Other", "White"],
    datasets: [
      {
        label: "High Risk Profession",
        data: (function () {
          let data = [0, 0, 0, 0, 0];

          if (department) {
            const { users } = department;

            users.map((user) => {
              switch (user.ethnicity) {
                case "american native":
                  data[0]++;
                  break;
                case "asian":
                  data[1]++;
                  break;
                case "coloured":
                  data[2]++;
                  break;
                case "other":
                  data[3]++;
                  break;
                case "white":
                  data[4]++;
                  break;
              }
            });

            data = data.map(
              (count) => +((count * 100) / users.length).toFixed(1)
            );
          }

          return data;
        })(),
        backgroundColor: [
          "#06b58c",
          "#8fabdd",
          "#fed966",
          "#f08725",
          "#f55f4b",
        ],
        borderColor: ["#06b58c", "#8fabdd", "#fed966", "#f08725", "#f55f4b"],
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

            const fivePercent = (5 * (department?.users?.length || 1)) / 100;

            return data[index] > fivePercent;
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

  const ethnicityPieOptions = {
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

  const ageGroupPieData = {
    labels: ["<18 years", "18-25 years", "26-40 years", "41-55 years", "55+"],
    datasets: [
      {
        label: "High Risk Profession",
        data: (function () {
          let data = [0, 0, 0, 0, 0];

          if (department) {
            const { users } = department;

            users.map((user) => {
              const { age } = user;

              if (age < 18) data[0]++;
              else if (age >= 18 && age < 26) data[1]++;
              else if (age >= 26 && age < 41) data[2]++;
              else if (age >= 41 && age < 56) data[3]++;
              else data[4]++;
            });

            data = data.map(
              (count) => +((count * 100) / users.length).toFixed(1)
            );
          }

          return data;
        })(),
        backgroundColor: [
          "#06b58c",
          "#8fabdd",
          "#fed966",
          "#f08725",
          "#f55f4b",
        ],
        borderColor: ["#06b58c", "#8fabdd", "#fed966", "#f08725", "#f55f4b"],
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

            const fivePercent = (5 * (department?.users?.length || 1)) / 100;

            return data[index] > fivePercent;
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

  const ageGroupPieOptions = {
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

  return (
    department && (
      <Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
        <LeftSidebar />

        <Stack sx={{ ...middle }}>
          <Stack sx={{ ...middleWindow }}>
            <Typography
              variant="h3"
              component="div"
              fontWeight="700"
              textTransform="capitalize"
            >
              {department.name}
            </Typography>

            <Stack sx={{ ...fixedWindow }}>
              <Stack direction={{ sm: "column", lg: "row" }} mt={3} gap={2}>
                <Stack gap={2} flex={1}>
                  <Stack direction="row" alignItems="center">
                    <Typography
                      component="div"
                      sx={{
                        fontSize: { xs: "1.8em", lg: "2em" },
                        fontWeight: "500",
                        mr: 2,
                      }}
                    >
                      Department Status
                    </Typography>

                    <GraphInfo
                      props={{
                        title:
                          "Recognize the Age groups where burnout is having the most impact.",
                      }}
                    />
                  </Stack>

                  <Paper
                    sx={{
                      ...graphCanvas,
                      p: 1,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Box height="2.5in">
                      <PieChart
                        props={{
                          chartData: DepartmentStatusPieData,
                          options: DepartmentStatusPieOptions,
                        }}
                      />
                    </Box>

                    <Stack direction="row" gap={2} alignSelf="center">
                      <Box>
                        <Legend props={{ title: "Safe", color: "#06b58c" }} />
                        <Legend props={{ title: "Low", color: "#8fabdd" }} />
                        <Legend props={{ title: "Medium", color: "#fed966" }} />
                      </Box>

                      <Box>
                        <Legend props={{ title: "High", color: "#f08725" }} />
                        <Legend props={{ title: "Danger", color: "#f55f4b" }} />
                      </Box>
                    </Stack>
                  </Paper>
                </Stack>

                <TrendGraph props={{ averageBurnout }} />
              </Stack>

              <Stack gap={3}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="row" alignItems="end" gap="0.5rem">
                    <Typography
                      component="div"
                      sx={{
                        fontSize: { xs: "1.8em", lg: "2em" },
                        fontWeight: "500",
                        mr: 2,
                      }}
                    >
                      Burnout Indicators
                    </Typography>

                    <GraphInfo
                      props={{
                        title:
                          "Understand the root-cause of the current burnout in your organization.",
                      }}
                    />
                  </Stack>
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
                <Stack direction="row" alignItems="center">
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

                  <GraphInfo
                    props={{
                      title:
                        "Recognize the occupations where burnout is having the most impact.",
                    }}
                  />
                </Stack>

                <Paper
                  sx={{
                    ...graphCanvas,
                    p: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
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

                  <Stack direction="row" gap={2} alignSelf="center">
                    <Box>
                      <Legend props={{ title: "Nurses", color: "#06b58c" }} />
                      <Legend props={{ title: "Students", color: "#8fabdd" }} />
                      <Legend props={{ title: "Staff", color: "#fed966" }} />
                    </Box>

                    <Box>
                      <Legend props={{ title: "IT", color: "#f08725" }} />
                      <Legend props={{ title: "Doctors", color: "#f55f4b" }} />
                    </Box>
                  </Stack>
                </Paper>
              </Stack>

              <Stack gap={3}>
                <Stack direction="row" alignItems="center">
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

                  <GraphInfo
                    props={{
                      title:
                        "Recognize the gender groups where burnout is having the most impact.",
                    }}
                  />
                </Stack>

                <Paper
                  sx={{
                    ...graphCanvas,
                    p: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
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

                  <Stack direction="row" gap={2} alignSelf="center">
                    <Box>
                      <Legend props={{ title: "Male", color: "#06b58c" }} />
                      <Legend props={{ title: "Female", color: "#8fabdd" }} />
                      <Legend
                        props={{
                          title: "Transgender",
                          color: "#fed966",
                        }}
                      />
                    </Box>

                    <Box>
                      <Legend
                        props={{ title: "Non-binary", color: "#f08725" }}
                      />
                      <Legend props={{ title: "Other", color: "#f55f4b" }} />
                    </Box>
                  </Stack>
                </Paper>
              </Stack>

              <Stack gap={3}>
                <Stack direction="row" alignItems="center">
                  <Typography
                    component="div"
                    sx={{
                      fontSize: { xs: "1.8em", lg: "2em" },
                      fontWeight: "500",
                      mr: 2,
                    }}
                  >
                    Ethnicity
                  </Typography>
                  <GraphInfo
                    props={{
                      title:
                        "Recognize the Age groups where burnout is having the most impact.",
                    }}
                  />
                </Stack>

                <Paper
                  sx={{
                    ...graphCanvas,
                    p: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Box height="2.5in">
                    <PieChart
                      props={{
                        chartData: ethnicityPieData,
                        options: ethnicityPieOptions,
                      }}
                    />
                  </Box>

                  <Stack direction="row" gap={2} alignSelf="center">
                    <Box>
                      <Legend
                        props={{ title: "American Native", color: "#06b58c" }}
                      />
                      <Legend props={{ title: "Asian", color: "#8fabdd" }} />
                      <Legend props={{ title: "White", color: "#fed966" }} />
                    </Box>

                    <Box>
                      <Legend props={{ title: "Coloured", color: "#f08725" }} />
                      <Legend props={{ title: "Other", color: "#f55f4b" }} />
                    </Box>
                  </Stack>
                </Paper>
              </Stack>

              <Stack gap={3}>
                <Stack direction="row" alignItems="center">
                  <Typography
                    component="div"
                    sx={{
                      fontSize: { xs: "1.8em", lg: "2em" },
                      fontWeight: "500",
                      mr: 2,
                    }}
                  >
                    Age Groups
                  </Typography>
                  <GraphInfo
                    props={{
                      title:
                        "Recognize the Age groups where burnout is having the most impact.",
                    }}
                  />
                </Stack>

                <Paper
                  sx={{
                    ...graphCanvas,
                    p: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Box height="2.5in">
                    <PieChart
                      props={{
                        chartData: ageGroupPieData,
                        options: ageGroupPieOptions,
                      }}
                    />
                  </Box>
                  <Stack direction="row" gap={2} alignSelf="center">
                    <Box>
                      <Legend
                        props={{ title: "<18 years", color: "#06b58c" }}
                      />
                      <Legend
                        props={{ title: "18-25 years", color: "#8fabdd" }}
                      />
                      <Legend props={{ title: "26-40", color: "#fed966" }} />
                    </Box>

                    <Box>
                      <Legend
                        props={{ title: "41-55 years", color: "#f08725" }}
                      />
                      <Legend
                        props={{ title: "55+ years", color: "#f55f4b" }}
                      />
                    </Box>
                  </Stack>
                </Paper>
              </Stack>

              <Box sx={{ height: 5 }}></Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    )
  );
}

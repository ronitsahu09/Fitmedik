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
import { GraphInfo, Legend } from "../Styles_&_Components/Components";
import HealthTracker from "../Graphs/Health_Tracker/HealthTracker";
import PieChart from "../Graphs/PieChart/PieChart";

import { useSelector } from "react-redux";

export default function Analytics({ props }) {
  const { appHeight } = props;

  const { organizationInfo } = useSelector((state) => state.organization);

  const departments = organizationInfo?.departments;

  const users = organizationInfo?.users;

  const EmployeePieData = {
    labels: ["doctors", "nurses", "it", "students", "staff"],
    datasets: [
      {
        label: "High Risk Profession",
        data: (function () {
          let data = [0, 0, 0, 0, 0];
          let totalUsers = 0;

          if (users) {
            users.map((user) => {
              const { profession, burnout } = user;
              const len = burnout.length;

              if (burnout[len - 1] < 4) return null;

              totalUsers++;

              switch (profession) {
                case "doctor":
                  data[0]++;
                  break;
                case "nurse":
                  data[1]++;
                  break;
                case "it":
                  data[2]++;
                  break;
                case "student":
                  data[3]++;
                  break;
                case "staff":
                  data[4]++;
                  break;
                default:
              }

              return null;
            });
          }

          data = data.map((count) => +((count * 100) / totalUsers).toFixed(1));
          return data;
        })(),
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

            const fivePercent = (5 * (users?.length || 1)) / 100;

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

  const genderPieData = {
    labels: ["Male", "Female", "Transgender", "Non-Binary", "Other"],
    datasets: [
      {
        label: "Gender Diversity",
        data: (function () {
          let data = [0, 0, 0, 0, 0];
          let totalUsers = 0;

          if (users) {
            users.map((user) => {
              const len = user.burnout.length;

              if (user.burnout[len - 1] < 4) return null;

              totalUsers++;

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
                default:
              }

              return null;
            });

            data = data.map(
              (count) => +((100 * count) / totalUsers).toFixed(1)
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
            const fivePercent = (5 * (users?.length || 1)) / 100;

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
        label: "Ethnicity",
        data: (function () {
          let data = [0, 0, 0, 0, 0];
          let totalUsers = 0;

          if (users) {
            users.map((user) => {
              const len = user.burnout.length;

              if (user.burnout[len - 1] < 4) return null;

              totalUsers++;

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
                default:
              }

              return null;
            });

            data = data.map(
              (count) => +((count * 100) / totalUsers).toFixed(1)
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

            const fivePercent = (5 * (users?.length || 1)) / 100;

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
        label: "Age Groups",
        data: (function () {
          let data = [0, 0, 0, 0, 0];
          let totalUsers = 0;

          if (users) {
            users.map((user) => {
              const { age } = user;

              const len = user.burnout.length;

              if (user.burnout[len - 1] < 4) return null;

              totalUsers++;

              if (age < 18) data[0]++;
              else if (age >= 18 && age < 26) data[1]++;
              else if (age >= 26 && age < 41) data[2]++;
              else if (age >= 41 && age < 56) data[3]++;
              else data[4]++;

              return null;
            });

            data = data.map(
              (count) => +((count * 100) / totalUsers).toFixed(1)
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

            const fivePercent = (5 * (users?.length || 1)) / 100;

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
    departments && (
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
                  <Stack direction="row" alignItems="center" gap="0.5rem">
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
                    <GraphInfo
                      props={{
                        title:
                          "Know how each organizational function is affected by burnout",
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
                    p: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                  }}
                >
                  {departments.map((dept, indx) => {
                    const stats = {
                      safe: 0,
                      low: 0,
                      medium: 0,
                      high: 0,
                      danger: 0,
                    };

                    const totalUsers = dept.users.length;

                    dept.users.map((user) => {
                      const { burnout } = user;
                      const size = burnout.length;
                      const score = burnout[size - 1];

                      switch (score) {
                        case 5:
                          stats.danger++;
                          break;
                        case 4:
                          stats.high++;
                          break;
                        case 3:
                          stats.medium++;
                          break;
                        case 2:
                          stats.low++;
                          break;
                        case 1:
                          stats.safe++;
                          break;
                        default:
                      }

                      return null;
                    });

                    stats.safe *= 100 / totalUsers;
                    stats.low *= 100 / totalUsers;
                    stats.medium *= 100 / totalUsers;
                    stats.high *= 100 / totalUsers;
                    stats.danger *= 100 / totalUsers;

                    for (let property in stats) {
                      const num = stats[property].toString();
                      stats[property] = Number(
                        num.slice(0, num.indexOf(".") + 3)
                      );
                    }

                    return (
                      <DepartmentsChart
                        key={indx}
                        props={{
                          name: dept.name,
                          _id: dept._id,
                          stats,
                        }}
                      />
                    );
                  })}
                </Paper>
              </Stack>

              <Stack gap={3}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="row" alignItems="center" gap="0.5rem">
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
                  <HealthTracker
                    props={{
                      data: (function () {
                        const data = {
                          safe: 0,
                          low: 0,
                          medium: 0,
                          high: 0,
                          danger: 0,
                        };

                        let totalUsers = 0;

                        if (users) {
                          users.map((user) => {
                            totalUsers++;
                            const len = user.workingHours.length;
                            const workingHours = user.workingHours[len - 1];

                            if (workingHours <= 9) data.safe++;
                            else if (workingHours > 9 && workingHours <= 11)
                              data.low++;
                            else if (workingHours > 11 && workingHours <= 13)
                              data.medium++;
                            else if (workingHours > 13 && workingHours <= 15)
                              data.high++;
                            else data.danger++;

                            return null;
                          });

                          const percent = 100 / totalUsers;
                          for (let property in data) data[property] *= percent;
                        }

                        return data;
                      })(),
                      title: "Work Life Balance",
                    }}
                  />

                  <HealthTracker
                    props={{
                      data: (function () {
                        const data = {
                          safe: 0,
                          low: 0,
                          medium: 0,
                          high: 0,
                          danger: 0,
                        };

                        let totalUsers = 0;

                        if (users) {
                          users.map((user) => {
                            totalUsers++;
                            const len = user.dailyStepCount.length;
                            const dailyStepCount = user.dailyStepCount[len - 1];

                            if (dailyStepCount < 10000) data.safe++;
                            else if (
                              dailyStepCount >= 10000 &&
                              dailyStepCount <= 12000
                            )
                              data.low++;
                            else if (
                              dailyStepCount > 12000 &&
                              dailyStepCount <= 15000
                            )
                              data.medium++;
                            else if (
                              dailyStepCount > 15000 &&
                              dailyStepCount <= 17000
                            )
                              data.high++;
                            else data.danger++;

                            return null;
                          });

                          const percent = 100 / totalUsers;
                          for (let property in data) data[property] *= percent;
                        }

                        return data;
                      })(),

                      title: "Physical Fatigue",
                    }}
                  />

                  <HealthTracker
                    props={{
                      data: (function () {
                        const data = {
                          safe: 0,
                          low: 0,
                          medium: 0,
                          high: 0,
                          danger: 0,
                        };

                        let totalUsers = 0;

                        if (users) {
                          users.map((user) => {
                            totalUsers++;
                            const len = user.mood.length;
                            const { moodType } = user.mood[len - 1];

                            switch (moodType) {
                              case "angry":
                                data.danger++;
                                break;
                              case "fear":
                                data.high++;
                                break;
                              case "sad":
                              case "disgust":
                                data.medium++;
                                break;
                              case "neutral":
                                data.low++;
                                break;
                              case "calm":
                              case "happy":
                                data.safe++;
                                break;
                              default:
                            }

                            return null;
                          });

                          const percent = 100 / totalUsers;
                          for (let property in data) data[property] *= percent;
                        }

                        return data;
                      })(),
                      title: "Mood",
                    }}
                  />

                  <HealthTracker
                    props={{
                      data: (function () {
                        const data = {
                          safe: 0,
                          low: 0,
                          medium: 0,
                          high: 0,
                          danger: 0,
                        };

                        let totalUsers = 0;

                        if (users) {
                          users.map((user) => {
                            totalUsers++;
                            const len = user.sleepHours.length;
                            const sleepHours = user.sleepHours[len - 1];

                            if (sleepHours > 8) data.safe++;
                            else if (sleepHours <= 8 && sleepHours >= 6)
                              data.low++;
                            else if (sleepHours < 6 && sleepHours >= 5)
                              data.medium++;
                            else if (sleepHours < 5 && sleepHours >= 4)
                              data.high++;
                            else data.danger++;

                            return null;
                          });

                          const percent = 100 / totalUsers;
                          for (let property in data) data[property] *= percent;
                        }

                        return data;
                      })(),
                      title: "Sleep Quality",
                    }}
                  />

                  <HealthTracker
                    props={{
                      data: (function () {
                        const data = {
                          safe: 0,
                          low: 0,
                          medium: 0,
                          high: 0,
                          danger: 0,
                        };

                        let totalUsers = 0;

                        if (users) {
                          users.map((user) => {
                            totalUsers++;
                            const len = user.interaction.length;
                            const { workingAlone } = user.interaction[len - 1];

                            if (workingAlone < 2) data.safe++;
                            else if (workingAlone >= 2 && workingAlone < 3)
                              data.low++;
                            else if (workingAlone >= 3 && workingAlone < 4)
                              data.medium++;
                            else if (workingAlone >= 4 && workingAlone < 5)
                              data.high++;
                            else data.danger++;

                            return null;
                          });

                          const percent = 100 / totalUsers;
                          for (let property in data) data[property] *= percent;
                        }

                        return data;
                      })(),
                      title: "Interaction Index",
                    }}
                  />
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
                        props={{ title: "Transgender", color: "#fed966" }}
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

        <RightSidebar />
      </Stack>
    )
  );
}

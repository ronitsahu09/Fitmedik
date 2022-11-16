import { Box, Paper, Stack, Typography } from "@mui/material";
import HarveyBalls from "../Graphs/HarveyBalls/HarveyBalls";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import PieChart from "../Graphs/PieChart/PieChart";
import {
  CustomTabs,
  GraphInfo,
  Legend,
} from "../Styles_&_Components/Components";
import {
  AppWrapper,
  fixedWindow,
  graphCanvas,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";
import { quesContainer, question } from "./Styles";
import { info, values } from "./Styles";

const data1 = {
  labels: ["Low", "Medium", "High"],
  datasets: [
    {
      label: "MBI", //Change this label
      data: [22, 28, 50],
      backgroundColor: ["#06b58c", "#fed966", "#f55f4b"],
      borderColor: ["#06b58c", "#fed966", "#f55f4b"],
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

const data2 = {
  labels: ["Low", "Medium", "High"],
  datasets: [
    {
      label: "MBI", //Change this label
      data: [35, 30, 35],
      backgroundColor: ["#06b58c", "#fed966", "#f55f4b"],
      borderColor: ["#06b58c", "#fed966", "#f55f4b"],
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

const data3 = {
  labels: ["Low", "Medium", "High"],
  datasets: [
    {
      label: "MBI", //Change this label
      data: [41, 19, 40],
      backgroundColor: ["#06b58c", "#fed966", "#f55f4b"],
      borderColor: ["#06b58c", "#fed966", "#f55f4b"],
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

const options = {
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

export default function Survey({ props }) {
  const { appHeight } = props;

  const questions = [
    "I feel emotionally exhausted because of my work",
    "I feel worn out at the end of a working day",
    "I feel tired as soon as I get up in the morning and see a new working day stretched out in front of me",
    "I can easily understand the actions of my colleagues/supervisors",
    "I get the feeling that I treat some clients/colleagues impersonally, as if they were objects",
    "Working with people the whole day is stressful for me",
    "I deal with other people’s problems successfully",
    "I feel burned out because of my work",
    "I feel that I influence other people positively through my work",
    "I have become more callous to people since I have started doing this job",
    "I’m afraid that my work makes me emotionally harder",
    "I feel full of energy",
    "I feel frustrated by my work",
    " get the feeling that I work too hard",
    "I’m not really interested in what is going on with many of my colleagues",
    "Being in direct contact with people at work is too stressful",
    "I find it easy to build a relaxed atmosphere in my working environment",
    "I feel stimulated when I been working closely with my colleagues",
    "I have achieved many rewarding objectives in my work",
    "I feel as if I’m at my wits‘ end",
    "In my work I am very relaxed when dealing with emotional problems",
    "I have the feeling that my colleagues blame me for some of their problems",
  ];

  return (
    <Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Stack sx={{ ...middleWindow }}>
          <Typography variant="h3" component="div" fontWeight="700">
            MBI Results
          </Typography>

          <Stack sx={{ ...fixedWindow }}>
            <Stack gap={3} mt={3}>
              <Stack direction="row" alignItems="center" gap="0.5rem">
                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: "1.8em", lg: "2em" },
                    fontWeight: "500",
                    mr: 2,
                  }}
                >
                  Identified Burnout cases
                </Typography>

                <GraphInfo
                  props={{
                    title:
                      "Diagnosed burnout cases from the gold standard practice for burnout identification.",
                  }}
                />
              </Stack>

              <Paper sx={{ ...graphCanvas, ...info, p: "1.5rem" }}>
                <Stack gap={1} alignItems="center">
                  <Typography
                    sx={{
                      color: "#999999",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Low Degree
                  </Typography>

                  <Typography
                    variant="div"
                    component="div"
                    sx={{ ...values, color: "#06b58c" }}
                  >
                    800
                  </Typography>
                </Stack>

                <Stack gap={1} alignItems="center">
                  <Typography
                    sx={{
                      color: "#999999",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Moderately Degree
                  </Typography>

                  <Typography
                    variant="div"
                    component="div"
                    sx={{ ...values, color: "#fed966" }}
                  >
                    800
                  </Typography>
                </Stack>

                <Stack gap={1} alignItems="center">
                  <Typography
                    sx={{
                      color: "#999999",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    High Degree
                  </Typography>

                  <Typography
                    variant="div"
                    component="div"
                    sx={{ ...values, color: "#f55f4b" }}
                  >
                    800
                  </Typography>
                </Stack>
              </Paper>

              <Stack direction="row" justifyContent="space-between">
                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: "1.8em", lg: "2em" },
                    fontWeight: "500",
                    mr: 2,
                  }}
                >
                  Status
                </Typography>

                <Stack direction="row" gap={2}>
                  <Legend props={{ title: "Low Degree", color: "#06b58c" }} />
                  <Legend
                    props={{ title: "Moderately Degree", color: "#fed966" }}
                  />
                  <Legend props={{ title: "High Degree", color: "#f55f4b" }} />
                </Stack>
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={2}>
                <Paper
                  sx={{
                    ...graphCanvas,
                    flex: 1,
                  }}
                >
                  <Stack gap={1.5} justifyContent="center" alignItems="center">
                    <Typography
                      sx={{
                        fontSize: { xs: "1.3em", lg: "1.5em" },
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      Occupational exhaustion
                    </Typography>
                    <Box sx={{ height: "2in" }}>
                      <PieChart props={{ chartData: data1, options }} />
                    </Box>
                  </Stack>
                </Paper>

                <Paper
                  sx={{
                    ...graphCanvas,
                    flex: 1,
                  }}
                >
                  <Stack gap={1.5} justifyContent="center" alignItems="center">
                    <Typography
                      sx={{
                        fontSize: { xs: "1.3em", lg: "1.5em" },
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      Loss of Empathy
                    </Typography>
                    <Box sx={{ height: "2in" }}>
                      <PieChart props={{ chartData: data2, options }} />
                    </Box>
                  </Stack>
                </Paper>

                <Paper
                  sx={{
                    ...graphCanvas,
                    flex: 1,
                  }}
                >
                  <Stack gap={1.5} justifyContent="center" alignItems="center">
                    <Typography
                      sx={{
                        fontSize: { xs: "1.3em", lg: "1.5em" },
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      Accomplishment assesment
                    </Typography>
                    <Box sx={{ height: "2in" }}>
                      <PieChart props={{ chartData: data3, options }} />
                    </Box>
                  </Stack>
                </Paper>
              </Stack>

              <Box m="auto">
                <CustomTabs />
              </Box>

              <Typography
                component="div"
                sx={{
                  fontSize: { xs: "1.8em", lg: "2em" },
                  fontWeight: "500",
                  mr: 2,
                }}
              >
                Survey Results
              </Typography>

              <Paper sx={{ ...graphCanvas, ...question }}>
                <Stack direction="row" justifyContent="space-between" mb={1}>
                  <Typography variant="h4" component="div" flex={0.9}>
                    Questions
                  </Typography>

                  <Stack direction="row" gap={1}>
                    <Typography
                      variant="h6"
                      width="1cm"
                      textAlign="center"
                      component="div"
                    >
                      0
                    </Typography>
                    <Typography
                      variant="h6"
                      width="1cm"
                      textAlign="center"
                      component="div"
                    >
                      1
                    </Typography>
                    <Typography
                      variant="h6"
                      width="1cm"
                      textAlign="center"
                      component="div"
                    >
                      2
                    </Typography>
                    <Typography
                      variant="h6"
                      width="1cm"
                      textAlign="center"
                      component="div"
                    >
                      3
                    </Typography>
                    <Typography
                      variant="h6"
                      width="1cm"
                      textAlign="center"
                      component="div"
                    >
                      4
                    </Typography>
                    <Typography
                      variant="h6"
                      width="1cm"
                      textAlign="center"
                      component="div"
                    >
                      5
                    </Typography>
                    <Typography
                      variant="h6"
                      width="1cm"
                      textAlign="center"
                      component="div"
                    >
                      6
                    </Typography>
                  </Stack>
                </Stack>
                {questions.map((ques, index) => {
                  return (
                    <Box sx={{ ...quesContainer }} key={index}>
                      <Typography variant="h6" component="div" flex={0.9}>
                        {ques}
                      </Typography>
                      <Stack direction="row" gap={1}>
                        <HarveyBalls />
                        <HarveyBalls />
                        <HarveyBalls />
                        <HarveyBalls />
                        <HarveyBalls />
                        <HarveyBalls />
                        <HarveyBalls />
                      </Stack>
                    </Box>
                  );
                })}
              </Paper>
            </Stack>

            <Box sx={{ height: 5 }}></Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

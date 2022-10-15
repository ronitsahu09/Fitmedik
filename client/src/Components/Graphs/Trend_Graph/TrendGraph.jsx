import { IconButton, Paper, Stack, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

import { Line } from "react-chartjs-2";
import { RegularSelectMenu } from "../../Styles_&_Components/Components";
import { graphCanvas } from "../../Styles_&_Components/Styles";
import { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const monthMap = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export default function TrendGraph({ props }) {
  const { averageBurnout } = props;

  const [currMonth, setCurrMonth] = useState("");
  const [currEndDate, setCurrEndDate] = useState(-1);
  const range = 6;

  const handlePreviousClick = () => {
    setCurrEndDate((prevState) => {
      const newState = prevState - range;

      return newState - range > -1 ? newState : range;
    });
  };

  const handleForwardClick = () => {
    setCurrEndDate((prevState) => {
      const newState = prevState + range;
      const { avgBurnoutScores } = averageBurnout.filter(
        (item) => item.month === currMonth
      )[0];

      return newState <= avgBurnoutScores.length
        ? newState
        : avgBurnoutScores.length;
    });
  };

  useEffect(() => {
    setCurrMonth(() => {
      const len = averageBurnout?.length;
      if (!len) return "";
      return averageBurnout[len - 1].month;
    });
  }, [averageBurnout]);

  useEffect(() => {
    if (currMonth === "") return;

    setCurrEndDate(() => {
      const target = averageBurnout.filter(
        (item) => item.month === currMonth
      )[0];

      return target.avgBurnoutScores.length;
    });
  }, [currMonth]);

  const getLabels = () => {
    const label = [];

    if (currEndDate > -1) {
      let end = currEndDate;
      for (let i = 0; i < range && end > -1; i++, end--) {
        label.push(`${monthMap[currMonth]} ${end}`);
      }
    }

    label.reverse();
    return label;
  };

  const getData = () => {
    const data = [];

    if (currMonth !== "" && currEndDate > -1) {
      const { avgBurnoutScores } = averageBurnout.filter(
        (item) => item.month === currMonth
      )[0];

      for (let start = currEndDate - range; start < currEndDate; start++)
        data.push(avgBurnoutScores[start]);
    }

    return data;
  };

  const chartData = {
    labels: getLabels(),
    datasets: [
      {
        label: "Burnout Trend",
        data: getData(),
        fill: true,
        backgroundColor: "#A9CCE3",
        borderColor: "#7FB3D5",
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      doughnutLabelsLine: false,
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
          stepSize: 1,
        },
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  return (
    <Stack gap={2} width="100%">
      {averageBurnout && (
        <>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              component="div"
              sx={{
                fontSize: { xs: "1.8em", lg: "2em" },
                fontWeight: "500",
                mr: 2,
              }}
            >
              Average Burnout
            </Typography>
            <Stack direction="row" gap={2}>
              <RegularSelectMenu
                props={{
                  label: "averageBurnout-months",
                  title: "Monthly",
                  options: averageBurnout.map((item) => {
                    return { value: item.month, legend: monthMap[item.month] };
                  }),
                  currMonth,
                  setCurrMonth,
                }}
              />

              <Stack direction="row" alignItems="center">
                <IconButton onClick={handlePreviousClick}>
                  <ArrowBackIos sx={{ fontSize: 16 }} />
                </IconButton>
                {currMonth !== "" && (
                  <Typography variant="div" fontSize={13}>
                    {monthMap[currMonth].slice(0, 3)} {currEndDate - range + 1}{" "}
                    - {monthMap[currMonth].slice(0, 3)} {currEndDate}
                  </Typography>
                )}

                <IconButton onClick={handleForwardClick}>
                  <ArrowForwardIos sx={{ fontSize: 16 }} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>

          <Paper
            sx={{
              ...graphCanvas,
              width: "100%",
            }}
          >
            <Line data={chartData} options={options} />
          </Paper>
        </>
      )}
    </Stack>
  );
}

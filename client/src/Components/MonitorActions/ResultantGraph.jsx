import { Box, Stack } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ResultantGraph({ props }) {
  const { view, actionType, duration } = props;

  const target = useSelector((state) => {
    if (view === "hospital") return state.organization.organizationInfo?.users;

    const dept = state.organization.organizationInfo?.departments.filter(
      (dept) => dept._id === view
    )[0]?.users;

    return dept;
  });

  const [config, setConfig] = useState({ labels: [], data: [] });

  useEffect(() => {
    const start = new Date(duration.startDate);
    const end = new Date(duration.endDate);

    const labels = [];
    const data = [];

    while (start.getTime() <= end.getTime()) {
      let count = 0;
      let avg = target.reduce((prev, user) => {
        const { health_data: healthData } = user;

        healthData = healthData.filter(
          (record) => record.date === start.toLocaleDateString()
        );

        let burnout;

        if (actionType === "average-burnout-trend") {
          burnout = healthData[0]?.burnout || 0;
        } else if (actionType === "work-life-balance") {
          const workingHours = healthData[0]?.working_hours || 0;
          let score;

          if (workingHours <= 9) score = 1;
          else if (workingHours > 9 && workingHours <= 11) score = 2;
          else if (workingHours > 11 && workingHours <= 13) score = 3;
          else if (workingHours > 13 && workingHours <= 15) score = 4;
          else score = 5;

          burnout = score;
        } else if (actionType === "physical-fatigue") {
          const dailyStepCount = burnout[0]?.daily_step_count || 0;
          let score;

          if (dailyStepCount < 10000) score = 1;
          else if (dailyStepCount >= 10000 && dailyStepCount <= 12000)
            score = 2;
          else if (dailyStepCount > 12000 && dailyStepCount <= 15000) score = 3;
          else if (dailyStepCount > 15000 && dailyStepCount <= 17000) score = 4;
          else score = 5;

          burnout = score;
        }
        //  else if (actionType === "mood") {

        //   const mood = burnout[0]?.

        // }
        else if (actionType === "sleep-quality") {
          const sleepHours = healthData[0]?.sleep_hours;
          let score;

          if (sleepHours > 8) score = 1;
          else if (sleepHours <= 8 && sleepHours >= 6) score = 2;
          else if (sleepHours < 6 && sleepHours >= 5) score = 3;
          else if (sleepHours < 5 && sleepHours >= 4) score = 4;
          else score = 5;

          burnout = score;
        } else if (actionType === "team-support") {
          const workingAlone = healthData[0]?.interaction?.working_alone;
          let score;

          if (workingAlone < 2) score = 1;
          else if (workingAlone >= 2 && workingAlone < 3) score = 2;
          else if (workingAlone >= 3 && workingAlone < 4) score = 3;
          else if (workingAlone >= 4 && workingAlone < 5) score = 4;
          else score = 5;

          burnout = score;
        }

        if (burnout > 0) count++;

        return prev + burnout;
      }, 0);

      avg = parseFloat((avg / count).toFixed(3));

      data.push(avg);
      labels.push(start.toLocaleDateString());
      start.setDate(start.getDate() + 1);
    }

    setConfig({ labels, data });
  }, [target]);

  const chartData = {
    labels: config.labels,
    datasets: [
      {
        label: "Result",
        data: config.data,
        backgroundColor: "rgb(143, 171, 221, .5)",
        borderColor: "hsl(218, 53%, 61%)",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
      doughnutLabelsLine: false,
    },

    elements: {
      point: {
        radius: 5,
      },
    },

    scales: {
      x: {
        ticks: {
          color: "black",
          display: false,
        },

        grid: {
          display: false,
        },
      },
      y: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
        },
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  return (
    <Stack mt={2}>
      <Box width="100%">
        <Line data={chartData} options={options} />
      </Box>
    </Stack>
  );
}

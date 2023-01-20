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
        const { healthData } = user;

        healthData = healthData.filter(
          (record) => record.date === start.toLocaleDateString()
        );

        const burnout = healthData[0]?.burnout || 0;
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

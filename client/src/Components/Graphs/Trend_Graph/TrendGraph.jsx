import { Box } from "@mui/material";
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

import { Line } from "react-chartjs-2";

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

export default function TrendGraph() {
  const chartData = {
    labels: ["Apr 5", "Apr 10", "Apr 15", "Apr 20", "Apr 25", "Apr 30"],
    datasets: [
      {
        label: "Burnout Trend",
        data: [23, 32, 19, 99, 11, 90],
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
          stepSize: 30,
        },
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

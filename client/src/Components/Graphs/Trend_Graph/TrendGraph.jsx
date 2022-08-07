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
        borderColor: "#87cff1",
        backgroundColor: "#c3ede4",
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
      pieChartLabels: false,
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
      },
      y: {
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

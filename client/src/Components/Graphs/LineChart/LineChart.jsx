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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = [
  [
    {
      label: "Radiology",
      data: [29, 20, 10, 5, 0, 0],
      borderColor: "deeppink",
      backgroundColor: "pink",
    },
    {
      label: "Cardiology",
      data: [9, 3, 10, 5, 8, 0],
      borderColor: "deepskyblue",
      backgroundColor: "skyblue",
    },
    {
      label: "Paediatrics",
      data: [19, 10, 10, 15, 0, 29],
      borderColor: "coral",
      backgroundColor: "#FFCBA4",
    },
  ],

  [
    {
      label: "Stress",
      data: [4, 1, 5, 20, 11, 0],
      borderColor: "deeppink",
      backgroundColor: "pink",
    },
    {
      label: "Physical Fatigue",
      data: [9, 3, 10, 5, 8, 0],
      borderColor: "deepskyblue",
      backgroundColor: "skyblue",
    },
    {
      label: "Anxiety",
      data: [8, 10, 1, 15, 18, 29],
      borderColor: "coral",
      backgroundColor: "#FFCBA4",
    },
  ],
];

export default function LineChart({ props }) {
  const { filters } = props;
  
  const chartData = {
    labels: ["April 5", "April 6", "April 7", "April 8", "April 9", "April 10"],
    datasets: data[filters],
  };

  const options = {
    reponsive: true,
    maintainAspectRatio: false,
    plugins: {
      doughnutLabelsLine: false,
    },
    scales: {
      x: { ticks: { color: "black" } },
      y: { ticks: { color: "black" } },
    },
  };

  return <Line data={chartData} options={options} />;
}

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HalfPiechart() {
  const chartData = {
    labels: ["Safe", "Low", "Medium", "High", "Danger"],
    datasets: [
      {
        label: "Burnout Risk",
        data: [10, 20, 30, 40, 50],
        backgroundColor: [
          "hsl(7, 89%, 63%)",
          "hsl(29, 87%, 54%)",
          "hsl(45, 99%, 70%)",
          "hsl(218, 53%, 71%)",
          "hsl(166, 94%, 37%)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    rotation: -90,
    cutout: "80%",
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
}

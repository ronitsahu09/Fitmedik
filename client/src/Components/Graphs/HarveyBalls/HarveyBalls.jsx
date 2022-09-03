import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HarveyBalls() {
  const chartData = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "Harvey Balls",
        data: [20, 10],
        backgroundColor: ["#34495E", "transparent"],
        borderColor: ["#34495E", "#34495E"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
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
    <Box height="1cm" width="1cm" position="relative">
      <Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
        <Pie data={chartData} options={options} />
      </Box>
    </Box>
  );
}

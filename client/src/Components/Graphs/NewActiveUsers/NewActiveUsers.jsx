import { Box, Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function NewActiveUsers() {
  const chartData = {
    labels: ["Active Users", "Inactive Users"],
    datasets: [
      {
        label: "User Status",
        data: [36, 20],
        backgroundColor: ["#06b58c", "hsl(0, 0%, 15%)"],
        hoverOffset: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "75%",
    maintainAspectRatio: false,
    borderRadius: 5,
    onHover: function (e) {
      e.native.target.style.cursor = "pointer";
    },
    plugins: {
      legend: {
        display: false,
      },
      doughnutLabelsLine: false,
      tooltip: {
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  return (
    <Stack height="100%">
      <Box position="relative" flex={1}>
        <Box
          sx={{ position: "absolute", top: 4, bottom: 4, left: 4, right: 4 }}
        >
          <Doughnut data={chartData} options={options} />
        </Box>
      </Box>
      <Typography variant="h6" component="div" textAlign="center">
        Users
      </Typography>
    </Stack>
  );
}

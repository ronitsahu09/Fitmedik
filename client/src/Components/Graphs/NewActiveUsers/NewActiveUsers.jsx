import { Box, Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { rectangle } from "./Styles";

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
    cutout: "80%",
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
    <Stack direction="row" height="100%">
      <Box position="relative" flex={1}>
        <Box
          sx={{ position: "absolute", top: 4, bottom: 4, left: 4, right: 4 }}
        >
          <Doughnut data={chartData} options={options} />
        </Box>
      </Box>

      <Stack gap={2} alignSelf="center">
        <Stack direction="row" alignItems="center" gap={2}>
          <Box sx={{ ...rectangle, bgcolor: "#06b58c" }}></Box>
          <Stack>
            <Typography
              sx={{
                color: "#06b58c",
                fontWeight: "500",
                fontSize: "1.1rem",
              }}
            >
              Active Users
            </Typography>
            <Typography fontSize="0.8rem" fontWeight="bold">
              23
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2}>
          <Box sx={{ ...rectangle, bgcolor: "hsl(0, 0%, 15%)" }}></Box>
          <Stack>
            <Typography
              sx={{
                color: "hsl(0, 0%, 15%)",
                fontWeight: "500",
                fontSize: "1.1rem",
              }}
            >
              Total Users
            </Typography>
            <Typography fontSize="0.8rem" fontWeight="bold">
              23
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
import { Box, Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HealthTracker({ props }) {
  let { data, title } = props;

  data = { safe: 10, low: 33, medium: 22, high: 20, danger: 43 };

  const chartData = {
    labels: ["Safe", "Low", "Medium", "High", "Danger"],
    datasets: [
      {
        label: title,
        data: Object.entries(data).map((property) => property[1]),
        backgroundColor: [
          "hsl(7, 89%, 63%)",
          "hsl(29, 87%, 54%)",
          "hsl(45, 99%, 70%)",
          "hsl(218, 53%, 71%)",
          "hsl(166, 94%, 37%)",
        ],
        hoverBackgroundColor: [
          "hsl(7, 89%, 57%)",
          "hsl(29, 87%, 50%)",
          "hsl(45, 99%, 64%)",
          "hsl(218, 53%, 65%)",
          "hsl(166, 94%, 31%)",
        ],
      },
    ],
  };
  const options = {
    responsive: true,
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label} ${context.parsed}%`;
          },
        },
      },
    },
  };

  return (
    <Stack gap={2} alignItems="center">
      <Typography variant="h6" component="div" fontWeight="700">
        {title}
      </Typography>
      <Box width={{ sm: "2in", lg: "2in" }}>
        <Doughnut data={chartData} options={options} />
      </Box>
    </Stack>
  );
}

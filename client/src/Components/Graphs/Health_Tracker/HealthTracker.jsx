import { Box, Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const doughnutLabelsLine = {
  id: "doughnutLabelsLine",
  afterDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;

    chart.data.datasets.forEach((dataset, i) => {
      chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
        const { x, y } = datapoint.tooltipPosition();

        const halfwidth = width / 2;
        const halfheight = height / 2;

        const xLine = x >= halfwidth ? x + 15 : x - 15;
        const yLine = y >= halfheight ? y + 15 : y - 15;
        const extraLine = x >= halfwidth ? 15 : -15;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(xLine, yLine);
        ctx.lineTo(xLine + extraLine, yLine);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.font = "15px sans-serif";
        const textXPosition = x >= halfwidth ? "left" : "right";
        const plusFivePx = x >= halfwidth ? 5 : -5;
        ctx.textAlign = textXPosition;
        ctx.textBaseLine = "middle";
        ctx.fillStyle = "black";
        ctx.fillText(
          dataset.data[index] + "%",
          xLine + extraLine + plusFivePx,
          yLine
        );
      });
    });
  },
};

ChartJS.register(ArcElement, Tooltip, Legend, doughnutLabelsLine);

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
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "80%",
    layout: {
      padding: 20,
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <Stack gap={2} alignItems="center">
      <Typography variant="h6" component="div" fontWeight="700">
        {title}
      </Typography>
      <Box width="100%" height="2in">
        <Doughnut data={chartData} options={options} />
      </Box>
    </Stack>
  );
}

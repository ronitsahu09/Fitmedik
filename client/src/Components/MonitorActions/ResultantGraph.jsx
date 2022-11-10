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

export default function ResultantGraph({ props }) {
  const { chartData, options } = props;

  return (
    <Stack>
      <Box height="30vw" width="100%">
        <Line data={chartData} options={options} />
      </Box>
    </Stack>
  );
}

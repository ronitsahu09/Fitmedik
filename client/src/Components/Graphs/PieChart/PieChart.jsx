import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ props }) {
  const { chartData, options } = props;

  return <Pie data={chartData} plugins={[ChartDataLabels]} options={options} />;
}

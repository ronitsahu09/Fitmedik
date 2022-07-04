import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "../styles/departmentsAtRisk.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DepartmentsAtRisk() {
  const chartData = {
    labels: ["Radiology", "Cardiology", "IPD", "Emergency", "Pediatrics"],
    datasets: [
      {
        label: "Danger",
        data: [20, 30, 40, 60, 15],
        backgroundColor: ["hsl(7, 89%, 63%)"],
        barPercentage: 0.6,
      },
      {
        label: "High",
        data: [30, 40, 10, 10, 45],
        backgroundColor: ["hsl(29, 87%, 54%)"],
        barPercentage: 0.6,
      },
      {
        label: "Medium",
        data: [25, 15, 10, 5, 30],
        backgroundColor: ["hsl(45, 99%, 70%)"],
        barPercentage: 0.6,
      },
      {
        label: "Low",
        data: [12, 10, 20, 15, 5],
        backgroundColor: ["hsl(218, 53%, 71%)"],
        barPercentage: 0.6,
      },
      {
        label: "Safe",
        data: [13, 5, 20, 10, 5],
        backgroundColor: ["hsl(166, 94%, 37%)"],
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label} ${context.raw}%`;
          },
        },
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="dar">
      <div className="title">
        <div className="heading">Departments at Risk</div>
        <div className="legends">
          <div className="safe">Safe</div>
          <div className="low">Low</div>
          <div className="medium">Medium</div>
          <div className="high">High</div>
          <div className="danger">Danger</div>
        </div>
      </div>

      <div className="dataWrapper">
        <div className="canvas">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}

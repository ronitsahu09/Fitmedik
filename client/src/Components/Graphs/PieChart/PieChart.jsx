import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const pieChartLabels = {
}

export default function PieChart() {
  const Profession = {
    Doctors: [8, 20],
    Nurses: [18, 20],
    IT: [11, 20],
    Students: [4, 20],
    Staff: [6, 40],
  };

  const chartData = {
    labels: Object.keys(Profession),
    datasets: [
      {
        label: "High Risk Profession",
        data: Object.entries(Profession).map((property) => {
          const percent = (100 * property[1][0]) / property[1][1];
          return percent;
        }),
        backgroundColor: [
          "hsl(7, 89%, 63%)",
          "hsl(166, 94%, 37%)",
          "hsl(29, 87%, 54%)",
          "hsl(218, 53%, 71%)",
          "hsl(45, 99%, 70%)",
        ],
        borderColor: [
          "hsl(7, 89%, 63%)",
          "hsl(166, 94%, 37%)",
          "hsl(29, 87%, 54%)",
          "hsl(218, 53%, 71%)",
          "hsl(45, 99%, 70%)",
        ],
        hoverOffset: 3,
        borderAlign: "inner",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      doughnutLabelsLine: false,
      tooltip: {
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `${context.label} ${context.parsed}%`;
          },
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
}

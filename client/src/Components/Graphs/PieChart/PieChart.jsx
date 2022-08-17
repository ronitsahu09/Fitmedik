import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const Profession = {
    Doctors: [20, 20],
    Nurses: [6, 20],
    IT: [14, 20],
    Students: [5, 20],
    Staff: [2, 40],
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
        datalabels: {
          anchor: "end",
          color: "white",
          backgroundColor: function (context) {
            return context.dataset.backgroundColor;
          },
          display: function (context) {
            const index = context.dataIndex;
            const {
              dataset: { data },
            } = context;

            return data[index] > 10;
          },
          formatter: function (value) {
            return `${value} %`;
          },
          borderRadius: 25,
          borderWidth: 2,
          borderColor: "white",
          padding: 4,
          font: { weight: "bold" },
        },
        borderAlign: "inner",
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: 20,
    },
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

  return <Pie data={chartData} plugins={[ChartDataLabels]} options={options} />;
}

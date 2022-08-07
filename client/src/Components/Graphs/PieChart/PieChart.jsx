import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const pieChartLabels = {
  id: "pieChartLabels",
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

        if (dataset.data[index] > 0) {
          const xLine = x >= halfwidth ? x + 30 : x - 30;
          const yLine = y >= halfheight ? y + 40 : y - 40;
          const extraLine = x >= halfwidth ? 10 : -10;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(xLine, yLine);
          ctx.lineTo(xLine + extraLine, yLine);
          ctx.strokeStyle = "black";
          ctx.stroke();
          ctx.font = "13px sans-serif";
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
        }
      });
    });
  },
};

ChartJS.register(ArcElement, Tooltip, Legend, pieChartLabels);

export default function PieChart() {
  const Profession = {
    Doctors: [20, 20],
    Nurses: [6, 20],
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

  return <Pie data={chartData} options={options} />;
}

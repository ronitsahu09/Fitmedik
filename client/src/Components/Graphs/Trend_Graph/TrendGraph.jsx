import { Paper } from "@mui/material";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { graphCanvas } from "../../Styles_&_Components/Styles";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

export default function TrendGraph(props) {
	const { labels, data, title } = props.config;

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: "Burnout",
				data: data,
				fill: true,
				backgroundColor: "rgb(143, 171, 221, .5)",
				borderColor: "hsl(218, 53%, 61%)",
			},
		],
	};

	const options = {
		responsive: true,
		interaction: {
			mode: "index",
			intersect: false,
		},
		plugins: {
			legend: {
				display: false,
			},
			doughnutLabelsLine: false,
		},
		scales: {
			x: {
				ticks: {
					color: "black",
					display: false,
				},

				title: {
					display: true,
					text: title,
				},

				grid: {
					display: false,
				},
			},

			y: {
				min: 1,
				max: 5,
				ticks: {
					stepSize: 1,
				},
				grid: {
					drawBorder: false,
				},
			},
		},
	};

	return (
		<Paper
			sx={{
				...graphCanvas,
				flex: 1,
				width: "100%",
			}}
		>
			<Line data={chartData} options={options} />
		</Paper>
	);
}

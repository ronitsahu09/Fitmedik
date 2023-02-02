import { useEffect, useState } from "react";

export default function useFilter(users) {
	const [filter, setFilter] = useState(() => {
		const value = -7;
		const startDate = new Date();
		const endDate = new Date();

		startDate.setDate(startDate.getDate() - 7);
		endDate.setDate(new Date().getDate() - 1);

		return { value, startDate, endDate };
	});

	const [modalOpen, setModalOpen] = useState(false);
	const [config, setConfig] = useState({ labels: [], data: [], title: "" });

	function ChangeHandler(e) {
		const { value } = e.target;

		if (value < 0) {
			setFilter(() => {
				const startDate = new Date();
				const endDate = new Date();

				startDate.setDate(startDate.getDate() + value);
				endDate.setDate(endDate.getDate() - 1);

				return { value, startDate, endDate };
			});
		} else if (value === 0) {
			setFilter((prev) => ({ ...prev, value }));
		}
	}

	useEffect(() => {
		if (users.length === 0) return;
		let data = [];
		let labels = [];

		for (
			let currDate = new Date(filter.startDate.toLocaleDateString());
			currDate.getTime() <= filter.endDate.getTime();

		) {
			let count = 0;
			let avg = users.reduce((prev, user) => {
				let { health_data: healthData } = user;

				healthData = healthData.filter(
					(record) => record.date === currDate.toLocaleDateString()
				);

				const burnout = healthData[0]?.burnout || 0;
				if (burnout > 0) count++;

				return prev + burnout;
			}, 0);

			avg = parseFloat((avg / count).toFixed(3));

			data.push(avg);
			labels.push(currDate.toLocaleDateString());
			currDate.setDate(currDate.getDate() + 1);
		}

		let label;
		switch (filter.value) {
			case -1:
				label = "Yesterday";
				break;
			case -7:
				label = "Last 7 days";
				break;
			case -30:
				label = "Last 30 days";
				break;
			case 0:
				label = `${filter.startDate.toLocaleDateString()} to ${filter.endDate.toLocaleDateString()}`;
				break;
		}

		setConfig({ labels, data: data, title: label });
	}, [filter, users]);

	return {
		filter,
		modalOpen,
		setFilter,
		ChangeHandler,
		setModalOpen,
		config,
	};
}

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function SelectMenu({ props }) {
	const { range, setRange } = props;

	return (
		<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id="averageBurnoutTrendFilter">Filters</InputLabel>
			<Select
				labelId="averageBurnoutTrendFilter"
				id="filters-select"
				value={range}
				onChange={(e) => setRange(e.target.value)}
				label="Filters"
			>
				<MenuItem value={-7}>Last 7 days</MenuItem>
				<MenuItem value={-30}>Last 30 days</MenuItem>
				<MenuItem value={-90}>Last 3 months</MenuItem>
				<MenuItem value={-180}>Last 6 months</MenuItem>
			</Select>
		</FormControl>
	);
}

export default SelectMenu;

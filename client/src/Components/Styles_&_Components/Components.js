import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	IconButton,
	InputAdornment,
	Menu,
	Stack,
	Tab,
	Tabs,
	TextField,
	Tooltip,
	Typography,
	Zoom,
} from "@mui/material";
import tempLogo from "../../Assets/Images/Logo_1.svg";
import { dot, PieDot } from "./Styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
	AccountBalance,
	Archive,
	ArrowForward,
	Delete,
	InfoOutlined,
	MoreVert,
	Search,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Legend({ props }) {
	const { title, color } = props;

	return (
		<Stack direction="row" alignItems="center" gap={1}>
			<Box sx={{ ...dot, bgcolor: color }}></Box>
			<Typography
				component="div"
				sx={{
					color,
					fontSize: { xs: "0.7rem", lg: "1rem" },
					fontWeight: "500",
				}}
			>
				{title}
			</Typography>
		</Stack>
	);
}

export function PieLegend({ props }) {
	const { title, color } = props;

	return (
		<Stack direction="row" alignItems="center" gap={1}>
			<Box sx={{ ...PieDot, bgcolor: color }}></Box>
			<Typography component="div" fontSize="1.1rem">
				{title}
			</Typography>
		</Stack>
	);
}

export function CustomSelect({ props }) {
	const { filters, handleChange } = props;

	return (
		<FormControl sx={{ m: 1, minWidth: 150 }}>
			<InputLabel htmlFor="savings-filter">Filters</InputLabel>
			<Select
				defaultValue={filters}
				onChange={handleChange}
				id="savings-filter"
				label="Fitlers"
			>
				<ListSubheader
					sx={{ color: "black", fontWeight: "500", fontSize: "1.1rem" }}
				>
					Departments
				</ListSubheader>
				<MenuItem value={0} sx={{ fontSize: "0.9rem" }}>
					All Departments
				</MenuItem>
				<MenuItem value={1} sx={{ fontSize: "0.9rem" }}>
					Radiology
				</MenuItem>
				<MenuItem value={2} sx={{ fontSize: "0.9rem" }}>
					Neurology
				</MenuItem>
				<ListSubheader
					sx={{ color: "black", fontWeight: "500", fontSize: "1.1rem" }}
				>
					Diseases
				</ListSubheader>
				<MenuItem value={3} sx={{ fontSize: "0.9rem" }}>
					Work Life Balance
				</MenuItem>
				<MenuItem value={4} sx={{ fontSize: "0.9rem" }}>
					Physical Fatigue
				</MenuItem>
				<MenuItem value={4} sx={{ fontSize: "0.9rem" }}>
					Mood
				</MenuItem>
				<MenuItem value={4} sx={{ fontSize: "0.9rem" }}>
					Sleep Quality
				</MenuItem>
				<MenuItem value={4} sx={{ fontSize: "0.9rem" }}>
					Team Support
				</MenuItem>
			</Select>
		</FormControl>
	);
}

export function NotificationCard({ props }) {
	const { status, title, subHeading, content } = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Card
			sx={{
				flex: "0 0 auto",
				position: "relative",
				"&::before": {
					content: "''",
					position: "absolute",
					top: "50%",
					display: "inline-block",
					height: "80%",
					width: "0.2cm",
					transform: "translateY(-50%)",
					borderTopRightRadius: "2rem",
					borderBottomRightRadius: "2rem",
					bgcolor: status === "safe" ? "#06b58c" : "#f55f4b",
				},
			}}
		>
			<CardHeader
				avatar={<AccountBalance fontSize="large" />}
				action={
					<div>
						<IconButton
							id="action-button"
							aria-controls={open ? "action-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							aria-label="actions"
							onClick={handleClick}
						>
							<MoreVert />
						</IconButton>

						<Menu
							id="action-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "action-button",
							}}
						>
							<MenuItem onClick={handleClose}>Action-1</MenuItem>
							<MenuItem onClick={handleClose}>Action-2</MenuItem>
							<MenuItem onClick={handleClose}>Action-3</MenuItem>
						</Menu>
					</div>
				}
				title={title}
				subheader={subHeading}
			/>

			<CardContent sx={{ pt: 0, pb: 0 }}>
				<Typography variant="body2" component="div">
					{content}
				</Typography>
			</CardContent>

			<CardActions disableSpacing>
				<Tooltip title="Archive" position="bottom" TransitionComponent={Zoom}>
					<IconButton>
						<Archive />
					</IconButton>
				</Tooltip>

				<Tooltip title="Delete" position="bottom" TransitionComponent={Zoom}>
					<IconButton>
						<Delete />
					</IconButton>
				</Tooltip>
			</CardActions>
		</Card>
	);
}

export function NewNotification({ props }) {
	const { status, title, subHeading, content } = props;

	return (
		<Card
			sx={{
				width: "98%",
				position: "relative",
				"&::before": {
					content: "''",
					position: "absolute",
					top: "50%",
					display: "inline-block",
					height: "80%",
					width: "0.2cm",
					transform: "translateY(-50%)",
					borderTopRightRadius: "2rem",
					borderBottomRightRadius: "2rem",
					bgcolor: status === "safe" ? "#06b58c" : "#f55f4b",
				},
			}}
		>
			<CardHeader
				avatar={<AccountBalance fontSize="large" />}
				action={
					<Box component={Link} to="/notifications">
						<ArrowForward sx={{ color: "black" }} />
					</Box>
				}
				title={title}
				subheader={subHeading}
			/>

			<CardContent sx={{ pt: 0, pb: 0 }}>
				<Typography variant="body2" component="div">
					{content}
				</Typography>
			</CardContent>
		</Card>
	);
}

export function GraphInfo({ props }) {
	const { title } = props;

	return (
		<Tooltip
			title={title}
			enterTouchDelay={0}
			position="bottom"
			TransitionComponent={Zoom}
		>
			<IconButton>
				<InfoOutlined fontSize="small" />
			</IconButton>
		</Tooltip>
	);
}

export function CustomTabs() {
	const [value, setValue] = useState(0);
	const handleChange = (e, newVal) => {
		setValue(() => newVal);
	};

	return (
		<Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons
				allowScrollButtonsMobile
				aria-label="scrollable force tabs example"
			>
				<Tab label="I Quarter" />
				<Tab label="II Quarter" />
				<Tab label="III Quarter" />
				<Tab label="IV Quarter" />
			</Tabs>
		</Box>
	);
}

export function SearchBar({ props }) {
	const { label, query, setQuery } = props;

	return (
		<TextField
			label={label}
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			sx={{ width: "70%" }}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<Search />
					</InputAdornment>
				),
			}}
		/>
	);
}

export function TemporaryLogo() {
	return (
		<Box
			sx={{
				position: "absolute",
				right: "1rem",
				top: "3rem",
			}}
		>
			<Box component="img" src={tempLogo} sx={{ width: "3cm" }} />
		</Box>
	);
}

export function HarveyBalls(props) {
	const percent = props.percent;

	return (
		<Box
			sx={{
				borderRadius: "50%",
				transform: "scale(1.2)",
				display: "flex",
				bgcolor: "#34495E",
				p: 0.2,
			}}
		>
			<svg
				height="20"
				width="20"
				viewBox="0 0 20 20"
				style={{
					border: "0px solid #34495E",
					borderRadius: "50%",
				}}
			>
				{/* 

        user -> 10
        okey -> 3
        good -> 4
        sux -> 3

 */}

				<circle r="10" cx="10" cy="10" fill="white" />
				<circle
					r="5"
					cx="10"
					cy="10"
					fill="transparent"
					stroke="#34495E"
					strokeWidth="10"
					strokeDasharray={`${(percent * 31.4) / 100} 31.4`}
					style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
				/>
			</svg>
		</Box>
	);
}

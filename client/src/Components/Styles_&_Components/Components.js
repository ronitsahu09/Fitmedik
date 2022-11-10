import {
  Autocomplete,
  autocompleteClasses,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  Stack,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
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
  InfoRounded,
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
          Cardiology
        </MenuItem>
        <ListSubheader
          sx={{ color: "black", fontWeight: "500", fontSize: "1.1rem" }}
        >
          Diseases
        </ListSubheader>
        <MenuItem value={3} sx={{ fontSize: "0.9rem" }}>
          Strees
        </MenuItem>
        <MenuItem value={4} sx={{ fontSize: "0.9rem" }}>
          Fatigue
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export function RegularSelectMenu({ props }) {
  const { label, title, options, currMonth, setCurrMonth } = props;

  const handleChange = (event) => {
    setCurrMonth(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ minWidth: 120 }} size="small">
      <InputLabel id={`${label}-selectMenu-label`}>{title}</InputLabel>
      <Select
        labelId={`${label}-selectMenu-label`}
        id={`${label}-selectMenu`}
        value={currMonth}
        label={title}
        onChange={handleChange}
      >
        {options.map((opt, indx) => {
          const { value, legend } = opt;

          return (
            <MenuItem key={indx} value={value}>
              {legend}
            </MenuItem>
          );
        })}
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
        <InfoRounded fontSize="small" />
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
        <Tab label="20 April" />
        <Tab label="21 April" />
        <Tab label="22 April" />
        <Tab label="23 April" />
        <Tab label="24 April" />
        <Tab label="25 April" />
        <Tab label="26 April" />
      </Tabs>
    </Box>
  );
}

export function SearchBar({ props }) {
  const { label, data } = props;

  return (
    <Autocomplete
      disablePortal
      id={`${label}-searchbar`}
      popupIcon={<Search />}
      options={data}
      sx={{
        width: "70%",
        [`& .${autocompleteClasses.popupIndicator}`]: {
          transform: "none",
        },
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

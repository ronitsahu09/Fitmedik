import { Box, Stack, Typography } from "@mui/material";
import { dot, PieDot } from "./Styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { createAction } from "../../Redux/Organization";

import { DateRangePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";

import { useState } from "react";

export function BasicDateRangePicker({ props }) {
  const { start, end } = props.options.duration;
  const { setOptions } = props;

  const handleChange = (newValue, bool, args) => {
    if (bool) {
      const start =
        args.startDate.toString() +
        "/" +
        args.startMonth.toString() +
        "/" +
        args.startYear.toString();

      const end =
        args.endDate.toString() +
        "/" +
        args.endMonth.toString() +
        "/" +
        args.endYear.toString();

      setOptions((prevState) => ({
        ...prevState,
        duration: {
          start,
          end,
        },
      }));

      return;
    }

    if (newValue[0]) {
      const start =
        newValue[0].$D.toString() +
        "/" +
        (1 + newValue[0].$M).toString() +
        "/" +
        newValue[0].$y.toString();

      setOptions((prevState) => ({
        ...prevState,
        duration: { ...prevState.duration, start },
      }));
    } else {
      const date = new Date();
      const start =
        date.getDate().toString() +
        "/" +
        (1 + date.getMonth()).toString() +
        "/" +
        date.getFullYear().toString();

      setOptions((prevState) => ({
        ...prevState,
        duration: { ...prevState.duration, start },
      }));
    }

    if (newValue[1]) {
      const end =
        newValue[1].$D.toString() +
        "/" +
        (1 + newValue[1].$M).toString() +
        "/" +
        newValue[1].$y.toString();

      setOptions((prevState) => ({
        ...prevState,
        duration: { ...prevState.duration, end },
      }));
    } else {
      const date = new Date();

      const end =
        date.getDate().toString() +
        "/" +
        (1 + date.getMonth()).toString() +
        "/" +
        date.getFullYear().toString();

      setOptions((prevState) => ({
        ...prevState,
        duration: { ...prevState.duration, end },
      }));
    }
  };

  const [value, setValue] = useState(() => {
    if (!start && !end) {
      const start = new Date();
      const end = new Date();

      const startYear = start.getFullYear();
      const startMonth = start.getMonth();
      const startDate = start.getDate();

      const endYear = end.getFullYear();
      const endMonth = end.getMonth();
      const endDate = end.getDate();

      handleChange(null, true, {
        startYear,
        startMonth,
        startDate,
        endYear,
        endMonth,
        endDate,
      });

      return [start, end];
    }

    const startYear = parseInt(start.split("/")[2]);
    const startMonth = parseInt(start.split("/")[1]) - 1;
    const startDate = parseInt(start.split("/")[0]);

    const endYear = parseInt(end.split("/")[2]);
    const endMonth = parseInt(end.split("/")[1]) - 1;
    const endDate = parseInt(end.split("/")[0]);

    handleChange(null, true, {
      startYear,
      startMonth,
      startDate,
      endYear,
      endMonth,
      endDate,
    });

    return [
      new Date(startYear, startMonth, startDate),
      new Date(endYear, endMonth, endDate),
    ];
  });

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "Check-in", end: "Check-out" }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          handleChange(newValue, false);

          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
}

export default function ActionForm({ props }) {
  const { isOpen, setIsOpen, options, setOptions } = props;

  const dispatch = useDispatch();

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>{options.title}</DialogTitle>

      <DialogContent>
        <Stack gap={2}>
          <TextField
            id="action-name"
            label="Name"
            variant="standard"
            value={options.name}
            onChange={(e) => {
              setOptions((prevState) => ({
                ...prevState,
                name: e.target.value,
              }));
            }}
          />

          <TextField
            id="action-name"
            label="Description"
            variant="standard"
            value={options.description}
            onChange={(e) => {
              setOptions((prevState) => ({
                ...prevState,
                description: e.target.value,
              }));
            }}
          />

          <FormControl variant="standard">
            <InputLabel id="viewType">View</InputLabel>
            <Select
              labelId="viewType"
              id="viewType-standard"
              value={options.view}
              onChange={(e) => {
                setOptions((prevState) => ({
                  ...prevState,
                  view: e.target.value,
                }));
              }}
              label="View"
            >
              <MenuItem value="organization">Organization</MenuItem>
              <MenuItem value="department">Department</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="actionType-select">Action</InputLabel>
            <Select
              value={options.actionType}
              onChange={(e) => {
                setOptions((prevState) => ({
                  ...prevState,
                  actionType: e.target.value,
                }));
              }}
              id="actionType-select"
              label="Action"
            >
              <ListSubheader
                sx={{ color: "black", fontSize: "1.1rem", fontWeight: "bold" }}
              >
                Trend
              </ListSubheader>

              <MenuItem value="average burnout trend">
                Average Burnout Trend
              </MenuItem>

              <ListSubheader
                sx={{ color: "black", fontSize: "1.1rem", fontWeight: "bold" }}
              >
                Burnout Indicator
              </ListSubheader>
              <MenuItem value="work life balance">Work Life Balance</MenuItem>
              <MenuItem value="physical fatigue">Physical Fatigue</MenuItem>
              <MenuItem value="mood">Mood</MenuItem>
              <MenuItem value="sleep quality">Sleep Quality</MenuItem>
              <MenuItem value="team support">Team Support</MenuItem>

              <ListSubheader
                sx={{ color: "black", fontSize: "1.1rem", fontWeight: "bold" }}
              >
                High Risk Demographics
              </ListSubheader>

              <MenuItem value="high risk profession">
                High Risk Profession
              </MenuItem>
              <MenuItem value="gender">Gender</MenuItem>
              <MenuItem value="ethnicity">Ethnicity</MenuItem>
              <MenuItem value="age groups">Age Groups</MenuItem>
            </Select>
          </FormControl>

          <BasicDateRangePicker props={{ options, setOptions }} />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => setIsOpen(false)}
        >
          Discard
        </Button>

        {options.title === "Create Action" && (
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              dispatch(createAction({ action: options }));
              console.log(options);
              setIsOpen(false);
            }}
          >
            Create
          </Button>
        )}

        {options.title === "Edit Action" && (
          <Button
            variant="contained"
            size="small"
            onClick={() => setIsOpen(false)}
          >
            Update
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

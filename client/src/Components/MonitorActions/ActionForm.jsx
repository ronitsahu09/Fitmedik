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
import { useDispatch, useSelector } from "react-redux";
import { createAction, updateAction } from "../../Redux/Organization";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useRef } from "react";

export default function ActionForm({ props }) {
  const { isOpen, setIsOpen, options, setOptions } = props;
  const ref = useRef();
  const departments = useSelector(
    (state) => state.organization.organizationInfo?.departments
  );
  const _id = useSelector((state) => state.organization.organizationInfo?._id);

  const dispatch = useDispatch();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (options.title === "Create Action")
      dispatch(
        createAction({
          action: {
            ...options,
            duration: {
              startDate: options.duration[0].startDate.toDateString(),
              endDate: options.duration[0].endDate.toDateString(),
            },
          },
          _id,
        })
      );

    if (options.title === "Edit Action")
      dispatch(
        updateAction({
          action: {
            ...options,
            duration: {
              startDate: options.duration[0].startDate.toDateString(),
              endDate: options.duration[0].endDate.toDateString(),
            },
          },
          _id,
        })
      );

    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>{options.title}</DialogTitle>

      <DialogContent>
        <Stack gap={2} component="form" ref={ref} onSubmit={handleFormSubmit}>
          <TextField
            required
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
            required
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
            <InputLabel htmlFor="viewType-select">Action</InputLabel>
            <Select
              id="viewType-select"
              value={options.view}
              onChange={(e) => {
                setOptions((prevState) => ({
                  ...prevState,
                  view: e.target.value,
                }));
              }}
              label="View"
            >
              <ListSubheader
                sx={{ color: "black", fontSize: "1.1rem", fontWeight: "bold" }}
              >
                Organization
              </ListSubheader>

              <MenuItem value="hospital">Hospital</MenuItem>

              <ListSubheader
                sx={{ color: "black", fontSize: "1.1rem", fontWeight: "bold" }}
              >
                Department
              </ListSubheader>

              {departments.map((dept, indx) => (
                <MenuItem
                  key={indx}
                  sx={{ textTransform: "capitalize" }}
                  value={dept._id}
                >
                  {dept.name}
                </MenuItem>
              ))}
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

              <MenuItem value="average-burnout-trend">
                Average Burnout Trend
              </MenuItem>

              <ListSubheader
                sx={{ color: "black", fontSize: "1.1rem", fontWeight: "bold" }}
              >
                Burnout Indicator
              </ListSubheader>
              <MenuItem value="work-life-balance">Work Life Balance</MenuItem>
              <MenuItem value="physical-fatigue">Physical Fatigue</MenuItem>
              <MenuItem value="mood">Mood</MenuItem>
              <MenuItem value="sleep-quality">Sleep Quality</MenuItem>
              <MenuItem value="interaction-index">Interaction Index</MenuItem>
            </Select>
          </FormControl>

          <ActionDuration props={{ options, setOptions }} />
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
            onClick={() => ref.current.requestSubmit()}
          >
            Create
          </Button>
        )}

        {options.title === "Edit Action" && (
          <Button
            variant="contained"
            size="small"
            onClick={() => ref.current.requestSubmit()}
          >
            Update
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

function ActionDuration({ props }) {
  const {
    options: { duration },
    setOptions,
  } = props;

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) =>
        setOptions((prev) => ({ ...prev, duration: [item.selection] }))
      }
      moveRangeOnFirstSelection={false}
      ranges={duration}
    />
  );
}

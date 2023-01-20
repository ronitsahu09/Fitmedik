import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import { DateRange } from "react-date-range";
import TrendGraph from "../Graphs/Trend_Graph/TrendGraph";
import useFilter from "./useFilter";
import { addDays } from "date-fns";

export function AverageBurnoutTrend(props) {
  const fakeUsers = props.fakeUsers;

  const { filter, modalOpen, setFilter, ChangeHandler, setModalOpen, config } =
    useFilter(fakeUsers || []);

  return fakeUsers ? (
    <Stack gap={2} flex={1}>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          component="div"
          sx={{
            fontSize: { xs: "1.8em", lg: "2em" },
            fontWeight: "500",
            mr: 2,
          }}
        >
          Average Burnout
        </Typography>

        <SelectMenu
          props={{ value: filter.value, ChangeHandler, setModalOpen }}
        />

        <MuiModal
          props={{
            open: modalOpen,
            handleClose: () => setModalOpen(false),
            filter,
            setFilter,
          }}
        />
      </Stack>

      <TrendGraph config={{ ...config }} />
    </Stack>
  ) : null;
}

function SelectMenu({ props }) {
  const { value, ChangeHandler, setModalOpen } = props;

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="averageBurnoutTrendFilter">Filters</InputLabel>
      <Select
        labelId="averageBurnoutTrendFilter"
        id="filters-select"
        value={value}
        onChange={ChangeHandler}
        label="Filters"
      >
        <MenuItem value={-1}>Yesterday</MenuItem>
        <MenuItem value={-7}>Last 7 days</MenuItem>
        <MenuItem value={-30} disabled>
          Last 30 days
        </MenuItem>
        <MenuItem value={0} onClick={() => setModalOpen(true)}>
          Custom Range
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function MuiModal({ props }) {
  const {
    open,
    handleClose,
    filter: { startDate, endDate },
    setFilter,
  } = props;

  const duration = [{ startDate, endDate, key: "selection" }];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyles}>
        <DateRange
          onChange={(item) =>
            setFilter((prev) => {
              const { startDate, endDate } = item.selection;
              return { ...prev, startDate, endDate };
            })
          }
          moveRangeOnFirstSelection={false}
          ranges={duration}
          maxDate={addDays(new Date(), -1)}
        />
      </Box>
    </Modal>
  );
}

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
  p: 1,
};

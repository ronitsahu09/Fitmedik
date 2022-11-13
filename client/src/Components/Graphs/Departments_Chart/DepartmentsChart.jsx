import {
  Box,
  Stack,
  styled,
  Tooltip,
  tooltipClasses,
  Typography,
  Zoom,
} from "@mui/material";
import { Link } from "react-router-dom";
import { labelBox, strip, title } from "./Styles";

const DarkTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    TransitionComponent={Zoom}
    followCursor
    arrow
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

function TooltipContent({ props }) {
  const { title, percent, color } = props;

  return (
    <Stack direction="row" alignItems="center">
      <Box sx={{ ...labelBox, bgcolor: `${color}` }}></Box>
      <Typography variant="p" component="p" mr={1}>
        {title}:
      </Typography>
      <Typography variant="p" component="p">
        {percent}%
      </Typography>
    </Stack>
  );
}

export default function DepartmentsChart({ props }) {
  const department = props;
  const { safe, low, medium, high, danger } = props.stats;

  return (
    <Stack direction="row" alignItems="center" gap={1.5}>
      <Box component={Link} to={`${department._id}`} sx={{ ...title }}>
        {department.name}
      </Box>

      <Box sx={{ ...strip }}>
        <DarkTooltip
          title={
            <TooltipContent
              props={{ title: "Safe", precent: safe, color: "#06b58c" }}
            />
          }
        >
          <Box
            sx={{
              bgcolor: "#06b58c",
              width: `calc(${safe}% + 0%)`,
            }}
          ></Box>
        </DarkTooltip>

        <DarkTooltip
          title={
            <TooltipContent
              props={{ title: "Low", percent: low, color: "#8fabdd" }}
            />
          }
        >
          <Box
            sx={{
              bgcolor: "#8fabdd",
              width: `calc(${low}% + 0%)`,
            }}
          ></Box>
        </DarkTooltip>

        <DarkTooltip
          title={
            <TooltipContent
              props={{ title: "Medium", percent: medium, color: "#fed966" }}
            />
          }
        >
          <Box
            sx={{
              bgcolor: "#fed966",
              width: `calc(${medium}% + 0%)`,
            }}
          ></Box>
        </DarkTooltip>

        <DarkTooltip
          title={
            <TooltipContent
              props={{ title: "High", percent: high, color: "#f08725" }}
            />
          }
        >
          <Box
            sx={{
              bgcolor: "#f08725",
              width: `calc(${high}% + 0%)`,
            }}
          ></Box>
        </DarkTooltip>

        <DarkTooltip
          title={
            <TooltipContent
              props={{ title: "Danger", percent: danger, color: "#f55f4b" }}
            />
          }
        >
          <Box
            sx={{
              bgcolor: "#f55f4b",
              width: `calc(${danger}% + 0%)`,
            }}
          ></Box>
        </DarkTooltip>
      </Box>
    </Stack>
  );
}

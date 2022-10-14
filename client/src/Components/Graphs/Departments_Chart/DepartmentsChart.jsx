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
  const { title, color } = props;

  return (
    <Stack direction="row" alignItems="center">
      <Box sx={{ ...labelBox, bgcolor: `${color}` }}></Box>
      <Typography variant="p" component="p" mr={1}>
        {title}:
      </Typography>
      <Typography variant="p" component="p">
        18%
      </Typography>
    </Stack>
  );
}

export default function DepartmentsChart() {
  const data = [
    {
      name: "Radiology",
      stats: { safe: 19, low: 33, medium: 28, high: 15, danger: 0 },
    },
    {
      name: "Cardiology",
      stats: { safe: 33, low: 28, medium: 15, high: 5, danger: 19 },
    },
  ];

  return (
    <Stack gap={5}>
      {data.map((department, index) => {
        return (
          <Stack direction="row" alignItems="center" gap={1.5} key={index}>
            <Box component={Link} to={`${department.name}`} sx={{ ...title }}>
              {department.name}
            </Box>

            <Box sx={{ ...strip }}>
              <DarkTooltip
                title={
                  <TooltipContent props={{ title: "Safe", color: "#06b58c" }} />
                }
              >
                <Box
                  sx={{
                    bgcolor: "#06b58c",
                    width: `calc(${department.stats.safe}% - 0.5%)`,
                  }}
                >
                  &nbsp;
                </Box>
              </DarkTooltip>

              <DarkTooltip
                title={
                  <TooltipContent props={{ title: "Low", color: "#8fabdd" }} />
                }
              >
                <Box
                  sx={{
                    bgcolor: "#8fabdd",
                    width: `calc(${department.stats.low}% - 0.5%)`,
                  }}
                >
                  &nbsp;
                </Box>
              </DarkTooltip>

              <DarkTooltip
                title={
                  <TooltipContent
                    props={{ title: "Medium", color: "#fed966" }}
                  />
                }
              >
                <Box
                  sx={{
                    bgcolor: "#fed966",
                    width: `calc(${department.stats.medium}% - 0.5%)`,
                  }}
                >
                  &nbsp;
                </Box>
              </DarkTooltip>

              <DarkTooltip
                title={
                  <TooltipContent props={{ title: "High", color: "#f08725" }} />
                }
              >
                <Box
                  sx={{
                    bgcolor: "#f08725",
                    width: `calc(${department.stats.high}% - 0.5%)`,
                  }}
                >
                  &nbsp;
                </Box>
              </DarkTooltip>

              <DarkTooltip
                title={
                  <TooltipContent
                    props={{ title: "Danger", color: "#f55f4b" }}
                  />
                }
              >
                <Box
                  sx={{
                    bgcolor: "#f55f4b",
                    width: `calc(${department.stats.danger}% - 0.5%)`,
                  }}
                >
                  &nbsp;
                </Box>
              </DarkTooltip>
            </Box>
          </Stack>
        );
      })}
    </Stack>
  );
}

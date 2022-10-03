import { Stack, Box, Paper, Typography } from "@mui/material";
import {
  bottomBlur,
  colorDot,
  logo,
  monitoring,
  monitorLogoWrapper,
  rightSidebar,
} from "./Styles";
import Logo_1 from "../../Assets/Images/Logo_1.svg";
import MonitoringLogo from "../../Assets/Images/MonitoringLogo.png";

export default function RightSidebar() {
  return (
    <Stack sx={{ ...rightSidebar }}>
      <Box component="img" src={Logo_1} sx={{ ...logo }} />
      <Paper sx={{ ...monitoring }}>
        <Box sx={{ ...monitorLogoWrapper }}>
          <Box component="img" src={MonitoringLogo} sx={{ width: "100%" }} />
          <Box sx={{ ...bottomBlur }}></Box>
        </Box>

        <Typography variant="h5" component="p" fontWeight="500">
          Realtime Burnout Monitoring
        </Typography>

        <Stack gap={4} alignItems="flex-start" alignSelf="center">
          <Stack direction="row" alignItems="center" spacing={2.1}>
            <Box sx={{ ...colorDot, bgcolor: "#f55f4b" }}></Box>
            <Typography variant="h5" component="div" sx={{ fontWeight: 500 }}>
              {9}
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ fontWeight: 500, color: "#f55f4b" }}
            >
              Danger
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2.1}>
            <Box sx={{ ...colorDot, bgcolor: "#f08725" }}></Box>
            <Typography variant="h5" component="div" sx={{ fontWeight: 500 }}>
              {25}
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ fontWeight: 500, color: "#f08725" }}
            >
              High
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2.1}>
            <Box sx={{ ...colorDot, bgcolor: "#fed966" }}></Box>
            <Typography variant="h5" component="div" sx={{ fontWeight: 500 }}>
              {33}
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ fontWeight: 500, color: "#fed966" }}
            >
              Medium
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2.1}>
            <Box sx={{ ...colorDot, bgcolor: "#8fabdd" }}></Box>
            <Typography variant="h5" component="div" sx={{ fontWeight: 500 }}>
              {74}
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ fontWeight: 500, color: "#8fabdd" }}
            >
              Low
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2.1}>
            <Box sx={{ ...colorDot, bgcolor: "#06b58c" }}></Box>
            <Typography variant="h5" component="div" sx={{ fontWeight: 500 }}>
              {16}
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ fontWeight: 500, color: "#06b58c" }}
            >
              Safe
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}

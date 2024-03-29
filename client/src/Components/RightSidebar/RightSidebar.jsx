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

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function RightSidebar() {
  const users = useSelector(
    (state) => state.organization.organizationInfo?.users
  );

  const [status, setStatus] = useState({
    safe: 0,
    low: 0,
    medium: 0,
    high: 0,
    danger: 0,
  });

  useEffect(() => {
    if (!users) return;

    const data = { safe: 0, low: 0, medium: 0, high: 0, danger: 0 };

    users.map((user) => {
      const { health_data: healthData } = user;
      const len = healthData.length;

      switch (healthData[len - 1]?.burnout) {
        case 1:
          data.safe++;
          break;
        case 2:
          data.low++;
          break;
        case 3:
          data.medium++;
          break;
        case 4:
          data.high++;
          break;
        case 5:
          data.danger++;
          break;
        default:
      }

      return null;
    });

    setStatus(data);
  }, [users]);

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
          <Stack
            direction="row"
            alignItems="center"
            spacing={2.1}
            color="#f55f4b"
          >
            <Box sx={{ ...colorDot, bgcolor: "#f55f4b", color: "black" }}></Box>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: 500, color: "black" }}
            >
              {status.danger}
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ fontWeight: 500, color: "black" }}
            >
              Danger
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2.1}
            color="#f08725"
          >
            <Box sx={{ ...colorDot, bgcolor: "#f08725" }}></Box>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: 500, color: "black" }}
            >
              {status.high}
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ fontWeight: 500, color: "black" }}
            >
              High
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2.1}
            color="#fed966"
          >
            <Box sx={{ ...colorDot, bgcolor: "#fed966" }}></Box>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: 500, color: "black" }}
            >
              {status.medium}
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ fontWeight: 500, color: "black" }}
            >
              Medium
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2.1}
            color="#8fabdd"
          >
            <Box sx={{ ...colorDot, bgcolor: "#8fabdd" }}></Box>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: 500, color: "black" }}
            >
              {status.low}
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ fontWeight: 500, color: "black" }}
            >
              Low
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2.1}
            color="#06b58c"
          >
            <Box sx={{ ...colorDot, bgcolor: "#06b58c" }}></Box>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: 500, color: "black" }}
            >
              {status.safe}
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ fontWeight: 500, color: "black" }}
            >
              Safe
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}

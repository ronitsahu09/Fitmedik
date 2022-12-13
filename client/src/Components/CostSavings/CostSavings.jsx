import {
  faArrowDownLong,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import LineChart from "../Graphs/LineChart/LineChart";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { CustomSelect, GraphInfo } from "../Styles_&_Components/Components";
import {
  AppWrapper,
  fixedWindow,
  graphCanvas,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";
import { info, values } from "./Styles";

export default function CostSavings({ props }) {
  const { appHeight } = props;

  const [filters, setFilters] = useState(0);
  const handleChange = (e) => {
    setFilters(e.target.value);
  };

  return (
    <Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Stack sx={{ ...middleWindow }}>
          <Typography variant="h3" component="div" fontWeight="700">
            Cost Savings
          </Typography>

          <Stack sx={{ ...fixedWindow }}>
            <Stack gap={3} mt={3}>
              <Stack direction="row" alignItems="center" gap="0.5rem">
                <Typography
                  component="div"
                  sx={{
                    fontSize: { xs: "1.8em", lg: "2em" },
                    fontWeight: "500",
                    mr: 2,
                  }}
                >
                  Impact of burnout on operational Revenue
                </Typography>
                <GraphInfo
                  props={{
                    title:
                      "It shows how the burnout management activities are impacting operational revenue.",
                  }}
                />
              </Stack>

              <Paper
                sx={{
                  ...graphCanvas,
                  ...info,
                  // m: "auto",
                  p: "1.5rem",
                  width: "fit-content",
                }}
              >
                <Stack direction="row" gap={2} alignItems="center">
                  <Typography
                    sx={{
                      color: "#999999",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Cost Savings:
                  </Typography>

                  <Typography
                    variant="div"
                    component="div"
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#06b58c",
                    }}
                  >
                    $3,000,400 - $5,000,000
                  </Typography>
                </Stack>
              </Paper>

              <Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack direction="row" alignItems="center" gap="0.5rem">
                    <Typography
                      sx={{
                        fontSize: { xs: "1.8em", lg: "2em" },
                        fontWeight: "500",
                      }}
                    >
                      Analytics
                    </Typography>

                    <GraphInfo
                      props={{
                        title:
                          "Cost savings due to management activities over the time span.",
                      }}
                    />
                  </Stack>

                  <CustomSelect props={{ filters, handleChange }} />
                </Stack>
                <Paper sx={{ ...graphCanvas, height: "5in" }}>
                  <LineChart props={{ filters, handleChange }} />
                </Paper>
              </Stack>
            </Stack>

            <Box sx={{ height: 5 }}></Box>
          </Stack>
        </Stack>
      </Stack>

      <RightSidebar />
    </Stack>
  );
}

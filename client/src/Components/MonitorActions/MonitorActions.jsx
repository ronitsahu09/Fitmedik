import { Add, Delete, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Unstable_Grid2 as Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  Zoom,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  AccordionActions,
  Button,
  Paper,
} from "@mui/material";
import { useState } from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import { SearchBar } from "../Styles_&_Components/Components";
import {
  AppWrapper,
  fixedWindow,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";
import ResultantGraph from "./ResultantGraph";
import ActionForm from "./ActionForm";
import { useSelector } from "react-redux";

// const actions = [
//   {
//     _id: "bb222af",
//     name: "Average Burnout Trend",
//     description: "Monitor the average burnout trend b/w THIS date to THIS date",
//     isCompleted: false,
//     duration: {
//       start: "10/10/2022",
//       end: "23/10/2022",
//     },
//     actionType: "average burnout trend",
//     view: "organization",
//   },

//   {
//     _id: "bb222bf",
//     name: "Organization's Physical Fatigue",
//     description: "Changed staff. Monitor Physical Fatigue now",
//     isCompleted: true,
//     duration: {
//       start: "12/10/2022",
//       end: "2/11/2022",
//     },
//     actionType: "mood",
//     view: "department",
//   },

//   {
//     _id: "bb222gf",
//     name: "Highly vulnerable Professions",
//     description: "Monitor the professions with high burnout.",
//     duration: {
//       start: "10/10/2022",
//       end: "23/10/2022",
//     },
//     view: "organization",
//     isCompleted: false,
//     actionType: "high risk profession",
//   },
// ];

const initialOptions = {
  title: "Create Action",
  name: null,
  description: null,
  duration: {
    start: null,
    end: null,
  },
  isCompleted: false,
  view: "organization",
  actionType: "average burnout trend",
};

export default function MonitorActions({ props }) {
  const { appHeight } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(initialOptions);

  const organization = useSelector((state) => state.organization);
  const actions = organization?.organizationInfo?.actions;

  const handleClick = (bool) => {
    setIsOpen(true);
  };

  return (
    actions && (
      <Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
        <LeftSidebar />

        <Stack sx={{ ...middle }}>
          <Stack sx={{ ...middleWindow }}>
            <Typography variant="h3" component="div" fontWeight="700">
              Monitor Actions
            </Typography>

            <SearchBar
              props={{ label: "Search for actions", data: ["fuzzy ", "dizzy"] }}
            />

            <Stack sx={{ ...fixedWindow }}>
              <Stack gap={3} mt={3}>
                <Tooltip
                  title="Add an action"
                  placement="right"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    sx={{ alignSelf: "center", bgcolor: "#E5E8E8" }}
                    onClick={() => {
                      setOptions(initialOptions);
                      handleClick();
                    }}
                  >
                    <Add sx={{ fontSize: "3rem" }} />
                  </IconButton>
                </Tooltip>

                <Stack gap={0.2}>
                  <Paper
                    elevation={1}
                    sx={{
                      display: "flex",
                      gap: 1,
                      p: 1.5,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      color: "#4a4f76",
                    }}
                  >
                    <Typography
                      variant="div"
                      component="div"
                      fontWeight="bold"
                      width="40%"
                    >
                      Action
                    </Typography>

                    <Typography
                      variant="div"
                      component="div"
                      fontWeight="bold"
                      width="20%"
                    >
                      Action Type
                    </Typography>

                    <Typography
                      variant="div"
                      component="div"
                      fontWeight="bold"
                      width="25%"
                    >
                      Duration
                    </Typography>

                    <Typography
                      variant="div"
                      component="div"
                      fontWeight="bold"
                      width="15%"
                    >
                      Status
                    </Typography>
                  </Paper>

                  {actions.map((action, index) => {
                    return (
                      <Paper
                        elevation={1}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          p: 1.5,
                          borderRadius: 0.5,
                        }}
                        key={index}
                      >
                        <Accordion
                          elevation={0}
                          sx={{
                            "&:before": { display: "none" },
                            bgcolor: "inherit",
                          }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls={`${action._id}-content`}
                            id={`${action._id}-header`}
                            sx={{ color: "black", paddingX: 0 }}
                          >
                            <Typography
                              variant="div"
                              component="div"
                              width="40%"
                            >
                              {action.name}
                            </Typography>

                            <Typography
                              variant="div"
                              component="div"
                              width="20%"
                            >
                              {action.actionType}
                            </Typography>

                            <Typography
                              variant="div"
                              component="div"
                              width="25%"
                            >
                              {action.duration.start} - {action.duration.end}
                            </Typography>

                            <Typography
                              variant="div"
                              component="div"
                              width="15%"
                            >
                              {action.isCompleted ? "Completed" : "Pending"}
                            </Typography>
                          </AccordionSummary>

                          <AccordionDetails
                            sx={{
                              paddingX: 0,
                            }}
                          >
                            <Typography component="div">
                              {action.description}
                            </Typography>
                            Line chart here!
                            {/* <ResultantGraph
                            props={{
                              chartData: {
                                labels: [
                                  "April 5",
                                  "April 6",
                                  "April 7",
                                  "April 8",
                                  "April 9",
                                  "April 10",
                                ],
                                datasets: data[filters],
                              },

                              options: {
                                reponsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                  doughnutLabelsLine: false,
                                },
                                scales: {
                                  x: { ticks: { color: "black" } },
                                  y: { ticks: { color: "black" } },
                                },
                              },
                            }}
                          /> */}
                          </AccordionDetails>

                          <AccordionActions>
                            <Button
                              onClick={() => {
                                setOptions(() => {
                                  return { ...action, title: "Edit Action" };
                                });

                                handleClick();
                              }}
                            >
                              Edit
                            </Button>

                            <IconButton onClick={() => {}}>
                              <Delete
                                sx={{
                                  color: "#f55f4b",
                                }}
                              />
                            </IconButton>
                          </AccordionActions>
                        </Accordion>

                        {/* {index !== actions.length - 1 && (
                        <Divider sx={{ borderBottomWidth: 3 }} />
                      )} */}
                      </Paper>
                    );
                  })}
                </Stack>
              </Stack>

              <ActionForm props={{ isOpen, setIsOpen, options, setOptions }} />

              <Box sx={{ height: 5 }}></Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    )
  );
}

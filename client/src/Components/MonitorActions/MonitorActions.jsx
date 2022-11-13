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
import { useDispatch, useSelector } from "react-redux";
import { destroyAction } from "../../Redux/Organization";

export default function MonitorActions({ props }) {
  const initialOptions = {
    title: "Create Action",
    name: null,
    description: null,
    duration: {
      start: null,
      end: null,
    },
    isCompleted: false,
    view: "hospital",
    actionType: "average burnout trend",
  };

  const { appHeight } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(initialOptions);

  const organization = useSelector((state) => state.organization);
  const actions = organization?.organizationInfo?.actions;

  const handleClick = (bool) => {
    setIsOpen(true);
  };

  const dispatch = useDispatch();

  // const averageBurnoutTrend = (duration) => {
  //   const { averageBurnout } = organization.organizationInfo;
  //   const { start, end } = duration;
  //   const len = averageBurnout.length;

  //   const date1 =
  //     start.split("/")[1] +
  //     "/" +
  //     start.split("/")[0] +
  //     "/" +
  //     start.split("/")[2];

  //   const date2 =
  //     end.split("/")[1] + "/" + end.split("/")[0] + "/" + end.split("/")[2];

  //   const startDate = new Date(date1);
  //   const endDate = new Date(date2);
  //   const currDate = new Date();

  //   const diffTime = Math.abs(endDate - startDate);
  //   const currDiffTime = Math.abs(currDate - startDate);
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //   const currDiffDays = Math.ceil(currDiffTime / (1000 * 60 * 60 * 24));
  // };

  const getData = (view, actionType, duration) => {
    let dataset;

    switch (
      actionType

      // case "average burnout trend":
      //   averageBurnoutTrend(duration);
      //   break;
      //* and so on
    ) {
    }

    return dataset;
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

            <Stack direction="row" justifyContent="space-between">
              <SearchBar
                props={{
                  label: "Search for actions",
                  data: ["fuzzy", "dizzy"],
                }}
              />

              <Button
                endIcon={<Add />}
                sx={{ color: "#2ECC71" }}
                size="large"
                onClick={() => {
                  setOptions(initialOptions);
                  handleClick();
                }}
              >
                Create Action
              </Button>
            </Stack>

            <Stack sx={{ ...fixedWindow }}>
              <Stack gap={3} mt={3}>
                <Stack gap={0.2}>
                  <Paper
                    elevation={1}
                    sx={{
                      display: "flex",
                      p: 2,
                      borderRadius: 0,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      color: "#f55f4b",
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
                      width="40%"
                    >
                      Action Type
                    </Typography>

                    {/* <Typography
                      variant="div"
                      component="div"
                      fontWeight="bold"
                      width="25%"
                    >
                      Duration
                    </Typography> */}

                    <Typography
                      variant="div"
                      component="div"
                      fontWeight="bold"
                      width="20%"
                    >
                      Status
                    </Typography>
                  </Paper>

                  {actions.map((action, index) => {
                    // const datasets = getData(
                    //   action.view,
                    //   action.actionType,
                    //   action.duration
                    // );

                    return (
                      <Accordion
                        key={index}
                        elevation={2}
                        sx={{
                          "&:before": { display: "none" },
                          bgcolor: "inherit",
                        }}
                      >
                        <AccordionSummary
                          aria-controls={`${index}-content`}
                          id={`${index}-header`}
                          sx={{
                            color: "black",
                            textTransform: "capitalize",
                          }}
                        >
                          <Typography variant="div" component="div" width="40%">
                            {action.name}
                          </Typography>

                          <Typography variant="div" component="div" width="40%">
                            {action.actionType}
                          </Typography>

                          <Typography variant="div" component="div" width="20%">
                            {action.isCompleted ? "Completed" : "Pending"}
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{}}>
                          <Divider sx={{ borderBottomWidth: 1.5 }} />

                          <Stack mt={2} gap={2}>
                            <Stack direction="row" gap={1}>
                              <Typography
                                variant="div"
                                component="div"
                                fontWeight="bold"
                              >
                                Duration:
                              </Typography>

                              <Typography variant="div" component="div">
                                {action.duration.start} - {action.duration.end}
                              </Typography>
                            </Stack>

                            <Stack direction="row" gap={1}>
                              <Typography
                                variant="div"
                                component="div"
                                fontWeight="bold"
                              >
                                Description:
                              </Typography>

                              <Typography variant="div" component="div">
                                {action.description}
                              </Typography>
                            </Stack>

                            <Stack direction="row" gap={1}>
                              <Typography
                                variant="div"
                                component="div"
                                fontWeight="bold"
                              >
                                Total Savings:
                              </Typography>

                              <Typography variant="div" component="div">
                                ${900}
                              </Typography>
                            </Stack>

                            <Stack direction="row" gap={1}>
                              <Typography
                                variant="div"
                                component="div"
                                fontWeight="bold"
                              >
                                Average Burnout Drop:
                              </Typography>

                              <Typography variant="div" component="div">
                                5%
                              </Typography>
                            </Stack>
                          </Stack>

                          {action.isCompleted && (
                            <>
                              <Typography mt={4} variant="h4" component="div">
                                Results:
                              </Typography>

                              <ResultantGraph
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
                                    datasets: [
                                      {
                                        label: "Radiology",
                                        data: [29, 20, 10, 5, 0, 0],
                                        borderColor: "deeppink",
                                        backgroundColor: "pink",
                                      },
                                      {
                                        label: "Cardiology",
                                        data: [9, 3, 10, 5, 8, 0],
                                        borderColor: "deepskyblue",
                                        backgroundColor: "skyblue",
                                      },
                                      {
                                        label: "Paediatrics",
                                        data: [19, 10, 10, 15, 0, 29],
                                        borderColor: "coral",
                                        backgroundColor: "#FFCBA4",
                                      },
                                    ],
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
                              />
                            </>
                          )}
                        </AccordionDetails>

                        <AccordionActions>
                          <IconButton
                            onClick={() => {
                              dispatch(destroyAction({ actionId: action._id }));
                            }}
                          >
                            <Delete
                              sx={{
                                color: "#f55f4b",
                              }}
                            />
                          </IconButton>

                          <Button
                            disabled={action.isCompleted}
                            onClick={() => {
                              setOptions(() => {
                                return { ...action, title: "Edit Action" };
                              });

                              handleClick();
                            }}
                          >
                            Edit
                          </Button>
                        </AccordionActions>
                      </Accordion>
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

import { Add, Delete, ExpandMore } from "@mui/icons-material";
import {
	Box,
	IconButton,
	Stack,
	Typography,
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
import { SearchBar, TemporaryLogo } from "../Styles_&_Components/Components";
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

//TODO: Restrict form atrributes characters

export default function MonitorActions({ props }) {
	const organization = useSelector((state) => state.organization);
	const actions = organization?.organizationInfo?.actions || [];

	const initialOptions = {
		title: "Create Action",
		name: "",
		description: "",
		duration: [
			{
				startDate: new Date(),
				endDate: new Date(),
				key: "selection",
			},
		],
		isCompleted: false,
		view: "hospital",
		actionType: "average burnout trend",
	};

	const { appHeight, userToken } = props;
	const [isOpen, setIsOpen] = useState(false);
	const [options, setOptions] = useState(initialOptions);
	const [query, setQuery] = useState("");

	const filteredActions = actions?.filter((action) =>
		action.name.toLowerCase().includes(query.toLowerCase().trim())
	);

	const handleClick = () => {
		setIsOpen(true);
	};

	const dispatch = useDispatch();

	return (
		actions && (
			<Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
				<LeftSidebar />
				<TemporaryLogo />

				<Stack sx={{ ...middle }}>
					<Stack sx={{ ...middleWindow }}>
						<Typography variant="h3" component="div" fontWeight="700">
							Monitor Actions
						</Typography>

						<Stack direction="row" justifyContent="space-between">
							<SearchBar
								props={{
									label: "Search for actions",
									query,
									setQuery,
								}}
							/>

							<Button
								endIcon={<Add />}
								sx={{
									color: "#2ECC71",
									fontWeight: "bold",
									fontSize: "1.1rem",
								}}
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

										<Typography
											variant="div"
											component="div"
											fontWeight="bold"
											width="20%"
										>
											Status
										</Typography>
									</Paper>

									{filteredActions.map((action, index) => {
										return (
											<Accordion
												key={index}
												elevation={2}
												sx={{
													"&:before": { display: "none" },
													bgcolor: "inherit",
													transition: "0.2s ease-in-out",
													"&:hover": {
														bgcolor: "hsl(0, 0%, 96%)",
													},
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
																{action.duration.startDate} -{" "}
																{action.duration.endDate}
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
																	view: action.view,
																	actionType: action.actionType,
																	duration: action.duration,
																}}
															/>
														</>
													)}
												</AccordionDetails>

												<AccordionActions>
													<IconButton
														onClick={() => {
															dispatch(
																destroyAction(
																	{
																		actionId: action._id,
																	},
																	userToken
																)
															);
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
																return {
																	...action,
																	duration: [
																		{
																			startDate: new Date(
																				action.duration.startDate
																			),
																			endDate: new Date(
																				action.duration.endDate
																			),
																			key: "selection",
																		},
																	],
																	title: "Edit Action",
																};
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

							<ActionForm
								props={{ isOpen, setIsOpen, options, setOptions, userToken }}
							/>

							<Box sx={{ height: 5 }}></Box>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		)
	);
}

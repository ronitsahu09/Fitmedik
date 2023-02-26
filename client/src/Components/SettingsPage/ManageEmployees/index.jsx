import React from "react";
import {
  IconButton,
  Grid,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../styles.css";
import ConfirmDialog from "../../ConfirmDialog";
import LoadingPage from "../../LoadingPage";
import Header from "../../Header";
import AddManagerDialog from "../AddManagerDialog";
import {
  AddDepartmentUserApi,
  GetDepartmentUsersApi,
} from "../../../Apis/Hospital/Departments";
import ErrorPage from "../../ErrorPage";
import {
  fixedWindow,
  middle,
  middleWindow,
  AppWrapper,
} from "../../Styles_&_Components/Styles";
import LeftSidebar from "../../LeftSidebar/LeftSidebar";

const ManageEmployees = ({ props }) => {
  const [employees, setEmployees] = React.useState([]);
  const [emails, setEmails] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const { userToken } = props;

  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [addOpen, setAddOpen] = React.useState(false);

  const { departmentId } = useParams();

  const location = useLocation();

  const department = location.state.departmentName;

  const delEmail = React.useRef(null);

  const GetEmployees = async () => {
    GetDepartmentUsersApi(userToken, departmentId, {
      setLoading,
      setError,
      setErrorText,
      setAddOpen,
      setEmails,
      setEmployees,
    });
  };

  const AddEmployee = async (emails) => {
    console.log(departmentId);
    AddDepartmentUserApi(userToken, departmentId, emails, {
      setLoading,
      setError,
      setErrorText,
      setAddOpen,
      setEmails,
      setEmployees,
    });
  };

  const DeleteEmployee = async (email) => {
    GetEmployees();
  };

  React.useEffect(() => {
    GetEmployees();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Stack sx={{ ...AppWrapper, height: "100vh" }} direction="row">
        <LeftSidebar />
        <Stack sx={{ ...middle }}>
          <Stack sx={{ ...middleWindow }}>
            <Stack sx={{ ...fixedWindow }}>
              <Stack gap={3} mt={3}>
                <Stack direction="column" alignItems="center" gap="0.5rem">
                  <div style={{ height: "100%", width: "100%" }}>
                    {loading === true ? (
                      <LoadingPage />
                    ) : error === true ? (
                      <ErrorPage errorText={errorText} onRetry={GetEmployees} />
                    ) : (
                      <div>
                        <Grid container>
                          <Grid container item xs={12} alignItems="center">
                            <Header
                              navigate={navigate}
                              title={`Manage Employees for ${department}`}
                            />
                            <Grid
                              container
                              item
                              xs={12}
                              style={{
                                border: "0.5px black",
                                borderStyle: "solid none",
                              }}
                              sx={{ p: 2 }}
                            >
                              <Grid item xs={5}>
                                <Typography variant="h6" fontWeight="800">
                                  E-mail
                                </Typography>
                              </Grid>
                              <Grid item xs={5}>
                                <Typography variant="h6" fontWeight="800">
                                  Status
                                </Typography>
                              </Grid>
                              <Grid item xs={2}>
                                <Typography variant="h6" fontWeight="800">
                                  Actions
                                </Typography>
                              </Grid>
                            </Grid>
                            {employees.map((val, index) => (
                              <Grid
                                container
                                item
                                xs={12}
                                key={index}
                                sx={{
                                  p: 2,
                                }}
                                className={
                                  index === employees.length - 1
                                    ? "inner-settings-item inner-settings-item-bottom"
                                    : "inner-settings-item"
                                }
                              >
                                <Grid item xs={5}>
                                  <Typography variant="h6" fontWeight="100">
                                    {val.email}
                                  </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <Typography variant="h6">
                                    {val.status ? (
                                      <Chip
                                        color="success"
                                        label="Active"
                                        variant="outlined"
                                      />
                                    ) : (
                                      <Chip
                                        color="error"
                                        label="Inactive"
                                        variant="outlined"
                                      />
                                    )}
                                  </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                  <IconButton
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      delEmail.current = val.email;
                                      setConfirmOpen(true);
                                    }}
                                  >
                                    <Delete />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "fixed",
                            bottom: 50,
                            right: 50,
                            borderRadius: 99,
                          }}
                        >
                          <Button
                            variant="contained"
                            color="success"
                            startIcon={<Add />}
                            size="large"
                            sx={{ mr: 1 }}
                            onClick={() => setAddOpen(true)}
                          >
                            Add employees
                          </Button>
                        </div>

                        {confirmOpen === true && (
                          <ConfirmDialog
                            open={confirmOpen}
                            header={"Employee will be removed"}
                            text={
                              "The employee will be removed and this action cannot be reversed."
                            }
                            onCancel={() => setConfirmOpen(false)}
                            onConfirm={() => {
                              setConfirmOpen(false);
                              DeleteEmployee(delEmail.current);
                            }}
                          />
                        )}

                        {addOpen && (
                          <AddManagerDialog
                            open={addOpen}
                            onCancel={() => setAddOpen(false)}
                            onConfirm={(_, emails) => AddEmployee(emails)}
                            addedData={{ emails, department }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default ManageEmployees;

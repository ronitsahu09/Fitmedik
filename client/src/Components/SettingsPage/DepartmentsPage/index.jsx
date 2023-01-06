import React from "react";
import { Grid, Typography, Button, IconButton } from "@mui/material";
import { Add, KeyboardArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import AddManagerDialog from "../AddManagerDialog";
import LoadingPage from "../../LoadingPage";
import Header from "../../Header";

const DepartmentsPage = () => {
  const [departments, setDepartments] = React.useState([{ name: "" }]);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const [addOpen, setAddOpen] = React.useState(false);

  const GetDepartments = async () => {
    setLoading(false);
    setError(false);
    setErrorText("");

    setAddOpen(false);

    setDepartments([{ name: "abc" }]);
  };

  const AddEmployee = async (department, emails) => {
    GetDepartments();
  };

  React.useEffect(() => {
    GetDepartments();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {loading === true ? (
        <LoadingPage />
      ) : (
        <div>
          <Grid container sx={{ pt: 4, pb: 4 }}>
            <Grid item xs={1} />
            <Grid container item xs={10} alignItems="center">
              <Header navigate={navigate} title="Departments" />

              {departments.map((val, index) => (
                <Grid
                  container
                  item
                  xs={12}
                  key={index}
                  sx={{
                    p: 2,
                  }}
                  className={
                    index === departments.length - 1
                      ? "settings-item settings-item-bottom"
                      : "settings-item"
                  }
                  onClick={() => navigate(`/employees/${val.name}`)}
                >
                  <Grid container item xs={10} alignItems="center">
                    <Typography variant="h6" fontWeight="100">
                      {val.name}
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={2}
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <IconButton>
                      <KeyboardArrowRight />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={1} />
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
              color="error"
              startIcon={<Add />}
              size="large"
              onClick={() => setAddOpen(true)}
              sx={{ borderRadius: 99 }}
            >
              Add departments
            </Button>
          </div>

          {addOpen === true && (
            <AddManagerDialog
              open={addOpen}
              onCancel={() => setAddOpen(false)}
              onConfirm={(department, emails) => {
                setAddOpen(false);
                AddEmployee(department, emails);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DepartmentsPage;

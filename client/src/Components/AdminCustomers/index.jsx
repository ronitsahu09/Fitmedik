import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Edit, Person } from "@mui/icons-material";
import Header from "../Header";
import { GetAllCustomersApi } from "../../Apis/Admin/Customers";
import { GetAdminToken } from "../../Cookies/admin";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

const SeeAllCustomers = () => {
  const [customers, setCustomers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const navigate = useNavigate();

  const token = GetAdminToken();

  const goToCustomer = (customerId, index) => {
    navigate(`/admin/customer/${customerId}`);
  };

  const goToCustomerEdit = (e, customerId, index) => {
    e.stopPropagation();
    navigate(`/admin/edit-customer/${customerId}`);
  };

  const goToCustomerManagers = (e, customerId) => {
    e.stopPropagation();
    navigate(`/admin/customer-managers/${customerId}`);
  };

  const GetAllCustomersFunc = () => {
    if (!token) navigate("/admin/login");
    else
      GetAllCustomersApi(token, {
        setLoading,
        setError,
        setErrorText,
        setCustomers,
      });
  };

  React.useEffect(() => {
    GetAllCustomersFunc();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage onRetry={GetAllCustomersFunc} errorText={errorText} />
      ) : (
        <Grid container sx={{ pt: 4, pb: 4 }}>
          <Grid item xs={1} />
          <Grid container item xs={10}>
            <Header navigate={navigate} title={"All Customers"} />
            <Grid
              container
              item
              xs={12}
              sx={{ border: "0.5px grey", borderStyle: "solid none" }}
              p={2}
            >
              <Grid item xs={3.5}>
                <Typography variant="h6" fontWeight="800">
                  Hospital Name
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <Typography variant="h6" fontWeight="800">
                  Hospital Type
                </Typography>
              </Grid>
              <Grid item xs={3.5}>
                <Typography variant="h6" fontWeight="800">
                  Website Link
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="h6" fontWeight="800">
                  Actions
                </Typography>
              </Grid>
            </Grid>
            {customers.map((val, index) => (
              <Grid
                container
                item
                xs={12}
                key={index}
                className={
                  index === customers.length - 1
                    ? "admin-customers-button admin-customers-button-bottom"
                    : "admin-customers-button"
                }
                p={2}
                onClick={() => goToCustomer(val._id, index)}
              >
                <Grid item xs={3.5}>
                  <Typography variant="h6" fontWeight="200">
                    {val.name}
                  </Typography>
                </Grid>
                <Grid item xs={3.5}>
                  <Typography variant="h6" fontWeight="200">
                    {val.typeOfHospital}
                  </Typography>
                </Grid>
                <Grid item xs={3.5}>
                  <Typography variant="h6" fontWeight="200">
                    {val.website}
                  </Typography>
                </Grid>
                <Grid item xs={0.75}>
                  <IconButton
                    onClick={(e) => goToCustomerEdit(e, val._id, index)}
                  >
                    <Edit />
                  </IconButton>
                </Grid>
                <Grid item xs={0.75}>
                  <IconButton onClick={(e) => goToCustomerManagers(e, val._id)}>
                    <Person />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={1} />
        </Grid>
      )}
    </div>
  );
};

export default SeeAllCustomers;

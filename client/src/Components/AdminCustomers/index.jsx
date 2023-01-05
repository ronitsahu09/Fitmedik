import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Edit, Person } from "@mui/icons-material";
import Header from "../Header";

const SeeAllCustomers = () => {
  const [customers, setCustomers] = React.useState([
    { customerId: 0, name: "1", type: "5", link: "ok.com" },
    { customerId: 1, name: "2", type: "4", link: "ok.com" },
    { customerId: 2, name: "3", type: "3", link: "ok.com" },
    { customerId: 3, name: "4", type: "2", link: "ok.com" },
    { customerId: 4, name: "5", type: "1", link: "ok.com" },
  ]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const navigate = useNavigate();

  const goToCustomer = (customerId) => {
    navigate(`/admin/customer/${customerId}`);
  };

  const goToCustomerEdit = (e, customerId) => {
    e.stopPropagation();
    navigate(`/admin/edit-customer/${customerId}`);
  };

  const goToCustomerManagers = (e, customerId) => {
    e.stopPropagation();
    navigate(`/admin/customer-managers/${customerId}`);
  };

  const GetAllCustomers = async () => {
    // API call here
    setLoading(false);
    setError(false);
    setErrorText("");
  };

  React.useEffect(() => {
    GetAllCustomers();
  }, []);

  return (
    <div>
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
            <Grid item xs={2.5}>
              <Typography variant="h6" fontWeight="800">
                Customer ID
              </Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant="h6" fontWeight="800">
                Hospital Name
              </Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant="h6" fontWeight="800">
                Hospital Type
              </Typography>
            </Grid>
            <Grid item xs={2.5}>
              <Typography variant="h6" fontWeight="800">
                Website Link
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
              onClick={() => goToCustomer(val.customerId)}
            >
              <Grid item xs={2.5}>
                <Typography variant="h6" fontWeight="200">
                  {val.customerId}
                </Typography>
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="h6" fontWeight="200">
                  {val.name}
                </Typography>
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="h6" fontWeight="200">
                  {val.type}
                </Typography>
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="h6" fontWeight="200">
                  {val.link}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  onClick={(e) => goToCustomerEdit(e, val.customerId)}
                >
                  <Edit />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  onClick={(e) => goToCustomerManagers(e, val.customerId)}
                >
                  <Person />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default SeeAllCustomers;

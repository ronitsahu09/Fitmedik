import React from "react";
import { Grid, Typography } from "@mui/material";
import "./styles.css";
import { useNavigate } from "react-router-dom";

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
    navigate("/admin/onboard-customer", { state: { customerId } });
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
      <Grid container>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Grid item xs={12} sx={{ mt: 6, mb: 6 }}>
            <Typography variant="h2">All customers</Typography>
          </Grid>
          {customers.map((val, index) => (
            <Grid
              container
              item
              xs={12}
              key={index}
              className="admin-customers-button"
              p={2}
              sx={{ mt: 1, mb: 1 }}
              onClick={() => goToCustomer(val.customerId)}
            >
              <Grid item xs={3}>
                <Typography variant="h6" color="white">
                  <span style={{ fontWeight: "200" }}>Customer ID: </span>
                  {val.customerId}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" color="white">
                  <span style={{ fontWeight: "200" }}>Name: </span>
                  {val.name}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" color="white">
                  <span style={{ fontWeight: "200" }}>Type: </span>
                  {val.type}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" color="white">
                  <span style={{ fontWeight: "200" }}>Link: </span>
                  {val.link}
                </Typography>
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

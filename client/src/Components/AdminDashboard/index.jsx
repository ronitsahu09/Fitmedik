import React from "react";
import { Grid, Typography } from "@mui/material";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { GetAdminToken } from "../../Cookies/admin";

const AdminDashboard = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = GetAdminToken();
    if (!token) navigate("/admin/login");
  }, []);

  const addCustomer = () => {
    navigate("/admin/onboard-customer");
  };

  const seeAllCustomers = () => {
    navigate("/admin/all-customers");
  };

  const addTreatmentPartner = () => {
    navigate("/admin/add-treatment-partner");
  };

  const seeAllTPs = () => {
    navigate("/admin/all-treatment-partners");
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Grid item xs={12} sx={{ mt: 6, mb: 6 }}>
            <Typography variant="h2" sx={{ fontWeight: "900" }}>
              Admin Dashboard
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid container item xs={10} spacing={3}>
          <Grid container item xs={12} md={6} lg={6}>
            <div
              className="admin-dashboard-button"
              onClick={() => addCustomer()}
            >
              <Typography variant="h6" color="white" sx={{ m: 6 }}>
                Add a customer
              </Typography>
            </div>
          </Grid>
          <Grid container item xs={12} md={6} lg={6}>
            <div
              className="admin-dashboard-button"
              onClick={() => seeAllCustomers()}
            >
              <Typography variant="h6" color="white" sx={{ m: 6 }}>
                See all customers
              </Typography>
            </div>
          </Grid>
          <Grid container item xs={12} md={6} lg={6}>
            <div
              className="admin-dashboard-button"
              onClick={() => addTreatmentPartner()}
            >
              <Typography variant="h6" color="white" sx={{ m: 6 }}>
                Add treatment partner
              </Typography>
            </div>
          </Grid>
          <Grid container item xs={12} md={6} lg={6}>
            <div className="admin-dashboard-button" onClick={() => seeAllTPs()}>
              <Typography variant="h6" color="white" sx={{ m: 6 }}>
                See all treatment partners
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default AdminDashboard;

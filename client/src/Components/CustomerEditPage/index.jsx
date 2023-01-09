import { Button, Box, Alert, Snackbar } from "@mui/material";
import { ArrowBack, ArrowForward, RestartAlt, Send } from "@mui/icons-material";
import React from "react";
import HospitalSection from "./HospitalSection";
import "./styles.css";
import {
  validateHospSection,
  validateOpdtSection,
} from "../CustomerOnboardingForm/validate";
import OperationalSection from "./OperationalSection";
import { useLocation, useNavigate } from "react-router-dom";
import { GetAdminToken } from "../../Cookies/admin";
import { EditCustomerApi } from "../../Apis/Admin/Customers";

const HOSP_SECTION = 0;
const OPDT_SECTION = 1;

const CustomerEditPage = () => {
  const [mode, setMode] = React.useState(HOSP_SECTION);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const GetCustomerData = () => {
    const data = location.state.customer;
    setHospitalDetails(data);
    setOpdtDetails(data.operational_details[0]);
    originalHospitalDetails.current = data;
    originalOpdtDetails.current = data.operational_details;
  };

  React.useEffect(() => {
    const token = GetAdminToken();
    if (!token) navigate("/admin/login");
    else GetCustomerData();
  }, []);

  const EditCustomerData = () => {
    const data = {
      ...hospDetails,
      operational_details: opdtDetails,
      documents: [],
      active_state: true,
      id: hospDetails._id,
    };
    console.log(data);
    const res = EditCustomerApi(GetAdminToken(), data, {
      setLoading,
      setError,
      setErrorText,
    });
    if (res) navigate("/admin/dashboard");
  };

  const [hospDetails, setHospitalDetails] = React.useState({
    _id: "",
    name: "",
    employee_size: "",
    typeOfHospital: "",
    city: "",
    country: "",
    website: "",
    subscription_size: "",
    location: "",
  });
  const [hospDetailsError, setHospitalDetailsError] = React.useState({
    name: "",
    employeeSize: "",
    type: "",
    city: "",
    country: "",
    link: "",
    subscriptionCount: "",
  });

  const [opdtDetails, setOpdtDetails] = React.useState({
    annualSalNurse: "",
    annualSalPhysician: "",
    annualSalPhysicianSupport: "",
    annualSalTechnician: "",
    annualSalAdminManagement: "",
    noOfBeds: "",
    averageOccupancy: 0,
    avgOpd: "",
    avgIpd: "",
  });
  const [opdtDetailsError, setOpdtDetailsError] = React.useState({
    annualSalNurse: "",
    annualSalPhysician: "",
    annualSalPhysicianSupport: "",
    annualSalTechnician: "",
    annualSalAdminManagement: "",
    noOfBeds: "",
    averageOccupancy: "",
    avgOpd: "",
    avgIpd: "",
  });

  const originalHospitalDetails = React.useRef(hospDetails);
  const originalOpdtDetails = React.useRef(opdtDetails);

  const next = () => {
    let isValid = false;
    if (mode === HOSP_SECTION) {
      isValid = validateHospSection(
        hospDetails,
        hospDetailsError,
        setHospitalDetailsError
      );
    } else {
      isValid = validateOpdtSection(
        opdtDetails,
        opdtDetailsError,
        setOpdtDetailsError
      );
    }

    if (isValid && mode === OPDT_SECTION) {
      // API call for submitting all data
      EditCustomerData();
    } else if (isValid) {
      setMode(mode + 1);
    }
  };

  const prev = () => {
    if (mode !== HOSP_SECTION) {
      setMode(mode - 1);
    }
  };

  const reset = () => {
    setMode(HOSP_SECTION);

    setHospitalDetails(originalHospitalDetails.current);
    setHospitalDetailsError({
      name: "",
      employeeSize: "",
      type: "",
      city: "",
      country: "",
      link: "",
      subscriptionCount: "",
    });

    setOpdtDetails(originalOpdtDetails.current);
    setOpdtDetailsError({
      annualSalNurse: "",
      annualSalPhysician: "",
      annualSalPhysicianSupport: "",
      annualSalTechnician: "",
      annualSalAdminManagement: "",
      noOfBeds: "",
      averageOccupancy: "",
      avgOpd: "",
      avgIpd: "",
    });
  };

  return (
    <div>
      {mode === HOSP_SECTION && (
        <HospitalSection
          hospDetails={hospDetails}
          hospDetailsError={hospDetailsError}
          setHospDetails={setHospitalDetails}
        />
      )}

      {mode === OPDT_SECTION && (
        <OperationalSection
          opdtDetails={opdtDetails}
          opdtDetailsError={opdtDetailsError}
          setOpdtDetails={setOpdtDetails}
        />
      )}

      <Box
        sx={{
          position: "fixed",
          bottom: 50,
          right: 50,
        }}
      >
        <Button
          onClick={reset}
          color="primary"
          endIcon={<RestartAlt />}
          variant="contained"
          sx={{ borderRadius: 99, marginLeft: 0.5, marginRight: 0.5 }}
          disabled={loading}
        >
          Reset
        </Button>

        <Button
          onClick={prev}
          color="error"
          startIcon={<ArrowBack />}
          variant="contained"
          sx={{ borderRadius: 99, marginLeft: 0.5, marginRight: 0.5 }}
          disabled={mode === HOSP_SECTION || loading}
        >
          Previous
        </Button>

        <Button
          onClick={next}
          color="success"
          endIcon={mode === OPDT_SECTION ? <Send /> : <ArrowForward />}
          variant="contained"
          sx={{ borderRadius: 99, marginLeft: 0.5, marginRight: 0.5 }}
          disabled={loading}
        >
          {mode === OPDT_SECTION ? "Submit" : "Next"}
        </Button>
      </Box>

      {error && (
        <Snackbar
          open={error}
          autoHideDuration={5000}
          onClose={() => setError(false)}
        >
          <Alert
            onClose={() => setError(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {errorText}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default CustomerEditPage;

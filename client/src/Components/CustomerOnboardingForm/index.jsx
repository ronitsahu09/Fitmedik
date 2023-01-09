import { Button, Box, Snackbar, Alert } from "@mui/material";
import { ArrowBack, ArrowForward, RestartAlt, Send } from "@mui/icons-material";
import React from "react";
import HospitalSection from "./HospitalSection";
import "./styles.css";
import {
  validateHospSection,
  validateManagerSection,
  validateOpdtSection,
} from "./validate";
import ManagerSection from "./ManagerSection";
import OperationalSection from "./OperationalSection";
import { AddCustomerApi } from "../../Apis/Admin/Customers";
import { GetAdminToken } from "../../Cookies/admin";
import { useNavigate } from "react-router-dom";

const HOSP_SECTION = 0;
const MGER_SECTION = 1;
const OPDT_SECTION = 2;

const CustomerOnboardingFormPage = () => {
  const ref = React.useRef(null);
  const [mode, setMode] = React.useState(HOSP_SECTION);
  const [open, setOpen] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    const token = GetAdminToken();
    if (!token) navigate("/admin/login");
  }, []);

  const AddCustomerData = async () => {
    console.log(managerDetails);
    const data = {
      ...hospDetails,
      hospital_manager: managerDetails,
      operational_details: opdtDetails,
      documents: [],
      active_state: true,
      poc_manager: managerDetails[0],
    };
    const res = AddCustomerApi(GetAdminToken(), data, {
      setLoading,
      setError,
      setErrorText,
    });
    if (res) navigate("/admin/dashboard");
  };

  const [hospDetails, setHospitalDetails] = React.useState({
    name: "",
    employee_size: "",
    typeOfHospital: "",
    city: "",
    country: "",
    website: "",
    subscription_size: 0,
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
    location: "",
  });

  const [managerDetails, setManagerDetails] = React.useState([
    {
      name: "",
      title: "",
      email: "",
      index: 0,
      validated: false,
    },
  ]);

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

  const next = () => {
    let isValid = false;
    if (mode === HOSP_SECTION) {
      isValid = validateHospSection(
        hospDetails,
        hospDetailsError,
        setHospitalDetailsError
      );
    } else if (mode === MGER_SECTION) {
      isValid = validateManagerSection(managerDetails);
      if (managerDetails.length === 0) {
        setErrorMsg("There must be atleast one manager");
        setOpen(true);
        isValid = false;
      } else if (!isValid) {
        setErrorMsg("Please save the highlighted fields");
        setOpen(true);
      }
    } else {
      isValid = validateOpdtSection(
        opdtDetails,
        opdtDetailsError,
        setOpdtDetailsError
      );
    }

    if (isValid && mode === OPDT_SECTION) {
      // API call for submitting all data
      AddCustomerData();
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

    setHospitalDetails({
      name: "",
      employee_size: "",
      typeOfHospital: "",
      city: "",
      country: "",
      website: "",
      subscription_size: 0,
    });
    setHospitalDetailsError({
      name: "",
      employeeSize: "",
      type: "",
      city: "",
      country: "",
      link: "",
      subscriptionCount: "",
    });

    setManagerDetails([
      {
        name: "",
        title: "",
        email: "",
        index: 0,
        validated: false,
      },
    ]);

    setOpdtDetails({
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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div ref={ref}>
      {mode === HOSP_SECTION && (
        <HospitalSection
          hospDetails={hospDetails}
          hospDetailsError={hospDetailsError}
          setHospDetails={setHospitalDetails}
        />
      )}
      {mode === MGER_SECTION && (
        <ManagerSection
          managerDetails={managerDetails}
          setManagerDetails={setManagerDetails}
        />
      )}
      {mode === OPDT_SECTION && (
        <OperationalSection
          opdtDetails={opdtDetails}
          opdtDetailsError={opdtDetailsError}
          setOpdtDetails={setOpdtDetails}
        />
      )}

      {open && (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMsg}
          </Alert>
        </Snackbar>
      )}

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
    </div>
  );
};

export default CustomerOnboardingFormPage;

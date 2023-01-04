import { Button, Box, Snackbar, Alert } from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  Edit,
  RestartAlt,
  Send,
} from "@mui/icons-material";
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
import { useLocation } from "react-router-dom";

const HOSP_SECTION = 0;
const MGER_SECTION = 1;
const OPDT_SECTION = 2;

export const EDIT = "EDIT";
export const ADD = "ADD";
export const READ = "READ";

const CustomerOnboardingFormPage = () => {
  const ref = React.useRef(null);
  const [mode, setMode] = React.useState(HOSP_SECTION);
  const [open, setOpen] = React.useState(false);
  const [adminMode, setAdminMode] = React.useState(ADD);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const wasAdded = React.useRef(false);

  const location = useLocation();

  const GetCustomeData = async (id) => {
    setLoading(false);
    setError(false);
    setErrorText("");
  };

  React.useState(() => {
    try {
      const customerId = location.state.customerId;

      if (customerId) {
        // Call API call
        setAdminMode(READ);
        GetCustomeData(customerId);
        wasAdded.current = true;
      } else {
        setAdminMode(ADD);
        setLoading(false);
        setError(false);
        setErrorText("");
        wasAdded.current = false;
      }
    } catch (e) {
      setError(true);
      setErrorText("An error occured");
      setLoading(false);
    }
  }, []);

  const [hospDetails, setHospitalDetails] = React.useState({
    name: "",
    employeeSize: "",
    type: "",
    city: "",
    country: "",
    link: "",
    subscriptionCount: 0,
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

  const originalHospDetails = React.useRef(hospDetails);
  const originalManagerDetails = React.useRef(managerDetails);
  const originalOpdtDetails = React.useRef(opdtDetails);

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

    if (wasAdded.current) setAdminMode(READ);
    else setAdminMode(ADD);

    setHospitalDetails(originalHospDetails);
    setHospitalDetailsError({
      name: "",
      employeeSize: "",
      type: "",
      city: "",
      country: "",
      link: "",
      subscriptionCount: "",
    });

    setManagerDetails(originalManagerDetails);

    setOpdtDetails(originalOpdtDetails);
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

      <Box
        sx={{
          position: "fixed",
          bottom: 50,
          right: 50,
        }}
      >
        {adminMode !== READ && (
          <Button
            onClick={reset}
            color="primary"
            endIcon={<RestartAlt />}
            variant="contained"
            sx={{ borderRadius: 99, marginLeft: 0.5, marginRight: 0.5 }}
          >
            Reset
          </Button>
        )}
        <Button
          onClick={prev}
          color="error"
          startIcon={<ArrowBack />}
          variant="contained"
          sx={{ borderRadius: 99, marginLeft: 0.5, marginRight: 0.5 }}
          disabled={mode === HOSP_SECTION}
        >
          Previous
        </Button>
        {adminMode === READ && (
          <Button
            onClick={() => setAdminMode(EDIT)}
            color="primary"
            endIcon={<Edit />}
            variant="contained"
            sx={{ borderRadius: 99, marginLeft: 0.5, marginRight: 0.5 }}
          >
            Edit
          </Button>
        )}
        {(mode !== OPDT_SECTION || adminMode !== READ) && (
          <Button
            onClick={next}
            color="success"
            endIcon={mode === OPDT_SECTION ? <Send /> : <ArrowForward />}
            variant="contained"
            sx={{ borderRadius: 99, marginLeft: 0.5, marginRight: 0.5 }}
          >
            {mode === OPDT_SECTION ? "Submit" : "Next"}
          </Button>
        )}
      </Box>
    </div>
  );
};

export default CustomerOnboardingFormPage;

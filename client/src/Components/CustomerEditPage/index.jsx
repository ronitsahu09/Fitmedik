import { Button, Box } from "@mui/material";
import { ArrowBack, ArrowForward, RestartAlt, Send } from "@mui/icons-material";
import React from "react";
import HospitalSection from "./HospitalSection";
import "./styles.css";
import {
  validateHospSection,
  validateOpdtSection,
} from "../CustomerOnboardingForm/validate";
import OperationalSection from "./OperationalSection";
import { useParams } from "react-router-dom";

const HOSP_SECTION = 0;
const OPDT_SECTION = 1;

const CustomerOnboardingFormPage = () => {
  const [mode, setMode] = React.useState(HOSP_SECTION);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const customerId = React.useRef(null);
  const { id } = useParams();
  customerId.current = id;

  const GetCustomerData = () => {
    console.log(customerId.current);
    // API Call
    setLoading(false);
    setError(false);
    setErrorText(false);
  };

  React.useEffect(() => {
    GetCustomerData();
  }, []);

  const EditCustomerData = () => {
    setLoading(false);
    setError(false);
    setErrorText(false);
  };

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
        >
          Reset
        </Button>

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

        <Button
          onClick={next}
          color="success"
          endIcon={mode === OPDT_SECTION ? <Send /> : <ArrowForward />}
          variant="contained"
          sx={{ borderRadius: 99, marginLeft: 0.5, marginRight: 0.5 }}
        >
          {mode === OPDT_SECTION ? "Submit" : "Next"}
        </Button>
      </Box>
    </div>
  );
};

export default CustomerOnboardingFormPage;

import { Button, Box } from "@mui/material";
import { ArrowBack, ArrowForward, RestartAlt, Send } from "@mui/icons-material";
import React from "react";
import HospitalSection from "./HospitalSection";
import "./styles.css";
import { validateHospSection, validateManagerSection } from "./validate";
import ManagerSection from "./ManagerSection";

const HOSP_SECTION = 0;
const MGER_SECTION = 1;
const OPDT_SECTION = 2;

const CustomerOnboardingFormPage = () => {
  const ref = React.useRef(null);
  const [mode, setMode] = React.useState(HOSP_SECTION);

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

  const next = () => {
    let isValid = false;
    if (mode === HOSP_SECTION) {
      isValid = validateHospSection(
        hospDetails,
        hospDetailsError,
        setHospitalDetailsError
      );
      isValid = true;
    } else if (mode === MGER_SECTION) {
      isValid = validateManagerSection(managerDetails);
      isValid = true;
    } else {
      isValid = true;
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

    setHospitalDetails({
      name: "",
      employeeSize: "",
      type: "",
      city: "",
      country: "",
      link: "",
      subscriptionCount: 0,
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
      },
    ]);
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
          {mode === OPDT_SECTION ? "Submit" : "Continue"}
        </Button>
      </Box>
    </div>
  );
};

export default CustomerOnboardingFormPage;
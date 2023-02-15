import { Button, Box, Snackbar, Alert } from "@mui/material";
import { ArrowBack, ArrowForward, RestartAlt, Send } from "@mui/icons-material";
import React from "react";
import HospitalSection from "./HospitalSection";
import "./styles.css";
import { validateHospSection, validateOpdtSection } from "./validate";
import ManagerSection from "./ManagerSection";
import OperationalSection from "./OperationalSection";
import TreatmentPartnersAdd from "./TreatmentPartners";
import { AddCustomerApi } from "../../Apis/Admin/Customers";
import { GetAdminToken } from "../../Cookies/admin";
import { useNavigate } from "react-router-dom";

const HOSP_SECTION = 0;
const MGER_SECTION = 1;
const TRPT_SECTION = 2;
const OPDT_SECTION = 3;

const CustomerOnboardingFormPage = () => {
  const ref = React.useRef(null);
  const [mode, setMode] = React.useState(HOSP_SECTION);
  const [open, setOpen] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const [selectedTreatmentPartners, setSelectedTreatmentPartners] =
    React.useState([]);

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
      partners: selectedTreatmentPartners,
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
    documents: "",
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
    documents: "",
  });

  const [managerDetails, setManagerDetails] = React.useState([]);

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
    let isValid = true;
    if (mode === HOSP_SECTION) {
      isValid = validateHospSection(
        hospDetails,
        hospDetailsError,
        setHospitalDetailsError
      );
    } else if (mode === MGER_SECTION) {
      if (managerDetails.length === 0) {
        setErrorMsg("There must be atleast one manager");
        setOpen(true);
        isValid = false;
      }
    } else if (mode === OPDT_SECTION) {
      isValid = validateOpdtSection(
        opdtDetails,
        opdtDetailsError,
        setOpdtDetailsError
      );
    } else {
      isValid = true;
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
      location: "",
    });
    setHospitalDetailsError({
      name: "",
      employeeSize: "",
      type: "",
      city: "",
      country: "",
      link: "",
      subscriptionCount: "",
      location: "",
    });

    setManagerDetails([]);

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

  const save = (lastSavedRef, name, email, title, index, validated) => {
    const temp = [];
    managerDetails.forEach((val) => {
      if (val.index === index && validated) {
        temp.push({
          name,
          title,
          email,
          index: index,
          validated: true,
        });
        lastSavedRef.current = {
          name,
          title,
          email,
          index: index,
          validated: true,
        };
      } else temp.push(val);
    });
    setManagerDetails(temp);
  };

  const remove = (index) => {
    console.log(index);
    console.log(managerDetails);
    const temp = managerDetails.filter((_, idx) => idx !== index);
    setManagerDetails(temp);
    console.log(temp);
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
          save={save}
          remove={remove}
        />
      )}
      {mode === TRPT_SECTION && (
        <TreatmentPartnersAdd
          selectedTreatmentPartners={selectedTreatmentPartners}
          setSelectedTreatmentPartners={setSelectedTreatmentPartners}
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

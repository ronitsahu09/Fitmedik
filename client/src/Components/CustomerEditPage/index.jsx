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
import TreatmentPartnersEdit from "./TreatmentPartners";
import { useNavigate, useParams } from "react-router-dom";
import { GetAdminToken } from "../../Cookies/admin";
import {
  EditCustomerApi,
  GetCustomerByIdApi,
} from "../../Apis/Admin/Customers";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

const HOSP_SECTION = 0;
const TRPT_SECTION = 1;
const OPDT_SECTION = 2;

const CustomerEditPage = () => {
  const [mode, setMode] = React.useState(HOSP_SECTION);

  const [selectedTreatmentPartners, setSelectedTreatmentPartners] =
    React.useState();

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const GetCustomerData = () => {
    GetCustomerByIdApi(id, GetAdminToken(), {
      setLoading,
      setError,
      setErrorText,
      setHospitalDetails,
      setOpdtDetails,
      setSelectedTreatmentPartners,
    });
  };

  React.useEffect(() => {
    const token = GetAdminToken();
    if (!token) navigate("/admin/login");
    else GetCustomerData();
  }, []);

  const EditCustomerData = async () => {
    const data = {
      ...hospDetails,
      operational_details: opdtDetails,
      active_state: true,
      id,
      partners: selectedTreatmentPartners,
    };
    const res = await EditCustomerApi(GetAdminToken(), data, {
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
  const originalSelectedTP = React.useRef(selectedTreatmentPartners);

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
      location: "",
      documents: "",
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

    setSelectedTreatmentPartners(originalSelectedTP.current);
  };

  return (
    <div>
      {loading ? (
        <LoadingPage loadingText={"Loading..."} />
      ) : error ? (
        <ErrorPage errorText={errorText} onRetry={GetCustomerData} />
      ) : (
        <div>
          {mode === HOSP_SECTION && (
            <HospitalSection
              hospDetails={hospDetails}
              hospDetailsError={hospDetailsError}
              setHospDetails={setHospitalDetails}
            />
          )}
          {mode === TRPT_SECTION && (
            <TreatmentPartnersEdit
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
      )}
    </div>
  );
};

export default CustomerEditPage;

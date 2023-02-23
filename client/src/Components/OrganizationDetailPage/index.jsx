import React from "react";
import HospitalSection from "./HospitalSection";
import "./styles.css";
import ManagerSection from "./ManagerSection";
import OperationalSection from "./OperationalSection";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import { GetOrganizationApi } from "../../Apis/Hospital/Organization";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import { Stack } from "@mui/material";
import {
  fixedWindow,
  middle,
  middleWindow,
  AppWrapper,
} from "../Styles_&_Components/Styles";

const OrganizationDetailPage = ({ props }) => {
  const { userToken } = props;

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");

  const GetCustomerData = () => {
    GetOrganizationApi(userToken, {
      setLoading,
      setError,
      setErrorText,
      setHospitalDetails,
      setManagerDetails,
      setOpdtDetails,
    });
  };

  React.useEffect(() => {
    GetCustomerData();
  }, []);

  const [hospDetails, setHospitalDetails] = React.useState({
    name: "",
    employee_size: "",
    typeofHospital: "",
    city: "",
    country: "",
    website: "",
    subscription_size: 0,
    documents: "",
  });

  const [managerDetails, setManagerDetails] = React.useState([
    {
      name: "",
      title: "",
      email: "",
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

  return (
    <div>
      <Stack sx={{ ...AppWrapper, height: "100vh" }} direction="row">
        <LeftSidebar />
        <Stack sx={{ ...middle }}>
          <Stack sx={{ ...middleWindow }}>
            <Stack sx={{ ...fixedWindow }}>
              <Stack gap={3}>
                <Stack direction="column" alignItems="center" gap="0.5rem">
                  <div style={{ width: "100%" }}>
                    {loading ? (
                      <LoadingPage loadingText="Fetching Details..." />
                    ) : error ? (
                      <ErrorPage
                        errorText={errorText}
                        onRetry={GetCustomerData}
                      />
                    ) : (
                      <div>
                        <HospitalSection hospDetails={hospDetails} />
                        <ManagerSection managerDetails={managerDetails} />
                        <OperationalSection opdtDetails={opdtDetails} />
                      </div>
                    )}
                  </div>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default OrganizationDetailPage;

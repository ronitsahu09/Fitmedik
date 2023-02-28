import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./HomePage/Home";
import Analytics from "./Analytics/Analytics";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import DepartmentAnalytics from "./DepartmentAnalytics/DepartmentAnalytics";
import CostSavings from "./CostSavings/CostSavings";
import Survey from "./Survey/Survey";
import Notifications from "./Notifications/Notifications";
import { getOrganization } from "../Redux/Organization";
import { useDispatch } from "react-redux";
import MonitorActions from "./MonitorActions/MonitorActions";
import LoginScreen from "./Login/Login";
import ForgotPasswordScreen from "./ForgotPassword/ForgotPassword";
import SetupPasswordScreen from "./SetupPassword/SetupPassword";
import SettingsPage from "./SettingsPage";
import ManageEmployees from "./SettingsPage/ManageEmployees";
import DepartmentsPage from "./SettingsPage/DepartmentsPage";
import TreatmentPartnersPage from "./TreatmentPartnersPage";
import { GetUserToken } from "../Cookies/index";
import { useNavigate } from "react-router-dom";
import OrganizationDetailPage from "./OrganizationDetailPage";
import EventAnalyticsPage from "./EventAnalyticsPage";

function App() {
  const [appHeight, setAppHeight] = useState("100%");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [userToken, setUserToken] = useState(GetUserToken());

  const initialiseUser = () => {
    if (!userToken) {
      if (
        !location.pathname.startsWith("/forgotpassword") &&
        !location.pathname.startsWith("/setupPassword") &&
        !location.pathname.startsWith("/login")
      ) {
        const cookieToken = GetUserToken();
        if (!cookieToken) navigate("/login");
        else setUserToken(cookieToken);
      }
    }
  };

  useEffect(() => {
    initialiseUser();
  }, [location.pathname]);

  useEffect(() => {
    dispatch(getOrganization({ organizationId: "63c95da1317e07dbcc906fa8" }));

    const reportAppHeight = () => {
      setAppHeight(`${window.innerHeight}px`);
    };

    reportAppHeight();

    window.addEventListener("resize", reportAppHeight);
    window.addEventListener("orientationchange", reportAppHeight);

    return () => {
      window.removeEventListener("resize", reportAppHeight, false);
      window.removeEventListener("orientationchange", reportAppHeight);
    };
  }, [dispatch, userToken]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home props={{ appHeight, userToken }} />} />
        <Route
          path="/analytics"
          element={<Analytics props={{ appHeight, userToken }} />}
        />
        <Route
          path="/analytics/:id"
          element={<DepartmentAnalytics props={{ appHeight, userToken }} />}
        />
        <Route
          path="notifications"
          element={<Notifications props={{ appHeight, userToken }} />}
        />

        <Route
          path="costsavings"
          element={<CostSavings props={{ appHeight, userToken }} />}
        />

        <Route
          path="surveyresults"
          element={<Survey props={{ appHeight, userToken }} />}
        />

        <Route
          path="monitoractions"
          element={<MonitorActions props={{ appHeight, userToken }} />}
        />

        <Route
          path="/login"
          element={<LoginScreen props={{ appHeight, setUserToken }} />}
        />

        <Route
          path="/forgotpassword"
          element={<ForgotPasswordScreen props={{ appHeight }} />}
        />

        <Route
          path="/setupPassword/:accessToken"
          element={<SetupPasswordScreen props={{ appHeight }} />}
        />

        <Route
          path="/settings"
          element={<SettingsPage props={{ appHeight, userToken }} />}
        />

        <Route
          path="/employees/:departmentId"
          element={<ManageEmployees props={{ appHeight, userToken }} />}
        />

        <Route
          path="/departments"
          element={<DepartmentsPage props={{ appHeight, userToken }} />}
        />

        <Route
          path="/treatment-partners"
          element={<TreatmentPartnersPage props={{ appHeight, userToken }} />}
        />

        <Route
          path="/organization-details"
          element={<OrganizationDetailPage props={{ appHeight, userToken }} />}
        />

        <Route
          path="/event-analytics"
          element={<EventAnalyticsPage props={{ appHeight }} />}
        />
      </Routes>
    </div>
  );
}

export default App;

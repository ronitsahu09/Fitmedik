import { Routes, Route } from "react-router-dom";
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
import CustomerOnboardingFormPage from "./CustomerOnboardingForm";
import AdminDashboard from "./AdminDashboard";
import SeeAllCustomers from "./AdminCustomers";
import SettingsPage from "./SettingsPage";
import ManageEmployees from "./SettingsPage/ManageEmployees";
import CustomerDetailsPage from "./CustomerDetailsPage/index";
import CustomerEditPage from "./CustomerEditPage/index";
import CustomerManagerEditPage from "./CustomerManagerEditPage";
import DepartmentsPage from "./SettingsPage/DepartmentsPage";

function App() {
  const [appHeight, setAppHeight] = useState("100%");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrganization({ organizationId: "6370c9710c923cf45642e127" }));

    const reportAppHeight = () => {
      setAppHeight(`${window.innerHeight}px`);
    };

    reportAppHeight();

    window.addEventListener("resize", reportAppHeight);
    window.addEventListener("orientationchange", reportAppHeight);

    return () => {
      window.removeEventListener("resize", reportAppHeight, false);
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home props={{ appHeight }} />} />
        <Route
          path="/analytics"
          element={<Analytics props={{ appHeight }} />}
        />
        <Route
          path="/analytics/:id"
          element={<DepartmentAnalytics props={{ appHeight }} />}
        />
        <Route
          path="notifications"
          element={<Notifications props={{ appHeight }} />}
        />

        <Route
          path="costsavings"
          element={<CostSavings props={{ appHeight }} />}
        />

        <Route
          path="surveyresults"
          element={<Survey props={{ appHeight }} />}
        />

        <Route
          path="monitoractions"
          element={<MonitorActions props={{ appHeight }} />}
        />

        <Route path="/login" element={<LoginScreen props={{ appHeight }} />} />

        <Route
          path="/forgotpassword"
          element={<ForgotPasswordScreen props={{ appHeight }} />}
        />

        <Route
          path="/setuppassword"
          element={<SetupPasswordScreen props={{ appHeight }} />}
        />

        <Route
          path="/admin/onboard-customer"
          element={<CustomerOnboardingFormPage props={{ appHeight }} />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard props={appHeight} />}
        />

        <Route
          path="/admin/all-customers"
          element={<SeeAllCustomers props={appHeight} />}
        />

        <Route
          path="/admin/customer/:id"
          element={<CustomerDetailsPage props={{ appHeight }} />}
        />

        <Route
          path="/admin/edit-customer/:id"
          element={<CustomerEditPage props={{ appHeight }} />}
        />

        <Route
          path="/admin/customer-managers/:id"
          element={<CustomerManagerEditPage props={appHeight} />}
        />

        <Route path="/settings" element={<SettingsPage props={appHeight} />} />

        <Route
          path="/employees/:department"
          element={<ManageEmployees props={appHeight} />}
        />

        <Route
          path="/departments"
          element={<DepartmentsPage props={appHeight} />}
        />
      </Routes>
    </div>
  );
}

export default App;

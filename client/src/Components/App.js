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
          path="/onboard-customer"
          element={<CustomerOnboardingFormPage props={{ appHeight }} />}
        />
      </Routes>
    </div>
  );
}

export default App;

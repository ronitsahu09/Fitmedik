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
import CustomerOnboardingFormPage from "./CustomerOnboardingForm";
import AdminDashboard from "./AdminDashboard";
import SeeAllCustomers from "./AdminCustomers";
import SettingsPage from "./SettingsPage";
import ManageEmployees from "./SettingsPage/ManageEmployees";
import CustomerDetailsPage from "./CustomerDetailsPage";
import CustomerEditPage from "./CustomerEditPage";
import CustomerManagerEditPage from "./CustomerManagerEditPage";
import DepartmentsPage from "./SettingsPage/DepartmentsPage";
import AddTreatmentPartner from "./AddTreatmentPartner";
import SeeAllTreatmentPartners from "./AdminTreatmentPartners";
import TreatmentPartnerEditPage from "./TreatmentPartnerEditPage";
import TreatmentPartnerDetailPage from "./TreatmentPartnerDetailPage";
import AdminTPEventPage from "./AdminTPEventPage";
import TreatmentPartnersPage from "./TreatmentPartnersPage";
import AdminLogin from "./AdminLogin";
import { GetUserToken } from "../Cookies/index";
import { useNavigate } from "react-router-dom";
import OrganizationDetailPage from "./OrganizationDetailPage";
import { GetAdminToken } from "../Cookies/admin";
import TreatmentPartnerEventDetailPage from "./AdminEventDescription";
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
        !location.pathname.startsWith("/admin") &&
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

  const initialiseAdmin = () => {
    if (location.pathname.startsWith("/admin") && !GetAdminToken())
      navigate("/admin/login");
  };

  useEffect(() => {
    initialiseUser();
    initialiseAdmin();
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

				<Route path="/admin/login" element={<AdminLogin />} />

				<Route
					path="/admin/onboard-customer"
					element={<CustomerOnboardingFormPage props={{ appHeight }} />}
				/>

				<Route
					path="/admin/dashboard"
					element={<AdminDashboard props={{ appHeight }} />}
				/>

				<Route
					path="/admin/all-customers"
					element={<SeeAllCustomers props={{ appHeight }} />}
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
					element={<CustomerManagerEditPage props={{ appHeight }} />}
				/>

				<Route
					path="/admin/add-treatment-partner"
					element={<AddTreatmentPartner props={{ appHeight }} />}
				/>

				<Route
					path="/admin/all-treatment-partners"
					element={<SeeAllTreatmentPartners props={{ appHeight }} />}
				/>

				<Route
					path="/admin/edit-treatment-partner/:id"
					element={<TreatmentPartnerEditPage props={{ appHeight }} />}
				/>

				<Route
					path="/admin/treatment-partner-detail/:id"
					element={<TreatmentPartnerDetailPage props={{ appHeight }} />}
				/>

				<Route
					path="/admin/treatment-partner-events/:id"
					element={<AdminTPEventPage props={{ appHeight }} />}
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
          path="/admin/eventDescription/:name"
          element={<TreatmentPartnerEventDetailPage props={{ appHeight }} />}
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

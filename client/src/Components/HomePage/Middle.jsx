import "./styles/middle.css";
import DepartmentsAtRisk from "./SubComponents/Departments_At_Risk";
import EmployeeHealthTracker from "./SubComponents/Employee_Health_Tracker";

export default function Middle() {
  return (
    <>
      <div className="name">
        <h1>National Hospital, Dubai</h1>
        <h3>Welcome Back!</h3>
      </div>
      <br /> <br /> <br />
      <h2>Impact of Burnout on operationeal revenue</h2>
      <br />
      <div class="revenue">
        <p>Loses</p>
        <p>Gains</p>
        <p>Net Amount</p>
        <br />
      </div>
      <br />
      <br />
      <h2>Burnout trend in the organization</h2>
      <DepartmentsAtRisk />
      <EmployeeHealthTracker />
    </>
  );
}

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import "../styles/employeeHealthTracker.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmployeeHealthTracker() {

    const stressInfo = {
      danger: 0,
      high: 0,
      medium: 0,
      low: 0,
      safe: 0,
    };
    
  return (
    <div className="eht">
      <div className="title">
        <div className="heading">Employee Health Tracker</div>
        <div className="legends">
          <div className="safe">Safe</div>
          <div className="low">Low</div>
          <div className="medium">Medium</div>
          <div className="high">High</div>
          <div className="danger">Danger</div>
        </div>
      </div>

      <div className="dataWrapper">
        <div className="canvas"></div>
      </div>
    </div>
  );
}

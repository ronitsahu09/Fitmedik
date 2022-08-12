import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import Analytics from "./Analytics/Analytics";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import DepartmentAnalytics from "./DepartmentAnalytics/DepartmentAnalytics";
import CostSavings from "./CostSavings/CostSavings";

function App() {
  const [appHeight, setAppHeight] = useState("100%");

  useEffect(() => {
    const reportAppHeight = () => {
      setAppHeight(`${window.innerHeight}px`);
    };

    reportAppHeight();

    window.addEventListener("resize", reportAppHeight);
    window.addEventListener("orientationchange", reportAppHeight);

    return () => {
      window.removeEventListener("resize", reportAppHeight, false);
    };
  }, []);

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
          element={
            <>
              <a href="/">go back</a>
            </>
          }
        />

        <Route
          path="costsavings"
          element={<CostSavings props={{ appHeight }} />}
        />
      </Routes>
    </div>
  );
}

export default App;

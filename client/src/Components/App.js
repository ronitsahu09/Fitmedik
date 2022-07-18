import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import Analytics from "./Analytics/Analytics";
import "react-circular-progressbar/dist/styles.css";

function App() {
  return (
    <div className="AppWrapper">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

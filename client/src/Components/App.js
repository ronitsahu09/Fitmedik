import { Routes, Route } from "react-router-dom";
import Visualize from "./Visualize/Visualize";
import Home from "./HomePage/Home";
import "react-circular-progressbar/dist/styles.css";


function App() {
  return (
    <div className="AppWrapper">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitalData" element={<Visualize />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

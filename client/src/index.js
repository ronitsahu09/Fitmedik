import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./Theme";
import { ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

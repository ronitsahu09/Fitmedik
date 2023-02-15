import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import OrganizationReducer from "./Redux/Organization";

const store = configureStore({
  reducer: {
    organization: OrganizationReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <Provider store={store}>
          <ThemeProvider theme={Theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);

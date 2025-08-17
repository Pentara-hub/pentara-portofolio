import React from "react";
import ReactDOM from "react-dom/client";
import App from "../resources/js/app";
import { applyInitialTheme } from "./js/utils/theme";

// make sure theme is applied before React paints
applyInitialTheme();

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

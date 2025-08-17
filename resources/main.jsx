import React from "react";
import { createRoot } from "react-dom/client";
import App from "./js/app.jsx";
import "./css/app.css";
import { applyInitialTheme } from "./js/utils/theme";
// make sure theme is applied before React paints
applyInitialTheme();

const root = document.getElementById("root");

createRoot(root).render(<App />);

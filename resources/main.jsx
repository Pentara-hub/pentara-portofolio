import React from "react";
import { createRoot } from "react-dom/client";
import App from "./js/app.jsx";
import "./css/app.css";

// import "./index.css";

// Find the #root div in index.html
const root = document.getElementById("root");

createRoot(root).render(<App />);

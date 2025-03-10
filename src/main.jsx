import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // ✅ Correct Import
import App from "./App";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/globals.css";
import "./assets/styles/main.scss";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);

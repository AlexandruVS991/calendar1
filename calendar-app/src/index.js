import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Asigură-te că folosești corect calea către App.jsx
import "./index.css"; // Stiluri globale, dacă există

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

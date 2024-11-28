import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootELement = document.getElementById("root");

const root = createRoot(rootELement);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

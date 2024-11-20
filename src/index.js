import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // Create a root.
root.render(<App />); // Render the App component.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

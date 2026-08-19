import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 2500,
        style: {
          fontSize: "15px",
          borderRadius: "10px",
          padding: "14px",
        },
      }}
    />

    <App />
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import AuthRoutes from "./router/router.jsx";
import { ContextProvider } from "./components/context/Context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <AuthRoutes />
    </ContextProvider>
  </React.StrictMode>
);

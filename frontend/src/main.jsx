import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className="max-w-7xl mx-auto">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);

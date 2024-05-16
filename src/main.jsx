import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Frontal from "../src/pages/frontal.jsx";
import Team from "../src/pages/team.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontal />
  },
  {
    path: "/team",
    element: <Team />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
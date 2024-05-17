import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Frontal from "../src/pages/frontal.jsx";
import Team from "../src/pages/team.jsx";
import Ricky from "../src/pages/ricky.jsx";
import Derek from "../src/pages/derek.jsx";
import Logan from "../src/pages/logan.jsx";
import Nate from "../src/pages/nate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontal />
  },
  {
    path: "/team",
    element: <Team />
  },
  {
    path: "/ricky",
    element: <Ricky />
  },
  {
    path: "/derek",
    element: <Derek />
  },
  {
    path: "/logan",
    element: <Logan />
  },
  {
    path: "/nate",
    element: <Nate />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
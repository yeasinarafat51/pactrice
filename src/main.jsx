import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import Authprovider from "./Authprovider/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import { ThemeProvider } from "./context/context";
 
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/html",
    element: <HTML />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <App />
 
    </ThemeProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "../src/pages/main/Main";
import About from "./pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: ({ request }) => {
      // console.log(request);
      return null;
    },
  },
  {
    path: "/about",
    element: <About />,
    loader: ({ request }) => {
      console.log(request);
      return null;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

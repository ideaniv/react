import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "../src/pages/main/Main";
import About from "./pages/about/About";
import { Provider } from "react-redux";
import { store } from "./store";
import Arr from "./pages/arr/Arr";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: async ({ request }) => {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          return json;
        });
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
  {
    path: "/arr",
    element: <Arr />,
  },
  {
    path: "*",
    loader: () => {
      return redirect("/");
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import HomeRoute from "./routes/HomeRoute/HomeRoute";
import CountriesRoute from "./routes/CountriesRoute/CountriesRoute";
import ErrorRoute from "./routes/ErrorRoute/ErrorRoute";
import MoreInfoRoute from "./routes/MoreInfoRoute/MoreInfoRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/countries",
        element: <CountriesRoute />,
      },
      {
        path: "/countries/:country",
        element: <MoreInfoRoute />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

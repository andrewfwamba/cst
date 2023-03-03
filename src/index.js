import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./routes/Home";
import Products from "./routes/Products";
import "./App.css";
import ErrorPage from "./routes/error-page";
import Empty from "./routes/default";
import Login from "./routes/Login";

const AppLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Empty /> },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "products",
            element: <Products />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

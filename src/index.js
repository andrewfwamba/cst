import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import './App.css';
import ErrorPage from "./pages/error-page";

const AppLayout = () => (
  <>
    <Sidebar />
    <Outlet/>
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

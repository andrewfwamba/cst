import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./routes/Home";
import Products from "./routes/Products";
import "./App.css";
import "./Utils.css";
import ErrorPage from "./routes/error-page";
import Empty from "./routes/default";
import Login from "./routes/Login";
import Stats from "./routes/Stats";
import Signup from "./routes/Signup";
import Support from "./routes/Support";

const AppLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  // [
  // {
  //   path: "login",
  //   element: <Login />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "signup",
  //   element: <Signup />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/",
  //   element: <AppLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       errorElement: <ErrorPage />,
  //       children: [
  //         { index: true, element: <Empty /> },
  //         {
  //           path: "home",
  //           element: <Home />,
  //         },
  //         {
  //           path: "statistics",
  //           element: <Stats />,
  //         },
  //         {
  //           path: "support",
  //           element: <Support />,
  //         },
  //         {
  //           path: "products",
  //           element: <Products />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // ]
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/statistics" element={<Stats />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

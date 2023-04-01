import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
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
import Stats from "./routes/Stats";
import Support from "./routes/Support";

const AppLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/statistics" element={<Stats />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/support" element={<Support />} />
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

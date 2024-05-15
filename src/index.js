import * as React from "react";
import { createRoot } from "react-dom/client";
import { scroll } from "framer-motion/dom";
import {
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
import About from "./routes/About";
import Policy from "./routes/Policy";
import Footer from "./components/Footer";
import SmoothScroll from "./utilities/scroll";
const progressWheel = document.querySelector(".progress");

scroll((progress) => {
  progressWheel.style.strokeDasharray = `${progress}, 1`;
});

const AppLayout = () => (
  <div className="fadein">
    <SmoothScroll>
      <Sidebar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </SmoothScroll>
  </div>
);

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<ErrorPage />}>
        <Route element={<AppLayout />} errorElement={<ErrorPage />}>
          <Route index element={<Home />} />
          <Route exact path="/statistics" element={<Stats />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/about" element={<About />} />

          <Route />
        </Route>
        <Route exact path="/legalterms" element={<Policy />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

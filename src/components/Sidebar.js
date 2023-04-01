import React, { useState } from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "../App.css";
import { IconContext } from "react-icons";
import { SideBarData } from "./SideBarData";
import Nav from "./Nav";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <Nav showSidebar={showSidebar} />
        {/* <div className="navbar">
          <div className="btn-wrapper">
            <Link to="login" className="btn radius mr-1 bds text-dark">
              {" "}
              Sign In{" "}
            </Link>
            <Link className="btn radius bg-secondary">Get started</Link>
          </div>
        </div> */}
        <nav
          className={
            sidebar
              ? "nav-menu active .box-shadow-left"
              : "nav-menu .box-shadow-left"
          }
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
              <Link to="#" className="logo">
                Crewsoft&trade;
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;

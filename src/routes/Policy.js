import React from "react";
import Refund from "../components/Refund";
import Privacy from "../components/Privacy";

function Policy() {
  return (
    <>
      <div className="text-lg bg-gray-300  text-gray-700 font-bold p-4 text-center md:text-xl md:text-left ">
        <h3 className="border-b border-gray-400 pb-2">Legal Terms</h3>
      </div>
      <Privacy />
      <Refund />
      <div className="w-full flex justify-between px-2 sm:px-10 py-2 text-xs text-gray-700 bg-gray-200">
        <p>&copy; Crewsoft Technologies &trade; {new Date().getFullYear()}</p>
        <p>All Rights Reserved</p>
      </div>
    </>
  );
}

export default Policy;

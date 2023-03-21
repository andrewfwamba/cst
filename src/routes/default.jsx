import React from "react";
import Footer from "../components/Footer";

function Empty() {
  return (
    <>
      <div className="container anime">
        <svg viewBox="0 0 450 50">
          <text className="show-case" y="50">
            Items will appear here
          </text>
        </svg>
      </div>
      <Footer />
    </>
  );
}

export default Empty;

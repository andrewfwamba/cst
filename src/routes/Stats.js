import React from "react";
import Marketing from "../components/Marketing";
import Bargraph from "../utilities/Bargraph";
import Footer from "../components/Footer";
//

function Stats() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-initial mx-8 my-4">
          <p className="text-2xl font-bold">Statistics</p>
        </div>

        <div className="mx-auto inline-flex space-x-8 space-y-2 w-auto">
          <div className="p-4 max-w-xl ring-1 md:flex ring-amber-300 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <Bargraph />
          </div>
        </div>
        <div>
          <Marketing />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Stats;

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
          <div className="p-8 grid w-full lg:grid-cols-2 gap-2 ">
            <div className="ring-gray-400 bg-white ring-1 p-2 lg:p-6 shadow-lg mx-auto hover:shadow-sm w-11/12 lg:w-full hover:cursor-pointer rounded-sm ">
              <h4 className="text-gray-600 text-xl font-bold">Clients</h4>
              <Bargraph />
            </div>
            <div className="bg-gray-200 rounded-sm shadow-xl hover:shadow-inner mx-auto p-6 lg:p-10">
              <h4 className="text-center text-xl font-bold text-gray-700 ">
                Satisfied clients are what we care about.
              </h4>
              <p className="text-blue-900 text-semibold text-lg">
                Join our community and get the best software solutions for your
                business
              </p>
              <p className="text-blue-900 text-semibold text-lg">
                Enterprise level software solutions that scale with your level
                of operation.
              </p>
            </div>
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

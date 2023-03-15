import React from "react";
import Bargraph from "../utilities/Bargraph";
//

function Stats() {
  return (
    <div className="container">
      <div className="">
        <p className="text-2xl font-bold">Statistics</p>
      </div>

      <div className="inline-flex space-x-8 space-y-2 w-auto">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <p>Apple</p>
          </div>

          <div>
            <div class="text-sm font-medium text-black">
              Since the beginning
            </div>
            <p class="text-slate-500">Always at your service</p>
          </div>
        </div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <Bargraph />
        </div>
      </div>
    </div>
  );
}

export default Stats;

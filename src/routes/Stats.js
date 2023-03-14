import React from "react";
import { Bar } from "react-chartjs-2";

function Stats() {
  const data = {
    labels: ["January", "Februrary", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Test data",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
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
          {/* <Bar
          data={data}
          width={100}
          height={50}
          option={{
            maintainAspectRatio: false,
          }}
        /> */}
          <p>This a test for display flex.</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;

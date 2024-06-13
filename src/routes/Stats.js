import React from "react";
import Bargraph from "../utilities/Bargraph";

function Stats() {
  const stats = [
    { id: 1, name: "Active Users", value: "500+" },
    { id: 2, name: "Customer Satisfaction", value: "100%" },
    { id: 3, name: "New users annually", value: "46,000" },
  ];
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
        <div className="bg-white py-4 sm:py-4 mt-2 sm:mt-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;

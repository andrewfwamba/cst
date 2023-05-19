import React from "react";
import { FcKindle, FcMultipleSmartphones } from "react-icons/fc";

function Choice() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-2 p-4">
        {/* Choices 1st */}
        <div className="bg-gray-100 rounded p-2 lg:p-4 lg:mx-0 ">
          <h4 className="text-center sm:text-left px-10 text-base font-bold text-red-500">
            Why Choose us
          </h4>

          <p className="text-center sm:text-left font-semibold sm:mx-10 text-3xl mb-4 text-gray-900">
            What Makes Crewsoft Technologies the Best Software Development
            Company?
          </p>
          {/* Mobile dev portion */}
          <div className="bg-gray-300  rounded p-2 lg:p-4 shadow mb-4 shadow-blue-400 ">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-blue-800 lg:mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              <h2 className="text-lg ml-2 lg:text-2xl font-semibold text-gray-500 lg:ml-4">
                Mobile Apps Development
              </h2>
            </div>

            <div className="px-3 lg:px-11">
              <p className="lg:ml-4 text-gray-600 text-base">
                For both personal and professional usage, we provide platforms
                for Windows, Android, and mobile web.
              </p>
            </div>
          </div>
          {/* Web dev illustration */}
          <div className="bg-gray-300  rounded p-2 lg:p-4 shadow shadow-blue-400 mb-4">
            <div className="flex">
              <FcKindle size={30} />
              <h2 className="text-base ml-2 lg:text-2xl font-semibold text-gray-500 lg:ml-4">
                Web Applications Development
              </h2>
            </div>

            <div className="px-3 lg:px-11">
              <p className="lg:ml-4 text-gray-600 text-base">
                We create web pages and applications that are user-friendly,
                versatile, compliant with enterprise standards, Google search
                engine friendly, and include analytics to track the
                effectiveness of your digital strategy.
              </p>
            </div>
          </div>
          {/* UI/UX */}
          <div className="bg-gray-300  rounded p-2 lg:p-4 shadow shadow-blue-400 ">
            <div className="flex">
              <FcMultipleSmartphones size={30} />
              <h2 className="text-lg ml-2 lg:text-2xl font-semibold text-gray-500 lg:ml-4">
                User experience design
              </h2>
            </div>

            <div className="px-3 lg:px-11">
              <p className="lg:ml-4 text-gray-600 text-base">
                (UXD, UED, or XD) is the process of raising user satisfaction by
                boosting the product's usability, accessibility, and enjoyable
                user experience.
              </p>
            </div>
          </div>
        </div>
        {/* Image illustration */}
        <div>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-700 mx-1 lg:mx-0 rounded p-1.5 mb-8">
            <img
              src="https://unsplash.com/photos/SYTO3xs06fU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxMTI4MTAy&force=true&w=1920"
              alt="Laptops on a table with users around"
              className="rounded"
            />
          </div>
          <div className="text-center">
            <h5 className="text-lg text-gray-800 font-semibold">
              Let's start a project together
            </h5>

            <p className="text-gray-500 text-lg py-4">
              Detailed technical guidance, goods, and services that are adapted
              to your needs both personally and professionally.
            </p>
            <a
              href="/"
              className="p-3 bg-slate-700 rounded-xl text-xs text-gray-300 hover:text-white hover:bg-slate-800 ring-1 ring-gray-400"
            >
              Request A Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choice;

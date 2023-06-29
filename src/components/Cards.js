import React from "react";

function Cards() {
  return (
    <>
      <h3 className="text-center transition-all text-gray-600 text-lg border-dotted border-2 px-4 py-2 font-bold">
        Our Services
      </h3>
      <div className="grid overflow-hidden ease-in-out animate__animated  animate__fadeIn sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-5 lg:px-10 h-full sm:p-6 py-2">
        <div className="w-full hover:-translate-y-1 p-4 relative hover:opacity-100 hover:shadow-blue-300 text-center bg-white border border-gray-200 rounded-lg shadow-2xl hover:shadow-xl sm:p-8 dark:bg-white dark:border-gray-300">
          <h5 className="mb-2 text-xl font-bold  text-gray-900 dark:text-blue-500">
            App Development
          </h5>
          <ul className="flex justify-around text-xs text-gray-700 font-light">
            <li>Android</li>
            <li>| Iphone |</li>
            <li>Hybrid</li>
          </ul>
          <div className="flex justify-around m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="25"
              viewBox="32.163 68.509 203.691 228.155"
              className="h-6 w-6"
            >
              <path
                d="M101.885 207.092c7.865 0 14.241 6.376 14.241 14.241v61.09c0 7.865-6.376 14.24-14.241 14.24-7.864 0-14.24-6.375-14.24-14.24v-61.09c0-7.864 6.376-14.24 14.24-14.24z"
                fill="#a4c639"
              />
              <path
                d="M69.374 133.645c-.047.54-.088 1.086-.088 1.638v92.557c0 9.954 7.879 17.973 17.66 17.973h94.124c9.782 0 17.661-8.02 17.661-17.973v-92.557c0-.552-.02-1.1-.066-1.638H69.374z"
                fill="#a4c639"
              />
              <path
                d="M166.133 207.092c7.865 0 14.241 6.376 14.241 14.241v61.09c0 7.865-6.376 14.24-14.241 14.24-7.864 0-14.24-6.375-14.24-14.24v-61.09c0-7.864 6.376-14.24 14.24-14.24zM46.405 141.882c7.864 0 14.24 6.376 14.24 14.241v61.09c0 7.865-6.376 14.241-14.24 14.241-7.865 0-14.241-6.376-14.241-14.24v-61.09c-.001-7.865 6.375-14.242 14.241-14.242zM221.614 141.882c7.864 0 14.24 6.376 14.24 14.241v61.09c0 7.865-6.376 14.241-14.24 14.241-7.865 0-14.241-6.376-14.241-14.24v-61.09c0-7.865 6.376-14.242 14.241-14.242zM69.79 127.565c.396-28.43 25.21-51.74 57.062-54.812h14.312c31.854 3.073 56.666 26.384 57.062 54.812H69.79z"
                fill="#a4c639"
              />
              <path
                d="M74.743 70.009l15.022 26.02M193.276 70.009l-15.023 26.02"
                fill="none"
                stroke="#a4c639"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M114.878 102.087c.012 3.974-3.277 7.205-7.347 7.216-4.068.01-7.376-3.202-7.388-7.176v-.04c-.011-3.975 3.278-7.205 7.347-7.216 4.068-.011 7.376 3.2 7.388 7.176v.04zM169.874 102.087c.012 3.974-3.277 7.205-7.347 7.216-4.068.01-7.376-3.202-7.388-7.176v-.04c-.011-3.975 3.278-7.205 7.347-7.216 4.068-.011 7.376 3.2 7.388 7.176v.04z"
                fill="#fff"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2038"
              height="2500"
              viewBox="0 0 496.255 608.728"
              className="h-6 w-6"
            >
              <path
                d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"
                fill="#999"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <p className="mb-5 text-xs text-gray-500 sm:text-sm dark:text-gray-900">
            We are able to create and develop a unique mobile app with our
            thorough preparation and attention to tiny details. Connect with us
            right away to get going!
          </p>
          <div className="w-full items-center sm:absolute sm:left-2 sm:bottom-2 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="/"
              className=" w-full sm:w-11/12 bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <div className="text-center w-fit">
                <div className="mr-5 font-sans text-xs font-semibold">
                  Learn more
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full transition-all hover:-translate-y-1 p-4 relative hover:opacity-100 hover:shadow-blue-300 text-center bg-white border border-gray-200 rounded-lg shadow-2xl hover:shadow-xl sm:p-8 dark:bg-white dark:border-gray-300">
          <h5 className="mb-2 text-xl font-bold  text-gray-900 dark:text-blue-500">
            Web Development
          </h5>
          <ul className="flex justify-around text-xs text-gray-700 font-light">
            <li>UI/UX.</li>
            <li>Frontend.</li>
            <li>Fullstack.</li>
            <li>APIs</li>
          </ul>
          <div className="flex justify-around m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
          </div>
          <p className="mb-5 text-xs text-gray-500 sm:text-sm dark:text-gray-900">
            We can design and build imaginative web Apps with our detailed
            planning and attention to tiny details. Connect with us right away
            to get going!
          </p>
          <div className="w-full items-center sm:absolute sm:left-2 sm:bottom-2 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="/"
              className=" w-full sm:w-11/12 bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <div className="text-center w-fit">
                <div className="mr-5 font-sans text-xs font-semibold">
                  Learn more
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full hover:-translate-y-1 transition-all p-4 relative hover:opacity-100 hover:shadow-blue-300 text-center bg-white border border-gray-200 rounded-lg shadow-2xl hover:shadow-xl sm:p-8 dark:bg-white dark:border-gray-300">
          <h5 className="mb-2 text-xl font-bold  text-gray-900 dark:text-blue-500">
            Cloud Services
          </h5>
          <ul className="flex justify-around text-xs text-gray-700 font-light">
            <li>Management</li>
            <li>| Records |</li>
            <li>Recovery</li>
          </ul>
          <div className="flex justify-around m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-green-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
          <p className="mb-5 text-xs text-gray-500 sm:text-sm dark:text-gray-900">
            Keep your critical data secure and accessible with the most
            affordable cloud services in the market. Connect with us right away
            to get going!
          </p>
          <div className="w-full items-center sm:absolute sm:left-2 sm:bottom-2 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="/"
              className=" w-full sm:w-11/12 bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <div className="text-center w-fit">
                <div className="mr-5 font-sans text-xs font-semibold">
                  Learn more
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full hover:-translate-y-1 transition-all p-4 relative hover:opacity-100 hover:shadow-blue-300 text-center bg-white border border-gray-200 rounded-lg shadow-2xl hover:shadow-xl sm:p-8 dark:bg-white dark:border-gray-300">
          <h5 className="mb-2 text-xl font-bold  text-gray-900 dark:text-blue-500">
            ERP Systems
          </h5>
          <ul className="flex justify-around text-xs text-gray-700 font-light">
            <li>School Mngt</li>
            <li>| POS |</li>
            <li>Property Mngt</li>
          </ul>
          <div className="flex justify-around m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-green-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-yellow-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>
          </div>
          <p className="mb-5 text-xs text-gray-500 sm:text-sm dark:text-gray-900">
            Get a personalized Business management solution to keep everything
            in order. Connect with us right away to get going!
          </p>
          <div className="w-full items-center sm:absolute sm:left-2 sm:bottom-2 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="/"
              className=" w-full sm:w-11/12 bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <div className="text-center w-fit">
                <div className="mr-5 font-sans text-xs font-semibold">
                  Learn more
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

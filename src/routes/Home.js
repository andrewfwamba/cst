import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Choice from "../components/Choice";

function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 700);
    setLoading(false);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <Loader />;
  } else
    return (
      <>
        <div className="mx-auto flex flex-col content-center">
          <main>
            <div className="mx-auto  sm:max-w-[100%] w-full py-0">
              {/* hero wrapper */}
              <div className="mx-auto w-full grid lg:grid-cols-2 py-2 text-gray-600 bg-gradient-to-b sm:bg-gradient-to-r from-blue-200/50 to-white/50">
                <div className="w-full p-8 animate__animated animate__fadeInLeft ">
                  <h3 className="text-lg sm:text-5xl text-center font-semibold px-10 text-gray-700 pb-6">
                    Leading Software Development Company
                  </h3>
                  <p className="text-gray-600 px-6 text-center">
                    We are a team of software engineers, user experience
                    designers, web content creators, and curators, and our goal
                    is to help you begin your journey from where you are to
                    accepting and seizing your potential in the digital space.
                  </p>
                  <p className="text-gray-600 sm:text-xl mt-4 font-bold px-6 text-center">
                    Comprehensive innovation advice and technical services that
                    are tailored to meet your individual needs.
                  </p>

                  <div className="flex flex-row w-full relative">
                    <input
                      className="shadow text-sm pad-r appearance-none border h-10 sm:h-12 rounded w-full py-2 text-gray-700 leading-tight focus:outline-none mt-5 focus:shadow-outline"
                      id="username"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <div className="mt-7 absolute top-0 sm:top-1 right-0.5 sm:right-1">
                      <Link
                        to="#"
                        className="py-2 ml-2 px-2 text-xs sm:text-sm font-normal text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 ring-1 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Get a demo
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[18rem] lg:h-full animate__animated animate__fadeInBottomRight rounded bg-teal-200 landing-2"></div>
              </div>
            </div>
          </main>
          <div className="h-10 bg-gray-500 mt-4"></div>
        </div>
        <div className="p-2 p-y w-full mb-10 ">
          <Cards />
        </div>
        <div className="p-2 p-y w-full mb-10 ">
          {/* <Pricing /> */}
          <Choice />
        </div>

        <Footer />
      </>
    );
}

export default Home;

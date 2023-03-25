import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1500);
    setLoading(false);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <Loader />;
  } else
    return (
      <div className="mx-auto content-center">
        <header className="bg-white h-3 shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"></div>
        </header>
        <main>
          <div className="mx-auto grid sm:max-w-[100%] max-w-[100%] py-6 sm:px-6 lg:px-8">
            {/* Your content */}
            <div className="landing-wrapper max-w-[1240px] mx-auto py-6 px-8 grid lg:grid-cols-3 gap-8 text-gray-600">
              <div className="landing-1">
                <h3>Get Clarity for Your Organization's Performance</h3>
                <p>
                  As business directives they know how to dice and slice
                  financial information to get to the detail examine the
                  varieties, the exceptions and then follow these numbers back
                  up the line
                </p>
                <Link to="#" className="btn radius center mt-2 bg-secondary">
                  Get Started
                </Link>
              </div>
              <div className="landing-2 lg:col-span-2 mt-6"></div>
            </div>
          </div>
        </main>
        {/* <div className="landing-wrapper mt-2 radius mb-2 md:max-w-max">
          <div className="landing-1">
            <h3>Get Clarity for Your Organization's Performance</h3>
            <p>
              As business directives they know how to dice and slice financial
              information to get to the detail examine the varieties, the
              exceptions and then follow these numbers back up the line
            </p>
            <Link to="#" className="btn radius center mt-2 bg-secondary">
              Get Started
            </Link>
          </div>
          <div className="landing-2"></div>
        </div> */}
        <div className="info"></div>
        <Footer />
      </div>
    );
}

export default Home;

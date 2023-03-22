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
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto grid max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Your content */}
            <div className="landing-wrapper mt-2 grid-cols-1 radius mb-2 md:max-w-max">
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
              <div className="landing-2 grid-cols-1"></div>
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

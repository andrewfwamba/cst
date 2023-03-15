import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

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
        <div className="landing-wrapper mt-2 radius mb-2 md:max-w-max">
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
        </div>
        <hr />
        <div className="info"></div>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0">
              {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div> */}
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    );
}

export default Home;

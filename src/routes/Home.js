import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      console.log("Hello, World!");
    }, 3000);
    setLoading(false);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <Loader />;
  } else
    return (
      <div className="container">
        <div className="landing-wrapper mt-2 radius">
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
      </div>
    );
}

export default Home;

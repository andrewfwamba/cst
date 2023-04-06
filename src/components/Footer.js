import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600">
        <div>
          <Link
            to="#"
            className="logo flex text-base font-medium text-gray-800"
          >
            Crewsoft&trade;
          </Link>
          <p className="py-2 text-base">
            A kenyan information technology company that specializes in
            providing internet related services. We offer affordable web app
            design,mobile application design and all other software development
            services to organizations accross the globe.
            {/* It's our constant endeavor to continue being the leader in providing client based
            customized web design,web development,customized software
            development, SEO and solutions services */}
          </p>
          <div className="flex justify-between mx-auto md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-bold text-xs lg:text-lg text-gray-600">
              Solutions
            </h6>
            <ul>
              <li className="py-1 text-xs lg:text-sm">Analytics</li>
              <li className="py-1 text-xs lg:text-sm">Commerce</li>
              <li className="py-1 text-xs lg:text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-xs lg:text-lg text-gray-600">
              Support
            </h6>
            <ul>
              <li className="py-1 text-xs lg:text-sm">Pricing</li>
              <li className="py-1 text-xs lg:text-sm">Docs</li>
              <li className="py-1 text-xs lg:text-sm">APIs</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-xs lg:text-lg text-gray-600">
              Company
            </h6>
            <ul>
              <li className="py-1 text-xs lg:text-sm">About</li>
              <li className="py-1 text-xs lg:text-sm">Blog</li>
              <li className="py-1 text-xs lg:text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-xs lg:text-lg text-gray-600">
              Legal
            </h6>
            <ul>
              <li className="py-1 text-xs lg:text-sm">Claim</li>
              <li className="py-1 text-xs lg:text-sm">Policy</li>
              <li className="py-1 text-xs lg:text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full py-4 mb-10 px-10 text-gray-600 bg-slate-300 text-center">
        {" "}
        <p>
          Copyright &copy;{new Date().getFullYear()} Crewsoft Technologies. All
          rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;

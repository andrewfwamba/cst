import React from "react";
import Team from "./Team";
import Marketing from "../components/Marketing";

function About() {
  return (
    <>
      <div className="w-full animate__animated animate__lightSpeedInLeft">
        <div className=" px-2 sm:px-10 py-4">
          <h2 className=" text-gray-700 sm:text-left md:pb-5 font-semibold">
            About Us
          </h2>
        </div>
        <div className="p-2 md:mx-10 rounded bg-slate-200">
          <div className="md:p-4 text-center md:text-left md:w-10/12">
            <p className="my-2 font-medium text-xs md:text-base">
              A kenyan information technology company that specializes in
              providing internet related services. We offer affordable web app
              design,mobile application design and all other software
              development services to organizations accross the globe. It's our
              constant endeavor to continue being the leader in providing client
              based customized web design, web development, customized software
              development, SEO and solutions services
            </p>
          </div>
        </div>
      </div>
      <Team />
      <Marketing />
      <div className="py-10">
        <p className="text-gray-700 md:text-2xl mx-3 md:mx-6 font-bold text-center">
          We approach the workplace as something that adds to our lives and adds
          value to the world.
        </p>
      </div>
    </>
  );
}

export default About;

import React from "react";

function Team() {
  const team = [
    {
      id: 1,
      name: "Jairus Otiko",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Moses Tenai",
      role: "Product Architect",
      imageUrl:
        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      name: "Andrew Fwamba",
      role: "Software Engineer",
      imageUrl:
        "https://res.cloudinary.com/doxety4ay/image/upload/v1667404489/636292b13dd43d7482248a4a_profile.jpg",
    },
  ];

  const values = [
    {
      id: 1,
      head: "Be world-class",
      body: "Crewsoft Technologies strives to be a world-class software company through building a strong foundation, investing in talent, embracing innovation, and delivering exceptional customer satisfaction to achieve global success.",
    },
    {
      id: 2,
      head: "Integrity",
      body: "At Crewsoft Technologies, integrity is a top priority. The company adheres to the highest ethical standards, prioritizing honesty, transparency, and accountability in all aspects of the business to build long-term relationships with customers and earn their trust.",
    },
    {
      id: 3,
      head: "Always Learning",
      body: "Crewsoft Technologies fosters a culture of continuous learning and development for individual and team growth. The company encourages employees to seek out new challenges, stay up-to-date with the latest technologies and industry trends, and share ideas to deliver innovative and high-quality software solutions for clients.",
    },
    {
      id: 4,
      head: "Innovative",
      body: "We value innovation and continuously explore new technologies, methodologies, and ideas to deliver exceptional software solutions for clients. The team is encouraged to think creatively, push boundaries, and develop cutting-edge software that drives business success, in order to revolutionize the industry.",
    },
    {
      id: 5,
      head: "Be supportive",
      body: "We emphasize the value of teamwork and building a supportive and collaborative work environment where everyone can thrive. We encourage team members to share knowledge and expertise, celebrate successes, and maintain work-life balance through a supportive and flexible work environment. The culture of support and teamwork enables the team to achieve great things together.",
    },
    {
      id: 6,
      head: "Focus on the user",
      body: "We value user experience and places users at the center of their software development process. The team is dedicated to creating intuitive and user-friendly software that meets the needs of its users. We also value feedback from users and work diligently to incorporate it into the software development process, to ensure that the solutions provided are not only functional but also deliver real value to clients.",
    },
  ];
  return (
    <>
      <div className="w-full px-2 py-5">
        <div>
          <h2 className="animate__animated animate__bounceIn text-gray-700 sm:text-left sm:px-10 pb-5 font-semibold">
            Our Team
          </h2>
          <p className="animate__animated animate__flipInX w-full md:w-8/12 mx-2 text-sm md:text-base md:mx-8 pb-10">
            We are a team of software engineers, user experience designers, web
            content creators, and curators, and our goal is to help you begin
            your journey.
          </p>
        </div>
        {/* Teams */}
        <div className="animate__animated animate__fadeInDown grid gap-1 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 mx-auto px-3 sm:px-8">
          {team.map((teams) => (
            <div key={teams.id} className="h-[180px] w-[170px]">
              <img
                src={teams.imageUrl}
                alt=""
                className="h-20 w-20 rounded-full mb-8"
              />
              <h5 className="text-base text-gray-900 font-black">
                {teams.name}
              </h5>
              <p className="text-xs text-gray-700">{teams.role}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Our mission */}
      <div className="animate__animated animate__lightSpeedInLeft w-full px-2 sm:px-10 py-4">
        <div>
          <h2 className="text-gray-700 sm:text-left pb-5 font-semibold">
            Our Mission
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-2">
          <div className=" rounded w-full p-4 dark:bg-gray-200 dark:text-black md:col-span-2">
            <p className="italic font-medium text-gray-800">
              "Our goal is to develop cutting-edge, user-focused mobile
              applications that increase how people utilize technology and
              better their daily lives. We seek to stay at the forefront of
              mobile app development trends and technologies, and to give
              high-quality, reliable, and cost-effective solutions to our
              clients.
            </p>
            <h4 className="text-xl mx-16 pt-6 pb-3 font-bold">
              Mission Statement
            </h4>
            <ul className="list-disc mx-10 text-blue-900 ">
              <li>
                To Shape the future of the Internet by creating unprecedented
                value and opportunity for our customers, employees, investors,
                and ecosystem partners.
              </li>
              <li>
                To stay at the forefront of technology and design trends in the
                software development industry
              </li>
              <li>
                To build long-term partnerships with our clients and become a
                trusted resource for their software needs
              </li>
              <li>
                To continuously improve and evolve our skills and processes to
                deliver the best possible software solutions.
              </li>
              <li>Provide the best customer service possible.</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded w-full p-9">
            <h1 className="text-left text-gray-900 font-bold text-[2.5rem]">
              500+
            </h1>
            <h2 className="text-gray-600 text-left font-medium text-base mb-8">
              Satisfied Customers
            </h2>
            <h1 className="text-left text-gray-900 font-bold text-[2.5rem]">
              50+
            </h1>
            <h2 className="text-gray-600 text-left font-medium text-base mb-8">
              Applications
            </h2>
            <h1 className="text-left text-gray-900 font-bold text-[2.5rem]">
              10,000
            </h1>
            <h2 className="text-gray-600 text-left font-medium text-base">
              Annual users
            </h2>
          </div>
        </div>
      </div>
      {/* Our values */}
      <div className="w-full px-2 py-4 sm:px-8 ">
        <div>
          <h2 className="text-gray-700 sm:text-left pb-5 font-semibold">
            Our Values
          </h2>
          <div className="md:w-1/2">
            <p className="pb-10 px-4">
              To provide you a wide range of services, we think broadly and are
              active on all trending tech platforms.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {values.map((value) => (
            <div key={value.id} className=" rounded overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100 mx-auto">
              <h3 className="font-bold w-full bg-gray-200 p-1 text-center bg-gradient-to-r from-blue-300 to-violet-200 text-gray-800 text-base">
                {value.head}
              </h3>
              <p className="mx-2 md:mx-4 my-2 text-xs sm:text-sm ">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;

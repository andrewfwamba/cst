import React, { useState } from "react";
import Category from "../components/Category";
import ProjectsData from "../Data/projectsData";
import { Modal } from "antd";
import Mobileimages from "../utilities/projectsImages";

function Products() {
  const [imagesarray, setimagesarray] = useState([]);
  const [imagetype, setimagetype] = useState("");
  const [showimages, setshowimages] = useState(false);
  const [title, setTitle] = useState("");
  let projects = ProjectsData.DUMMY_PROJECTS;

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-8">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          {/* <Category />
           */}
          <Modal
            open={showimages}
            title={title}
            description="Project details"
            footer={null}
            width={"90%"}
            onCancel={() => {
              setshowimages(false);
            }}
          >
            <div className="container overflow-hidden mx-auto">
              <Mobileimages imagesarray={imagesarray} type={imagetype} />
            </div>
          </Modal>
          {/* <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 gap-3 px-[2%]">
        {projects.map((project, index) => (
          <div className="border border-gray-300 rounded p-5 cursor-pointer">
            <p>{project.projectTitle}</p>
            <div className="px-3 py-1 border border-gray-300 rounded shadow-md text-center">
              <p>View Gallery</p>
            </div>
          </div>
        ))}
      </div> */}
          <div className="mt-6 gap-4 grid lg:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group border flex flex-col justify-between border-gray-300 rounded"
              >
                {/* <div className="relative overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"> */}
                {/* <img
              src={project?.imagesarray[0]}
              alt={project.title}
              className="h-[10rem] w-full object-cover transition hover:scale-110 duration-300 ease-in-out object-center"
            /> */}
                {/* </div> */}
                <h3 className="mt-6 text-[14px] text-gray-500">
                  <a href={""}>
                    <span className=" inset-0" />
                    {project.projectTitle}
                  </a>
                </h3>
                <p className="text-[12px] font-semibold text-gray-900 px-4">
                  {project.description}
                </p>
                <div>
                  <p
                    onClick={() => {
                      setTitle(project.projectTitle);
                      setshowimages(true);
                      setimagetype(project.type);
                      console.log("type", project.type);
                      setimagesarray(project.imagesarray);
                      console.log("test", project.imagesarray);
                    }}
                    className="px-3 py-1 border border-gray-300 rounded cursor-pointer shadow-md text-center hover:bg-gray-400 hover:text-white"
                  >
                    View Gallery
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

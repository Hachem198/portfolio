import React from "react";
import { PROJECTS } from "../constants/projects";
export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="text-center text-4xl my-20">Projects</h1>
      <div className="space-y-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                className="mb-6 rounded"
                width={150}
                height={150}
                src="https://images.unsplash.com/photo-1739536176048-caa7190dba66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ">
              <h6 className="text-lg font-semibold mb-2">{project.title}</h6>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              <div>
                {project.technologies.map((proj, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

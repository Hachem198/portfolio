import React from "react";
import { ProjectCard } from "../components/adminComponents/ProjectCard";
import { PROJECTS } from "../components/constants/projects.js";

export const AdminProjects = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl text-purple-700 text-center mt-8 md:mt-12">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { PROJECTS } from "../constants/projects";
import { motion } from "framer-motion";
export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl my-20"
      >
        Projects
      </motion.h1>
      <div className="space-y-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="mb-6 rounded"
                width={150}
                height={150}
                src={project.imageSrc}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 "
            >
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
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";
export const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -20 }}
      transition={{ duration: 0.5 }}
      className=" w-[380px] min-h-[290px] p-6 rounded-3xl border border-purple-500/50 bg-white/10 backdrop-blur-lg shadow-xl shadow-black/50  overflow-hidden"
    >
      <h1 className="text-white text-2xl font-semibold text-center">
        {project.title}
      </h1>
      <p className="text-gray-300 text-sm mt-3">
        <span className="text-purple-400 font-semibold">Description:</span>{" "}
        {project.description}
      </p>
      <div className="mt-4">
        <p className="text-purple-400 font-semibold">Technologies:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-purple-500/20 border border-purple-400/50 text-purple-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

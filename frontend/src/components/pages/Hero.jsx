import React from "react";
import FloatingBubbles from "../FloatingBubbles";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8x1">
              Omar Salhi
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Full-stack development refers to the process of building both the
              front-end and back-end of a web application. A full-stack
              developer is proficient in handling everything from user
              interfaces to databases, APIs, and server logic. With the rise of
              modern web technologies, full-stack development has become one of
              the most in-demand skills in the software industry.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 contain-content">
          <div className="flex justify-center w-[200px]">
            <FloatingBubbles></FloatingBubbles>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

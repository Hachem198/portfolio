import React from "react";
import aboutImage from "../assets/aboutPhoto.png";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4x1">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center w-[400px]">
          <img className="rounded-xl" src={aboutImage}></img>
        </div>
        <div className="w-full lg:w-1/2"></div>
      </div>
    </div>
  );
};

export default About;

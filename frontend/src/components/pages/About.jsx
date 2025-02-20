import React from "react";
import { personalInfo } from "../constants/personalInfo";
import aboutPhoto from "../../assets/aboutPhoto.png";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center w-[400px]">
            <img className="rounded-2xl" src={aboutPhoto}></img>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 maxw-xl py-12 text-neutral-400">
              {personalInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import reactLogo from "../assets/react.svg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={reactLogo}></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin></FaLinkedin>
        <FaGithub></FaGithub>
        <FaInstagram></FaInstagram>
        <FaSquareXTwitter></FaSquareXTwitter>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/pages/Hero";
import About from "../components/pages/About";
import ChatBotPopover from "../components/chatbot/ChatBotPopover";
import Technologies from "../components/pages/Technologies";
import { Experience } from "../components/pages/Experience";
import { Projects } from "../components/pages/Projects";
import Contact from "../components/pages/Contact";
import { GetInTouch } from "../components/pages/GetInTouch";
export const MainRoute = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar></Navbar>
        <Hero></Hero>
        <ChatBotPopover></ChatBotPopover>
        <About></About>
        <Technologies></Technologies>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
        <GetInTouch></GetInTouch>
      </div>
    </div>
  );
};

import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
const Layout = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <main className="grid sm:grid-cols-[300px_1fr]">
        <SideBar></SideBar>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

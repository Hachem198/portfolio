import React from "react";
import { Outlet } from "react-router-dom";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from "./SideBar";
const Layout = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <SideBar></SideBar>
      <main className="flex-1 p-4">
        <Outlet /> {/* This is where child components will be rendered */}
      </main>
    </div>
  );
};

export default Layout;

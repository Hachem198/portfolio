import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GoProjectRoadmap } from "react-icons/go";
import { AiOutlineExperiment } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { FaListAlt } from "react-icons/fa";
import { useState } from "react";
export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const linkClassname =
    "flex items-center space-x-2 hover:bg-white hover:text-black w-[200px] hover:rounded-3xl";
  const items = [
    {
      link: "/admin/profile",
      icon: CgProfile,
      title: "Profile",
    },
    {
      link: "/admin/projects",
      icon: GoProjectRoadmap,
      title: "Projects",
    },
    {
      link: "/admin/experiences",
      icon: AiOutlineExperiment,
      title: "Experiences",
    },
    {
      link: "/admin/contact",
      icon: IoMdContacts,
      title: "Contact",
    },
  ];
  return (
    <>
      {/*Desktop display*/}
      <div className="h-screen  w-[300px] sm:opacity-100 opacity-0 bg-purple-400 flex-row fixed z-0">
        <div className="flex justify-center mt-4">
          <div className="w-20 h-20 mt-2 mr-8 group overflow-hidden rounded-full ">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
          </div>
          <strong className="mt-4 text-[20px]">
            Hama<br></br> weld lakanya
          </strong>
        </div>
        <div className="flex justify-center mt-20">
          <ul className="space-y-12 text-2xl ">
            {items.map((item, index) => (
              <Link key={index} className={linkClassname} to={item.link}>
                <item.icon className="ml-2"></item.icon>
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {/*mobile display*/}
      <div className="space-y-[-12px]">
        <nav className="sm:opacity-0 opacity-100  flex justify-end ">
          <button
            className="text-purple-400 text-2xl p-4"
            onClick={handleNavbar}
          >
            <FaListAlt />
          </button>
        </nav>
        {isOpen && (
          <div className="flex justify-center ">
            <div className="bg-purple-500 sm:opacity-0 opacity-100  overflow-hidden  rounded-2xl p-2 w-[90%] absolute ">
              <ul>
                {items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="border-b-2 border-neutral-500  space-y-3 space-x-3 flex hover:bg-white hover:rounded-2xl hover:text-black relative "
                  >
                    <item.icon className="mt-1 ml-2"></item.icon>
                    <li>{item.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

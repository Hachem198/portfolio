import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GoProjectRoadmap } from "react-icons/go";
import { AiOutlineExperiment } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
export const SideBar = () => {
  const linkClassname =
    "flex items-center space-x-2 hover:bg-white hover:text-black w-[200px] ml-12 hover:rounded-3xl";
  return (
    <div className="h-screen absolute w-[300px] bg-purple-400 flex-row">
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
          <Link to="/admin/profile" className={linkClassname}>
            <CgProfile></CgProfile>
            <li>Profile</li>
          </Link>
          <Link to="/admin/projects" className={linkClassname}>
            <GoProjectRoadmap />
            <li>Projects</li>
          </Link>
          <Link className={linkClassname}>
            <AiOutlineExperiment></AiOutlineExperiment>
            <li>Experiences</li>
          </Link>
          <Link className={linkClassname}>
            <IoMdContacts></IoMdContacts>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

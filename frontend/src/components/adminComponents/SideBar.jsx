import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GoProjectRoadmap } from "react-icons/go";
import { AiOutlineExperiment } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
export const SideBar = () => {
  const linkClassname = "flex items-center space-x-2";
  return (
    <div className="h-screen absolute w-[300px] bg-purple-400">
      <div className="mt-18 w-full">
        <ul className="space-y-4 text-2xl">
          <Link to="/" className={linkClassname}>
            <CgProfile></CgProfile>
            <li>Profile</li>
          </Link>
          <Link className={linkClassname}>
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

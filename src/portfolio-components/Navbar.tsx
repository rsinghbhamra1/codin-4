import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to="/">React Portfolio</Link>
        </div>
        <div className="flex space-x-8">
          <a href="/#basicInfo" className="hover:text-blue-400">
            Basic Info
          </a>
          <Link to="/work" className="hover:text-blue-400">
            Work
          </Link>
          <a href="/#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="/#developerSetup" className="hover:text-blue-400">
            Developer Setup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

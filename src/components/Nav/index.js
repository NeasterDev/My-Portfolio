import React from "react";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <nav className=" bg-green-200 bg-opacity-80 hover:bg-opacity-100 shadow-lg w-screen fixed z-50 ">
        <div className="px-4">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Nav title */}
            <div className="flex justify-center md:justify-start">
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-green-900 text-3xl">
                  Nicholas Easter
                </span>
              </a>
            </div>
            {/* Nav links start */}
            <div className="flex flex-wrap justify-center md:justify-start md:my-auto md:mr-7">
              <a
                className=""
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange("About");
                }}
              >
                <span className=" text-xl mx-7 font-semibold text-green-800 hover:text-black border-b-2 hover:border-b-0 border-green-800">
                  About
                </span>
              </a>
              <a
                className=" "
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange("Projects");
                }}
              >
                <span className=" text-xl mx-7 font-semibold text-green-800 hover:text-black border-b-2 hover:border-b-0 border-green-800">
                  Projects
                </span>
              </a>
              <a
                className=" "
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange("Contact");
                }}
              >
                <span className=" text-xl mx-7 font-semibold text-green-800 hover:text-black border-b-2 hover:border-b-0 border-green-800">
                  Contact
                </span>
              </a>
              <a
                className=" "
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange("Resume");
                }}
              >
                <span className=" text-xl mx-7 font-semibold text-green-800 hover:text-black border-b-2 hover:border-b-0 border-green-800">
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

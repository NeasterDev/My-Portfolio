import React from "react";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <nav className=" bg-green-200 shadow-lg">
        <div className="px-4">
          <div className="flex justify-between">
            {/* Nav title */}
            <div className="flex">
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-green-900 text-3xl">
                  Nicholas Easter
                </span>
              </a>
            </div>
            {/* Nav links start */}
            <div className="flex my-auto mr-7">
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

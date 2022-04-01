import React from "react";

const Nav = () => {
  return (
    <div>
      <nav class=" bg-green-100 shadow-lg">
        <div class="px-4">
          <div class="flex justify-between">
            {/* Nav title */ }
            <div class="flex">
              <a href="/" class="flex items-center py-4 px-2">
                <span class="font-semibold text-green-900 text-3xl">
                  Nicholas Easter
                </span>
              </a>
            </div>
            {/* Nav links start */}
            <div className="flex my-auto mr-7">
              <a className=" " href="/">
                <span className=" text-xl mx-7 font-semibold text-green-800 hover:text-black border-b-2 hover:border-b-0 border-green-800">
                  About
                </span>
              </a>
              <a className=" " href="/">
                <span className=" text-xl mx-7 font-semibold text-green-800 hover:text-black border-b-2 hover:border-b-0 border-green-800">
                  Projects
                </span>
              </a>
              <a className=" " href="/">
                <span className=" text-xl mx-7 font-semibold text-green-800 hover:text-black border-b-2 hover:border-b-0 border-green-800">
                  Contact
                </span>
              </a>
              <a className=" " href="/">
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

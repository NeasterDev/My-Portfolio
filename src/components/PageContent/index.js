import React, { useState } from "react";

import Nav from "../Nav";
import Foot from "../Foot";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

const PageContent = () => {
  const [currentPage, setCurrentPage] = useState("");

  const renderPage = () => {
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    } 
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className=" flex flex-col min-h-screen">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Foot></Foot>
    </div>
  );
};

export default PageContent;

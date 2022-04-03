import React from "react";
import ProjectCard from "./ProjectCard.js";

const Projects = () => {
    return (
        <div>
            <div className="mt-6">
                <h1 className=" ml-10 cursor-default text-shadow text-8xl text-left text-green-400 hover:text-green-500   ">
                    Projects
                </h1>
            </div>
            <ProjectCard imgLink="https://via.placeholder.com/300/09f/fff.png" title="Project 1" github="www.github.com"  />
        </div>
    );
}

export default Projects;
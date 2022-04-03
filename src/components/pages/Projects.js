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
            <div className="flex flex-col flex-wrap items-center">
                <div className="flex-grow mb-4 w-2/3 border-[16px] border-green-900 hover:border-green-400">
                    <ProjectCard imgLink="https://via.placeholder.com/300/09f/fff.png" title="Project 1" github="www.github.com"  />
                </div>
                <div className=" flex-grow mb-4 w-2/3 border-[16px] border-green-900 hover:border-green-400">
                    <ProjectCard imgLink="https://via.placeholder.com/300/09f/fff.png" title="Project 1" github="www.github.com"  />
                </div>
                <div className=" flex-grow mb-4 w-2/3 border-[16px] border-green-900 hover:border-green-400">
                    <ProjectCard imgLink="https://via.placeholder.com/300/09f/fff.png" title="Project 1" github="www.github.com"  />
                </div>
                <div className=" flex-grow mb-4 w-2/3 border-[16px] border-green-900 hover:border-green-400">
                    <ProjectCard imgLink="https://via.placeholder.com/300/09f/fff.png" title="Project 1" github="www.github.com"  />
                </div>
                <div className=" flex-grow mb-4 w-2/3 border-[16px] border-green-900 hover:border-green-400">
                    <ProjectCard imgLink="https://via.placeholder.com/300/09f/fff.png" title="Project 1" github="www.github.com"  />
                </div>
                <div className=" flex-grow mb-4 w-2/3 border-[16px] border-green-900 hover:border-green-400">
                    <ProjectCard imgLink="https://via.placeholder.com/300/09f/fff.png" title="Project 1" github="www.github.com"  />
                </div>
            </div>
            
        </div>
    );
}

export default Projects;
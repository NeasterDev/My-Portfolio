import React from "react";

const ProjectCard = ({ title, github, imgLink }) => {


    return (

        <div className={"flex flex-col justify-center items-center w-1/5 h-52 bg-[url('https://via.placeholder.com/150')]"}>
            <div>
                <span>{title}</span>
            </div>
            <div>
                <a href={github}><span>GitHub</span></a>
            </div>
        </div>


    )
};

export default ProjectCard;
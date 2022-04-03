import React from "react";

const ProjectCard = ({ title, github, imgLink }) => {

    const myStyle = {
        backgroundImage: `url(${imgLink})`,
        backgroundSize: "100% 100%"
    }
    return (

        <div className={"m-2 bg-no-repeat flex flex-col justify-center items-center h-96"}
             style={myStyle}>
            <div className="">
                <span>{title}</span>
            </div>
            <div>
                <a href={github}><span>GitHub</span></a>
            </div>
        </div>
    )
};

export default ProjectCard;
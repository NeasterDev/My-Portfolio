import React from "react";
import GithubLogo from "../../../images/GitHub-Mark-64px.png";
import GithubLogo2 from "../../../images/GitHub_Logo.png";

const ProjectCard = ({ title, github, imgLink }) => {
  const myStyle = {
    backgroundImage: `url(${imgLink})`,
    backgroundSize: "100% 100%",
  };

  return (
    <div
      className="relative bg-no-repeat flex flex-col border border-black justify-center items-center h-96 rounded-lg"
      style={myStyle}
    >
      <div className="">
        <span className="text-7xl font-bold ">{title}</span>
      </div>
      <div className="absolute bottom-7 right-7 opacity-50 hover:opacity-100">
        <a href={github} className="">
          <span className="flex justify-end">
            <img src={GithubLogo} alt="github logo" />
            <img className=" w-1/5" src={GithubLogo2} alt="github logo" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

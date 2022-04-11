import React from "react";
import GithubLogo from "../../../images/GitHub-Mark-64px.png";
import GithubLogo2 from "../../../images/GitHub_Logo.png";

const ProjectCard = ({ title, github, imgLink, websiteLink }) => {
  const myStyle = {
    backgroundImage: `url(${imgLink})`,
    backgroundPosition: "center",
    backgroundSize: "200% 120%"
  };

  return (
    <div
      className="bg-no-repeat flex flex-col border border-black justify-end items-center h-96 rounded-lg"
      style={myStyle}
    >
      <div className=" bg-black-rgba-0 hover:bg-black-rgba-1 px-4 pt-2 rounded-sm">
        <a href={websiteLink} target="_blank" rel="noreferrer" className="text-4xl font-bold opacity-60 hover:opacity-100 text-shadow text-green-600 hover:text-green-300 cursor-pointer">{title}</a>
      </div>
      <div className=" bg-black-rgba-0 hover:bg-black-rgba-1 px-4 pt-2 rounded-sm opacity-30 hover:opacity-100">
        <a href={github} className="flex justify-center w-1/2 mx-auto mb-4">
          <img className="" src={GithubLogo} alt="github logo" />
          <div className="flex">
            <img className="" src={GithubLogo2} alt="github logo" />
          </div>


        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

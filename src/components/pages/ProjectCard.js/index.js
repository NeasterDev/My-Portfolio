import React from "react";
import GithubLogo from "../../../images/GitHub-Mark-64px.png";
import GithubLogo2 from "../../../images/GitHub_Logo.png";

const ProjectCard = ({ title, github, imgLink, websiteLink }) => {
  const myStyle = {
    backgroundImage: `url(${imgLink})`,
    backgroundSize: "100% 100%",
  };

  return (
    <div
      className="bg-no-repeat flex flex-col border border-black justify-end items-center h-96 rounded-lg"
      style={myStyle}
    >
      <div className="">
        <a href={websiteLink} className="text-4xl md:text-7xl font-bold opacity-40 hover:opacity-100 cursor-pointer">{title}</a>
      </div>
      <div className=" opacity-30 hover:opacity-100">
        <a href={github} className="flex justify-center">
            <img src={GithubLogo} alt="github logo" />
            <img className=" w-1/5" src={GithubLogo2} alt="github logo" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import ProjectCard from "./ProjectCard.js";
import instaShoe from "../../images/00-instashoe.png";
import weatherDashboard from "../../images/01-weather.png";
import taskmaster from "../../images/02-taskmaster.png";
import workScheduler from "../../images/03-schedule.png";
import runBuddy from "../../images/04-runbuddy.png";
import quiz from "../../images/05-quiz.png";
import nelp from '../../images/nelp.png'

const Projects = () => {
    return (
        <div>
            <div className="md:mt-28 mt-40 flex justify-center md:justify-start">
                <h1 className=" md:ml-10 cursor-default text-shadow md:text-8xl text-6xl text-center md:text-left text-green-400 hover:text-green-500   ">
                    Projects
                </h1>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap items-center lg:justify-start">
                <div className="flex-grow mb-4 w-11/12 lg:w-1/5 2xl:max-w-[25%] md:m-12 opacity-75 hover:opacity-100 hover:shadow-2xl rounded-lg">
                    <ProjectCard imgLink={nelp} title="Nelp: National Park Reviews" websiteLink="https://national-parks-reviews.herokuapp.com/" github="https://github.com/crazypants300/review-site"  />
                </div>
                <div className="flex-grow mb-4 w-11/12 lg:w-1/5 2xl:max-w-[25%] md:m-12 opacity-75 hover:opacity-100 hover:shadow-2xl rounded-lg">
                    <ProjectCard imgLink={instaShoe} title="InstaShoe" websiteLink="https://shoe-production.herokuapp.com/home" github="https://github.com/crazypants300/Project-Group-2"  />
                </div>
                <div className=" flex-grow mb-4 w-11/12 lg:w-1/5 2xl:max-w-[25%] md:m-12 opacity-75 hover:opacity-100 hover:shadow-2xl hover:border-green-400 rounded-lg">
                    <ProjectCard imgLink={weatherDashboard} title="Weather Dashboard" websiteLink="https://crazypants300.github.io/weather-dashboard/" github="https://github.com/crazypants300/weather-dashboard"  />
                </div>
                <div className=" flex-grow mb-4 w-11/12 lg:w-1/5 2xl:max-w-[25%] md:m-12 opacity-75 hover:opacity-100 hover:shadow-2xl hover:border-green-400 rounded-lg">
                    <ProjectCard imgLink={taskmaster} title="Taskmaster Pro" websiteLink="https://crazypants300.github.io/taskmaster-pro/" github="https://github.com/crazypants300/taskmaster-pro"  />
                </div>
                <div className=" flex-grow mb-4 w-11/12 lg:w-1/5 2xl:max-w-[25%] md:m-12 opacity-75 hover:opacity-100 hover:shadow-2xl hover:border-green-400 rounded-lg">
                    <ProjectCard imgLink={workScheduler} title="Work Scheduler" websiteLink="https://crazypants300.github.io/daily-planner/Develop/index.html" github="https://github.com/crazypants300/daily-planner"  />
                </div>
                <div className=" flex-grow mb-4 w-11/12 lg:w-1/5 2xl:max-w-[25%] md:m-12 opacity-75 hover:opacity-100 hover:shadow-2xl hover:border-green-400 rounded-lg">
                    <ProjectCard imgLink={runBuddy} title="Run Buddy" websiteLink="https://crazypants300.github.io/run-buddy/" github="https://github.com/crazypants300/run-buddy"  />
                </div>
                <div className=" flex-grow mb-4 w-11/12 lg:w-1/5 2xl:max-w-[25%] md:m-12 opacity-75 hover:opacity-100 hover:shadow-2xl hover:border-green-400 rounded-lg">
                    <ProjectCard imgLink={quiz} title="Coding Quiz" websiteLink="https://crazypants300.github.io/coding-quiz/" github="https://github.com/crazypants300/coding-quiz"  />
                </div>
            </div>
            
        </div>
    );
}

export default Projects;
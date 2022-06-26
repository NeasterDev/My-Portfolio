import React from "react";
import resume from '../../files/Resume.pdf'

const Resume = () => {
    return (
        <div>
            <div className="md:mt-28 mt-40 flex justify-center md:justify-start">
                <h1 className=" md:ml-10 cursor-default text-shadow md:text-8xl text-6xl text-left text-green-400 hover:text-green-500   ">
                    Resume
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="bg-green-400 hover:bg-green-200 rounded-md p-4 cursor-pointer">
                    <a href={resume} download="Nicholas_easter_resume">Download Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Resume;
import React from "react";

const About = () => {
    return (
        <div className="">
            <div className="mt-6">
                <h1 className=" ml-10 cursor-default text-shadow text-8xl text-left text-green-400 hover:text-green-500   ">
                    About
                </h1>
            </div>
            <div className="flex text-2xl mx-10">
                <ul className="flex flex-col md:flex-row flex-wrap ">
                    <li className="mr-1">
                        <a href="#" className=" w-40 md:w-auto inline-block bg-green-400 border-b-2 border-black hover:bg-green-200 focus:bg-green-300 md:rounded-t-lg py-4 px-4 ">
                            Experience
                        </a>
                    </li>
                    <li className="mr-1">
                        <a href="#" className=" w-40 md:w-auto inline-block bg-green-400 border-b-2 border-black hover:bg-green-200 focus:bg-green-300 md:rounded-t-lg py-4 px-4 ">
                            Technologies
                        </a>
                    </li>
                    <li className="mr-1">
                        <a href="#" className=" w-40 md:w-auto inline-block bg-green-400 border-b-2 border-black hover:bg-green-200 focus:bg-green-300 md:rounded-t-lg py-4 px-4 ">
                            Education
                        </a>
                    </li>
                        
                </ul>
            </div>
        </div>
    );
}

export default About;
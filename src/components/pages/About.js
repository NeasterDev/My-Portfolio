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
                    <li className="mr-1  ">
                        <a href="/" id="con" className=" w-40 md:w-auto inline-block bg-green-400 border-b-2 border-black hover:bg-green-200 focus:bg-green-300 md:rounded-t-lg py-4 px-4 "
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#technologies').style.display = "none";
                                document.querySelector('#education').style.display = "none";
                                // this toggles the display of the nfo in the experience div
                                let info = document.querySelector('#experience');
                                console.log(info);
                                (info.style.display === "none") ? info.style.display = 'block' : info.style.display = 'none';
                            }}
                        >
                            Experience
                        </a>
                        <div id="experience" className="animate"

                        > TRANSITION </div>
                    </li>
                    <li className="mr-1  ">
                        <a href="/" id="con" className=" w-40 md:w-auto inline-block bg-green-400 border-b-2 border-black hover:bg-green-200 focus:bg-green-300 md:rounded-t-lg py-4 px-4 "
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#experience').style.display = "none";
                                document.querySelector('#education').style.display = "none";
                                // this toggles the display of the nfo in the technologies div
                                let info = document.querySelector('#technologies');
                                console.log(info);
                                (info.style.display === "none") ? info.style.display = 'block' : info.style.display = 'none';
                            }}
                        >
                            Technologies
                        </a>
                        <div id="technologies" className="animate"

                        > TRANSITION </div>
                    </li>
                    <li className="mr-1  ">
                        <a href="/" id="con" className=" w-40 md:w-auto inline-block bg-green-400 border-b-2 border-black hover:bg-green-200 focus:bg-green-300 md:rounded-t-lg py-4 px-4 "
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#technologies').style.display = "none";
                                document.querySelector('#experience').style.display = "none";
                                // this toggles the display of the nfo in the education div
                                let info = document.querySelector('#education');
                                console.log(info);
                                (info.style.display === "none") ? info.style.display = 'block' : info.style.display = 'none';
                            }}
                        >
                            Education
                        </a>
                        <div id="education" className=" animate"

                        > TRANSITION </div>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default About;
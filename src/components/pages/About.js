import React from "react";
import selfie from "../../images/selfie-min.png"; 

const About = () => {
    

    const filler = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quos eum aliquam voluptates officia harum suscipit. Velit laborum rerum doloremque tempora vel consequuntur quisquam impedit cumque omnis officiis! Sapiente, non?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quos eum aliquam voluptates officia harum suscipit. Velit laborum rerum doloremque tempora vel consequuntur quisquam impedit cumque omnis officiis! Sapiente, non?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quos eum aliquam voluptates officia harum suscipit. Velit laborum rerum doloremque tempora vel consequuntur quisquam impedit cumque omnis officiis! Sapiente, non?`

    return (
        <div className="">
            <div className=" mt-28 flex justify-center md:justify-start">
                <h1 className=" md:ml-10 cursor-default text-shadow md:text-8xl text-6xl text-left text-green-400 hover:text-green-500   ">
                    About
                </h1>
            </div>
            <div className="flex flex-col  text-2xl mx-10">
                <ul className="flex flex-col md:flex-row flex-wrap items-center ">
                    <li className="mr-1  ">
                        <a href="/" className=" w-40 md:w-auto inline-block bg-green-400 border-b-2 border-black hover:bg-green-200 focus:bg-green-300 rounded-t-lg py-4 px-4 "
                            onClick={(e) => {
                                e.preventDefault();
                                
                                document.querySelector('#technologies').style.display = "none";
                                document.querySelector('#default').style.display = "none";
                                document.querySelector('#education').style.display = "none";
                                // this toggles the display of the nfo in the experience div
                                let info = document.querySelector('#experience');
                                if(!info.style.display) {
                                    info.style.display = "none";
                                }
                                console.log(info);
                                (info.style.display === "none") ? info.style.display = 'block' : info.style.display = 'none';
                                if (document.querySelector('#technologies').style.display === "none" 
                                    && document.querySelector('#education').style.display === "none"
                                    && document.querySelector('#experience').style.display === "none") {
                                        document.querySelector('#default').style.display = "block";
                                    }
                            }}
                        >
                            Experience
                        </a>

                    </li>
                    <li className="mr-1  ">
                        <a href="/" className=" w-40 md:w-auto inline-block bg-green-400 border-b-2 border-black hover:bg-green-200 focus:bg-green-300 md:rounded-t-lg py-4 px-4 "
                            onClick={(e) => {
                                e.preventDefault();
                                
                                document.querySelector('#experience').style.display = "none";
                                document.querySelector('#default').style.display = "none";
                                document.querySelector('#education').style.display = "none";
                                // this toggles the display of the nfo in the technologies div
                                let info = document.querySelector('#technologies');
                                // checks if the display property has been set (ie the first click)
                                if(!info.style.display) {
                                    info.style.display = "none";
                                }
                                console.log(info);
                                (info.style.display === "none") ? info.style.display = 'block' : info.style.display = 'none';
                                if (document.querySelector('#technologies').style.display === "none" 
                                    && document.querySelector('#education').style.display === "none"
                                    && document.querySelector('#experience').style.display === "none") {
                                        document.querySelector('#default').style.display = "block";
                                    }
                            }}
                        >
                            Technologies
                        </a>

                    </li>
                    <li className="mr-1  ">
                        <a href="/"  className=" w-40 md:w-auto inline-block bg-green-400 border-b-2 border-black hover:bg-green-200 focus:bg-green-300 md:rounded-t-lg py-4 px-4 "
                            onClick={(e) => {
                                e.preventDefault();
                                
                                document.querySelector('#technologies').style.display = "none";
                                document.querySelector('#default').style.display = "none";
                                document.querySelector('#experience').style.display = "none";
                                // this toggles the display of the nfo in the education div
                                let info = document.querySelector('#education');
                                if(!info.style.display) {
                                    info.style.display = "none";
                                }
                                console.log(info);
                                (info.style.display === "none") ? info.style.display = 'block' : info.style.display = 'none';
                                if (document.querySelector('#technologies').style.display === "none" 
                                    && document.querySelector('#education').style.display === "none"
                                    && document.querySelector('#experience').style.display === "none") {
                                        document.querySelector('#default').style.display = "block";
                                    }
                            }}
                        >
                            Education
                        </a>
                    </li>
                </ul>
                
                <div className="mt-4 flex flex-col md:flex-row">
                    <div id="experience" className="animate hidden"> Experience {filler} {filler} </div>
                    <div id="technologies" className="animate hidden"> Technologies {filler} {filler}</div>
                    <div id="education" className="animate hidden"> Education {filler} {filler}</div>
                    <div id="default" className="animate"> default {filler} {filler}</div>
                    <div className="w-full md:w-1/2 mt-2 md:mt-0 md:ml-6 md:mb-4 self-center md:self-start md:flex-shrink-0">
                        <img className="mx-auto border-[10px] border-green-400 shadow-2xl" src={selfie} alt="Nicholas Easter"/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default About;
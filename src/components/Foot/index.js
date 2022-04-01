import React from "react";

const Foot = () => {
    return (
        <div>
            <footer className=" bg-green-100 fixed left-0 bottom-0 w-full">
                <div className="flex justify-center">
                    <a href="/"><span className=" mx-5 italic text-green-900 hover:text-black">GitHub</span></a>
                    <a href="/"><span className=" mx-5 italic text-green-900 hover:text-black">LinkedIn</span></a>
                    <a href="/"><span className=" mx-5 italic text-green-900 hover:text-black">Stackshare</span></a>
                </div>
            </footer>
        </div>
    );
}

export default Foot;
import React from "react";

const Foot = () => {
    return (
        <div>
            {/** Footer Begin */}
            <footer className=" mt-4 h-14 bg-green-200 shadow-lg">
                <div className="flex justify-center">
                    <a href="/" className=" my-5"><span className=" mx-5 italic text-green-900 hover:text-black">LinkedIn</span></a>
                    <a href="/" className=" my-5"><span className=" mx-5 italic text-green-900 hover:text-black">GitHub</span></a>
                    <a href="/" className=" my-5"><span className=" mx-5 italic text-green-900 hover:text-black">Stackshare</span></a>
                </div>
            </footer>
        </div>
    );
}

export default Foot;
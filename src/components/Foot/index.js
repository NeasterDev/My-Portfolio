import React from "react";

const Foot = () => {
    return (
        <div>
            <footer className=" h-14 bg-green-200 fixed left-0 bottom-0 w-full overflow-auto">
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
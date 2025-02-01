import Image from "next/image";
import React from "react";
import Arrow from "../assets/Group 212.png";


function ProjectManagment() {
  
  return (
    <div className="bg-white w-auto h-[1588px] ml-8  min-h-[829px] flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-16 lg:py-0">
      <div className="flex justify-center ">
        <div className="mt-[140px] w-[672px] max-w-2xl lg:pr-8 ">
          <h2 className="font-bold text-[72px] leading-[87.14px] mt-[68px] text-black pb-6 ">
            Project <br />
            Management
          </h2>
          <p className="font-normal text-[18px] leading-[30px] text-black ">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>

          <button className="flex items-center gap-2 bg-[#69A9FF] hover:bg-[#5499FF] text-white px-6 py-3 rounded-lg mt-16 font-medium text-lg">
            Get Started
            <Image
              className=" transition-transform duration-200 group-hover:translate-x-0.5"
              src={Arrow}
              alt="Arrow"
            />
          </button>
        </div>
        <div className=" mx-8 my-[140px] w-full lg:w-[748px] h-[547px] lg:h-[549px] bg-[#C4DEFD] mt-8 lg:mt-8 "></div>
      </div>

     
    </div>
  );
}

export default ProjectManagment;

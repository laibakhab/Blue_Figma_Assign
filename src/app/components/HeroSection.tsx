import React from "react";
import Arrow from "@/app/assets/Group 212.png";
import Image from "next/image";
function HeroSection() {
  return (

    <div className="bg-[#043873] min-h-[829px] flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-16 lg:py-0">
      <div className="w-full lg:w-1/2 max-w-2xl lg:pr-8">
        <h2 className="font-bold text-4xl md:text-5xl lg:text-[64px] leading-tight text-white pb-6">
          Get More Done with whitepace
        </h2>
        <p className="font-normal text-lg leading-[30px] text-white">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <button className="group flex items-center gap-2 bg-[#69A9FF] hover:bg-[#5499FF] text-white px-6 py-3 rounded-lg mt-8 lg:mt-16 font-medium text-lg transition-colors duration-200">
          Try Whitepace free
          <Image
            className="transition-transform duration-200 group-hover:translate-x-0.5"
            src={Arrow}
            alt="Arrow"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="w-full lg:w-[824px] h-[300px] lg:h-[549px] bg-[#C4DEFD] mt-8 lg:mt-0"></div>
    </div>
  );
}

export default HeroSection;

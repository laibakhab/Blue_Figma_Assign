import Image from 'next/image'
import React from 'react'
import Arrow from "@/app/assets/Group 212.png";
function Extension() {
  return (
    <div>
        <div className="bg-[#043873] w-auto h-[759px] flex justify-center ">
      <div className="mx-8  mt-[232px]  max-w-2xl lg:pr-8">
        <h2 className="font-bold text-[64px] leading-[77.45px] text-white pb-6 ">
        Use as Extension
        </h2>
        <p className="font-normal text-[18px] leading-[30px] text-white">
        Use the web clipper extension, available on Chrome and Firefox, <br/> to save web pages or take screenshots as notes.

        </p>

        <button className="flex items-center gap-2 bg-[#69A9FF] hover:bg-[#5499FF] text-white px-6 py-3 rounded-lg mt-16 font-medium text-lg">
        Let’s Go
          <Image
            className=" transition-transform duration-200 group-hover:translate-x-0.5"
            src={Arrow}
            alt="Arrow"
          />
        </button>
       
      </div>
      <div className="w-[686px] h-[479px] bg-[#C4DEFD] mx-8 mt-[140px]"></div>
    </div>
    </div>
  )
}

export default Extension

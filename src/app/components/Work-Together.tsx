import React from 'react'
import WorkTogetherImage from "../assets/Work Together Image.png"; 
import Image from 'next/image';
import Arrow from "../assets/Group 212.png";

function WorkTogether() {
  return (
    <div>
       <div className="flex gap-6  justify-center">
        <div className="mx-8 w-[710px] h-[661px] ">
          <Image src={WorkTogetherImage} alt="WorkTogetherImage" />
        </div>
        <div className=" mt-[140px] w-[672px] ">
          <h2 className="font-bold text-[72px] leading-[87.14px]  max-w-2xl lg:pr-8  text-black pb-6 ">
            Work together
          </h2>
          <p className="font-normal text-[18px] leading-[30px] text-black ">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>

          <button className="flex items-center gap-2 bg-[#69A9FF] hover:bg-[#5499FF] text-white px-6 py-3 rounded-lg mt-16 font-medium text-lg">
            Try it now
            <Image
              className=" transition-transform duration-200 group-hover:translate-x-0.5"
              src={Arrow}
              alt="Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkTogether

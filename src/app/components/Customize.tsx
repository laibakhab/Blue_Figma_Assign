import Image from 'next/image'
import React from 'react'
import Arrow from "../assets/Group 212.png";
function Customize() {
  return (
    <div>
        <div className="bg-white w-auto h-[812.09px] flex justify-center">
      <div className="w-[714px] h-[532.09px]  lg:w-1/2 max-w-2xl lg:pr-8 bg-[#C4DEFD] mx-8 mt-[140px]"></div>
      <div className="mt-[232px]">
        <h2 className="font-bold text-[64px] leading-[77.45px] text-black pb-6 ">
        Customise it to your needs
        </h2>
        <p className="font-normal text-[18px] leading-[30px] text-black">
        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). <br/>  Or create your own scripts and plugins using the Extension API.

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
    </div>
    </div>
  )
}

export default Customize

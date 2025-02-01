import React from 'react'
import Apple from "../assets/Apple.png"
import Microsoft from "../assets/Microsoft.png"
import Slack from "../assets/Slack.png"
import Google from "../assets/Google.png"
import Image from 'next/image'
function SponsorsSection() {
  return (
    <div className=''>
<section className=" px-4 h-[538px] ">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-[#2B2B2B] text-[72px] leading-[87.14px] font-bold text-center mb-12 pt-[140px]">
          Our sponsors
        </h2>
        
        <div className="flex flex-wrap items-center justify-center mt-[100px] gap-x-[220px] pb-[140px]">
          {/* Apple Logo */}
          <div className="w-28 h-16 flex items-center justify-center">
            <Image src={Apple} alt='' />
          </div>

          {/* Microsoft Logo */}
          <div className="w-28 h-16 flex items-center justify-center">
          <Image src={Microsoft} alt='' />
          </div>

          {/* Slack Logo */}
          <div className="w-28 h-16 flex items-center justify-center">
          <Image src={Slack} alt='' />
          </div>

          {/* Google Logo */}
          <div className="w-28 h-16 flex items-center justify-center">
          <Image src={Google} alt='' />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default SponsorsSection

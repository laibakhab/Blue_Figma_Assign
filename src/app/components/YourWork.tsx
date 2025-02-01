import Image from 'next/image'
import React from 'react'
import Arrow from "../assets/Group 212.png";
function YourWork() {
  return (
    <div className=''>
     
     <section className="bg-[#002B5B] h-[574px] flex items-center justify-center px-4 ">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-[72px] leading-[87.14px] md:text-5xl font-bold mb-6">
          Your work, everywhere you are
        </h2>
        
        <p className="text-[#A5B6CD] text-[18px] leading-[30px] font-normal md:text-lg mb-8 max-w-2xl mx-auto ">
        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
        </p>

        <button className="group inline-flex items-center gap-2 bg-[#4F9CF9] text-white px-6 py-3 rounded-lg ">
          Try Taskly
          <Image src={Arrow} alt=''
            className="w-3 h-3" 
          />
        </button>
      </div>
    </section>
    </div>
  )
}

export default YourWork

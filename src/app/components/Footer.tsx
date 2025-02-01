import logo from "@/app/assets/Logo.png"
import Image from "next/image"

import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="bg-[#002B5B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              {/* Logo Icon */}
              <Image src={logo} alt='logo' width={191} height={34} />
            </div>
            <p className="text-[#F7F7EE] text-sm leading-relaxed">
            whitepace was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#FFE492] hover:text-white transition-colors">Overview</a></li>
              <li><a href="#" className="text-[#FFFFFF] hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[#FFFFFF] hover:text-white transition-colors">Customer stories</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#FFFFFF] hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-[#FFFFFF] hover:text-white transition-colors">Guides & tutorials</a></li>
              <li><a href="#" className="text-[#FFFFFF] hover:text-white transition-colors">Help center</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#FFFFFF] hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-[#FFFFFF] hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#FFFFFF] hover:text-white transition-colors">Media kit</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#234571] text-center">
          <p className="text-[#FFFFFF] text-sm">
          ©2021 Whitepace LLC.
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer



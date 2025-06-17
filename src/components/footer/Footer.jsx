

import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import logo from "../../../public/sandstone.png"
const Footer = () => {
  return (
    <div className=" max-w-[1440px] max-auto w-[100%] font-raleway ">
      <footer className="bg-[#131714] text-white  pl-[15rem] pr-[15rem]  pt-[8rem] pb-[8rem] max-lg:pl-[2rem]  max-lg:pr-[2rem]">
        <div className=" mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  pb-10 animate-fadeIn">

          {/* Logo & Description */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="bg-yellow-600 w-6 h-4"></div>
              <h2 className="text-xl font-bold">COMFY.</h2> */}
              <img src={logo} className="w-[15.6rem] h-[6rem] object-contain" />
            </div>
            <p className="text-[1.4rem] text-[#B1B7C6] leading-relaxed">
              SAND & STONES SOLUTIONS
              Transforming interiors with creativity and detail.

            </p>
            <div className="flex space-x-4 mt-4 text-[#B1B7C6]">
              {['facebook-f', 'twitter', 'instagram', 'youtube'].map((icon) => (
                <i
                  key={icon}
                  className={`fab fa-${icon} cursor-pointer hover:text-yellow-500 transition-all duration-300 transform hover:scale-110`}
                ></i>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-yellow-600 font-semibold text-[1.4rem] mb-4">QUICK LINK</h4>
          <ul className="space-y-2 text-[1.4rem] text-[#B1B7C6]">
  {[
    { label: 'Contact Us', href: '/contact' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/service' },
    { label: 'Project', href: '/project' },
  ].map(({ label, href }) => (
    <li key={label} className="w-fit mb-[0.5rem]">
      <a
        href={href}
        className="hover:text-yellow-500 hover:border-b hover:border-yellow-500 transition-all duration-300 cursor-pointer text-[1.4rem]"
      >
        {label}
      </a>
    </li>
  ))}
</ul>

          </div>

          {/* Location */}
          <div className="flex flex-col">
            <h4 className="text-yellow-600 font-semibold text-[1.4rem] mb-4">LOCATION</h4>
            <p className="text-[1.4rem] text-[#B1B7C6] mb-2">
           Bangalore , India
            </p>
            <p className="text-[1.4rem] text-[#B1B7C6] mb-2">officesandandstone@gmail.com</p>
            <p className="text-[1.4rem] text-[#B1B7C6]">+91 90356 62976</p>
          </div>

          {/* Newsletter or Social Media */}
          <div className="flex flex-col">
            <h4 className="text-yellow-600 font-semibold text-[1.4rem] mb-4">SOCIAL MEDIA</h4>
            <p className="text-[1.4rem] text-[#B1B7C6] mb-4">
              Follow us on our platforms for more updates!
            </p>

            <div className="flex gap-[1.5rem] mt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#3b5998] text-white rounded-full hover:bg-white hover:text-[#3b5998] transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebookF size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#0077b5] text-white rounded-full hover:bg-white hover:text-[#0077b5] transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedinIn size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white rounded-full hover:bg-white hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}

      </footer>
      <div className="text-center bg-[#4F6D56] p-[1.5rem] text-[#FFFFFF] text-[1.1rem] font-medium leading-[1.4rem]  animate-fadeIn">
        © 2025 SandandStones Solutions. Powered by <a href="https://webnestmedia.com/" className='text-yellow-600'> WebNest Media</a>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'

import Conatctfrom from "../../components/contact/contactform";
import { FiPhone } from "react-icons/fi";

import Accordian from "./component/Accordian";



const MarketingResearch = () => {


  return (
    <div className='mt-[120px] max-w-[1440px] w-[100%] mx-auto ' >
    
    
          <section className="  max-w-[1440px] w-[100%] mx-auto conatctform flex flex-row items-center justify-center flex-wrap gap-10 max-lg:flex-col mb-10 px-5 py-10">
    
            {/* Left Side: Text + Numbers */}
            <div className="w-[45%] max-lg:w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5c945c] ">
                Work With Us and Take <br />Your Business to the Next Level
              </h3>
              <p className="text-[17px] text-black mt-5 mb-5 ">
                We provide the tools, expertise, and support you need to grow faster,
                <br /> reach more customers, and stay ahead of the competition.
                <br /> Let’s take your business to the next level—together.
              </p>
    
    
              <div className="space-y-2">
                <button className="getstarted-btnn w-[200px] flex items-center gap-2 px-4 py-2 rounded bg-[#5c945c] text-white">
                  <FiPhone className="text-white" />
                  <a href="tel:+919696964606" className="text-white">
                    +91-9696964606
                  </a>
                </button>
    
                <button className="getstarted-btnn w-[200px] flex items-center gap-2 px-4 py-2 rounded bg-[#5c945c] text-white">
                  <FiPhone className="text-white" />
                  <a href="tel:+919211676307" className="text-white">
                    +91-9211676307
                  </a>
                </button>
              </div>
    
    
            </div>
    
            {/* Right Side: Contact Form */}
            <div className="w-[45%] max-lg:w-full">
              <Conatctfrom className="w-full" />
            </div>
    
    
    
    
          </section>
    
          <section className=' max-w-[1440px] w-[100%] mx-auto mt-[60px] mb-[50px]'>
            <Accordian />
          </section>
    
      
    </div>
  )
}

export default MarketingResearch

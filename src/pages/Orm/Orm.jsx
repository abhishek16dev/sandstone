import React from 'react'
import { useEffect, useRef, useState } from 'react';
import './Orm.css';
import timer from "../../pages/Orm/resourse/timer.svg"

import brand1 from "./resourse/brand1.svg";
import brand2 from "./resourse/brand2.svg";
import brand3 from "./resourse/brand3.svg";
import brand4 from "./resourse/brand4.svg";
import brand5 from "./resourse/brand5.svg";
import brand6 from "./resourse/brand6.svg";
import brand7 from "./resourse/brand7.svg";
import brand8 from "./resourse/brand8.svg";
import { FiPhone } from "react-icons/fi";
import iot from "./resourse/iot.svg"
import Accordian from "./component/Accordian"
import bannerimage from "./resourse/bannerimage.svg"
import topimage from "./resourse/topimage.svg";
const Orm = () => {
  const services = [
    {
      "title": "Brand Monitoring",
      "description": "Constantly track mentions of your brand across search engines, review sites, blogs, and social media to ensure a quick response to any negative or misleading content.",
      "image": brand1
    },
    {
      "title": "Review Management",
      "description": "Helps manage and respond to online reviews on platforms like Google, Yelp, and Trustpilot. Encourages positive reviews and addresses negative ones professionally to maintain brand trust.",
      "image": brand2
    },
    {
      "title": "Search Engine Reputation Management (SERM)",
      "description": "Improves the visibility of positive content and pushes down negative search results on Google and other search engines to influence what people see first.",
      "image": brand3
    },
    {
      "title": "Content Creation & Promotion",
      "description": "Creates high-quality, positive content—like blogs, articles, press releases, and profiles—that enhances your brand’s online presence and credibility.",
      "image": brand4
    },
    {
      "title": "Crisis Management",
      "description": "Handles reputation crises such as viral complaints, false accusations, or sudden negative publicity with rapid response strategies and damage control.",
      "image": brand5
    },
    {
      "title": "Social Media Reputation Management",
      "description": "Monitors and manages your presence on platforms like Facebook, Instagram, LinkedIn, and Twitter to ensure positive engagement and timely responses to criticism.",
      "image": brand6
    },
    {
      "title": "Negative Content Removal or Suppression",
      "description": "Works to legally remove false or defamatory content where possible or suppress it through SEO strategies to minimize its visibility.",
      "image": brand7
    },
    {
      "title": "Personal Reputation Management",
      "description": "Tailored ORM services for public figures, executives, influencers, or celebrities to maintain a clean, professional online image.",
      "image": brand8
    },
    {
      "title": "Online Review Generation Campaigns",
      "description": "Implements strategies to collect and showcase genuine positive reviews from satisfied customers, helping to build social proof.",
      "image": brand8
    }
  ]


  return (
    <div className='mt-[120px] max-lg:mt-[20px] max-w-[1440px] w-[100%] mx-auto  pl-[40px] pr-[40px] 
  '>
    <div className="topsection">
            <img src={topimage} alt="" />
             <h2><span className='text-[#4CAF50]'>Online Reputation </span> Management</h2>
          </div>


      {/* 
      <section>
        <img src={bannerimage} />
      </section> */}

      {/* <section className='text-center h-[80px] '>

        <h2 className="heading-styled relative h-[60px] text-[40px]  bg-yellow font-bold text-black px-4 py-1  ">
          {text}
        </h2>
      </section> */}



      <section>



        {/* <h5 className='
  text-[44px]
 
  font-normal
  relative 
  inline 
  w-[calc(100% - 480px)] 
  top-[120px] 
  left-0
  max-xl:top-[18px]
  max-xl:w-full 
  max-lg:text-[36px] 
  max-md:text-[23px] 
  max-sm:text-[22px]
'>
          <span className='text-[#000000]'>Online Reputation</span>
          <span className='text-[#4CAF50]'> Management Services</span>
          <span className='text-[#000000]'>?</span>
        </h5> */}

        <h5
          className="
    text-[22px]          
    sm:text-[23px]        
    md:text-[36px]     
    xl:text-[44px]       
    font-normal
    relative
    inline
    w-full              
    xl:w-[calc(100%-480px)] 
    top-[18px]           
    xl:top-[120px]        
    left-0
  "
        >
          <span className="text-[#000000]">Online Reputation</span>
          <span className="text-[#4CAF50]"> Management Services</span>
          <span className="text-[#000000]">?</span>
        </h5>




        <div className="flex max-lg:flex-col justify-between items-start gap-8">
          {/* Text Content */}
          <div className="flex-1 min-w-0 max-w-[785px] max-md:w-[100%]">
            <h6 className="text-[18px] text-[#000000] font-semibold  max-lg:font-normal mt-[120px] max-xl:mt-[20px]">
              Rebuild Your Reputation with India’s best Online Reputation Management Expert
            </h6>

            <p className="text-[15px] font-normal mt-[46px] max-lg:mt-[20px]">
              Whether your business is being unfairly targeted by competitors or naturally receiving mixed reviews due to a large customer base, our online reputation management services are designed to help you regain control.
              <br className="max-md:hidden" /><br className="max-md:hidden" />
              We are a results-focused online reputation management company in India, driven by strategy, experience, and modern digital tools. With a skilled team and reliable systems in place, we work diligently to protect and uplift your brand’s online image.
              <br className="max-md:hidden" /><br className="max-md:hidden" />
              From handling dissatisfied customers to managing negative feedback from former employees or competitive sabotage, we offer discreet solutions trusted by businesses, influencers, and public figures alike.
              <br className="max-md:hidden" /><br className="max-md:hidden" />
              Our ORM services continuously track, manage, and improve your digital reputation while offering valuable insights into public sentiment. Your brand’s credibility matters — our solutions ensure that what people see online reflects the best version of your business.
            </p>
          </div>

          {/* Image */}
          <div className="w-[35%] max-lg:w-[35% mt-[40px]  max-md:w-[100%]  lg:mt-0 max-lg:justify-center max-lg:items-end max-lg:mx-auto">
            <img
              src={timer}
              alt="Example"
              className="w-full  h-auto rounded-lg object-contain"
            />
          </div>

        </div>


      </section>


      <section>

        <div className="flex max-lg:flex-col mt-[96px] gap-6 justify-between">

          <div className="w-[667px]  max-lg:w-[100%] lg:sticky lg:top-[200px] self-start max-lg:sticky-unset">
            <h6 className='text-[46px] max-md:text-[23px] max-lg:text-[26px]  text-[black] font-normal'>Types of Online Reputation Management Services</h6>
            <p className='text-[18px] mt-[32px] text-[black] font-normal'>As India’s no. 1 online reputation management, We keep you updated about what is being said about your business or brand online by managing, tracking, and reporting on the most crucial elements of your online reputation. </p>
          </div>




          <div className="w-[507px] max-lg:w-full cursor-pointer" data-aos="fade-up">



            {services.map((service, index) => {
              return (
                <div key={index} className="flex items-start max-md:flex-col gap-4 mb-8 ">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[61px] h-[52px] object-cover rounded-lg"
                  />

                  <div className='border-b-[1px] border-black pb-4'>
                    <h6 className="text-[16px] font-semibold text-[#000000]">{service.title}</h6>
                    <p className="text-[16px] font-normal text-[#333333]">{service.description}</p>
                  </div>

                </div>
              );
            })}



          </div>

        </div>


      </section>



      <section className="flex flex-col lg:flex-row items-start justify-between mt-[62px] gap-8 lg:gap-0 px-4 lg:px-0">


        <div className="w-full lg:w-[785px] pl-[20px] max-md:pl-[0]">
          <h5 className="font-light leading-tight
            text-[22px]          
    sm:text-[23px]       
    md:text-[36px]       
    xl:text-[44px]    
          ">
            Why Your Business Needs <br /> Reputation Management
          </h5>

          <p className="text-[16px] font-normal mt-[24px] leading-relaxed">
            Your online reputation has the power to make or break your business in the modern digital age. Whether it’s a small comment on social media or a review on Google, customers are forming opinions about your brand before ever speaking to you. That’s why reputation management is no longer optional—it’s essential.

            <br className="hidden lg:inline" />

            A single negative article or poor review can push potential customers toward competitors, even if your product or service is top-notch. Reputation management helps control the narrative, ensures positive visibility, and builds trust with your audience.
            <br className="hidden lg:inline" />


            With effective reputation management, you can:
          </p>

          <ul className="flex flex-wrap  text-[16px] text-[#333]  pl-[30px] mt-[12px]">
            <li className='list-disc ' >Monitor what people are saying about your brand</li>
            <li className='list-disc '>Respond to negative feedback before it escalates</li>
            <li className='list-disc '>Promote positive content and customer experiences</li>
            <li className='list-disc '>Enhance your brand’s credibility and trustworthiness</li>
            <li className='list-disc '>Protect your business from online attacks and misinformation</li>
          </ul>

          <p className="mt-[20px] text-[16px] font-normal leading-relaxed">
            In short, reputation management safeguards your most valuable asset—your brand image—and turns perception into profit.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[440px]  items-center flex justify-center items-starth-[581px]  lg:justify-center">
          <img
            src={iot}
            alt="Reputation Management Illustration"
            className="w-full max-w-[440px] h-[full]  rounded-lg object-contain"
          />
        </div>

      </section>

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

      <section>

        <h2 className='mt-[40px] text-[black] font-normal leading-[160%]
          text-[22px]           
    sm:text-[23px]        
    md:text-[36px]        
    xl:text-[44px]    
        '>Let's address your <span className='text-[#4CAF50] '>questions </span>today</h2>

        <Accordian />
      </section>



    </div>
  )
}

export default Orm

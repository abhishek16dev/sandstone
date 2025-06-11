import React from 'react'
import Accordion from  './component/Accordian'
import Conatctfrom from "../../components/contact/contactform";
import { FiPhone } from "react-icons/fi";

import  Webnest_Logo from "./resources/Webnest_Logo.svg";
import difference from "./resources/difference.svg";
import bulb from "./resources/bulb.svg"
import team from "./resources/team.svg";
import founder from "./resources/founder.svg";


import image1 from "./resources/image1.svg";
import image2 from "./resources/image2.svg";
import image3 from "./resources/image3.svg";
import image4 from "./resources/image4.svg";
import image5 from "./resources/image5.svg";
import image6 from "./resources/image6.svg";


const cards = [
  { icon: image1, title: "Client-Centric Approach" },
  { icon: image2, title: "Data-Driven Decisions" },
  { icon: image3, title: "Holistic Expertise" },
  { icon: image4 ,title: "Holistic Expertise" },
  { icon: image5, title: "Local & Global Insights" },
    { icon: image6, title: "Passionate Team" },

];


const AboutUS = () => {






  
  return (
  <div className=" mt-[120px] px-4">

 <h4 className='text-center mt-[200px]  text-[48px] leading-[100%]'> <span className='font-semibold text-green-500'> About </span> <span className='font-normal text-black'>US</span> </h4>


  
    <section className="max-w-[1440px] w-full mx-auto py-16 px-4 lg:px-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl  max-md:w-[100%]" 
        data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="100"
        >
          <h1 className="text-[52px] md:text-4xl font-bold text-[#000000]  mb-4">
            Few Words About WebNest Media
          </h1>
          <p className=" text-[black] text-[18px] mb-4">
            Best Digital Marketing Agency in Gurgaon, India. The Digital Marketing Company that gives it full commitment to grow your brand.
          </p>
          <p className=" text-[#000000] text-[18px]">
            WebNest Media is a digital marketing company in Gurgaon, working with awesome brands across India and worldwide. Our digital marketing experts do all things digital from SEO and PPC to social media marketing, SEM, and web development so you get the right services which you paid. We have a team of our services including SEO Executive, Web Developer, Graphic Designer, Social Media Experts & Content Writers. We also redesign and redevelopment of existing web sites.
          </p>
        </div>
        <div className="flex-shrink-0  max-md:w-[100%]">
          <img
            src={ Webnest_Logo}
             data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="200"
            alt="WebNest Media Logo"
            className="w-[450px] h-[450px] sm:w-[250px] sm:h-[250px] md:w-[200px] md:h-[200px] object-contain mx-auto md:mx-0"
          />
        </div>
      </section>

  


      {/* Stats Section */}
      <section className=" max-w-[1440px] w-[100%] mx-auto py-10 px-4 text-center mt-[56px]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-[#000000] ">21+</h3>
            <p className="text-sm  text-[#000000] ">Years In Business</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#000000] ">500+</h3>
            <p className="text-sm text-[#000000] ">Projects</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#000000] ">1500+</h3>
            <p className="text-sm text-[#000000] ">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#000000] ">880+</h3>
            <p className="text-sm text-[#000000] ">Tickets Resolved</p>
          </div>
        </div>
      </section>

     <section className="relative bg-black text-white py-20 px-6 overflow-hidden mt-[96px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-90">
        <img
          src={difference}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative  text-center z-10 max-w-[1440px] w-[100%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Makes Us Different
        </h2>
        <p className="text-[white] mb-10">
          We understand you have choices, and we work hard every day to stand out. <br />
          Here’s what sets WebNest Media apart
        </p>

        {/* Card Row */}
        <div className="flex justify-center flex-wrap gap-[20px] overflow-x-auto md:overflow-visible">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[210px] bg-white bg-opacity-10 backdrop-blur-md pt-[22px] pb-[23px] pl-[49px] pr-[49px] rounded-lg flex flex-col items-center justify-center hover:bg-opacity-20 transition"
            >
              <img src={card.icon} className='w-[72px] h-[72px]' />
              <p className="text-[18px] leading-[160%] font-semibold text-center mt-[32px]">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  

        <section className=" max-w-[1440px] w-[100%] mx-auto text-center px-4 pt-16 pb-10  relative z-10">
     
        <h4 className="text-sm uppercase tracking-widest text-[#9bc394] font-semibold">
          Vision & Mission
        </h4>
        <h1 className="text-[52px] font-bold text-[black] mt-2 mb-4">
          What We Believe
        </h1>
        <p className="max-w-2xl mx-auto text-[18px] text-gray-600">
          Our vision is to empower businesses of all sizes to achieve success through data-driven decision making. We strive to be a leader in the digital space, delivering valuable results and innovative solutions.
        </p>
        <p className="max-w-2xl mx-auto text-[18px]  text-gray-600 mt-4">
          Our mission is to deliver exceptional digital marketing services that drive measurable business outcomes. We work with clients of all sizes and sectors, closely aligned with their mission and goals to deliver impactful results.
        </p>
    
      </section>



    <section className="
    
    max-w-[1440px] w-full mx-auto py-16 px-4 lg:px-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12
    
    ">
       
           <div className="flex-shrink-0">
          <img
            src={bulb}
            alt="WebNest Media Logo"
            className="w-[345px] h-[485px] sm:w-[250px] sm:h-[250px] md:w-[200px] md:h-[200px] object-contain mx-auto md:mx-0"
          />
        </div>

        <div className="max-w-2xl max-md:w-[100%]">
          <h2 className="text-[52px] md:text-4xl font-bold text-gray-900 mb-4">
         Our Key to Excellence
          </h2>
          <p className=" text-gray-700 text-[18px] mb-4">
        At WebNest Media, our success stems from a simple yet powerful philosophy: innovation meets measurable results. We think that staying ahead in the ever-changing landscape of digital marketing requires ongoing evolution. Our team of passionate strategists, creative minds, and data-driven analysts are not just keeping pace with trends; we're setting them.
          </p>
          <p className="text-[18px] text-gray-700">
         We meticulously analyze market shifts, integrate cutting-edge technologies, and rigorously test every strategy to ensure it delivers tangible ROI for your business. Our commitment to continuous learning, combined with a deep understanding of your unique challenges, allows us to craft bespoke solutions that don't just meet expectations but exceed them. This dedication to forward-thinking strategies and unwavering client success is truly our key to excellence
         
          </p>
        </div>
    
      </section>


<section className='mt-[96px] max-w-[1440px] w-[100%] mx-auto '>
  <h6 className='text-[32px] font-semibold text-black leading-[160%] text-center'>Ready to Transform Your Digital Presence?</h6>
  <p className='text-[18px] text-black font-light text-center mt-[32px] mb-[128px]'> Whether you're looking to boost your search rankings, engage your social audience, or develop a comprehensive <br  className='max-lg:hidden'/> digital strategy, WebNest Media is here to help.</p>


</section>

  <section className="max-w-[1440px] w-[100%] mx-auto  px-6 py-16 flex flex-col md:flex-row justify-center items-start gap-10 ">
      
      {/* Left Side - Team Image and Description */}
      <div className="flex-1 text-center md:text-left ">
        <img
          src={team} // Replace with your actual image path
          alt="Team"
          className="mb-6 w-full"
        />
        <p className="text-gray-700 text-base leading-relaxed">
          Our diverse team includes strategists, designers, developers, content creators,
          media buyers, analysts, and client success managers—all working seamlessly to deliver
          not just campaigns, but impactful digital experiences. We’re constantly optimizing our
          strategies to provide our clients with a smooth, transparent, and personalized journey
          from initial brief to measurable results.
        </p>
      </div>

      {/* Right Side - Team Member Highlight */}
      <div className="flex-1 text-center">
        <img
          src={founder} // Replace with actual image path
          alt="Stephanie Sobral"
          className="w-64 h-auto mx-auto mb-4 rounded"
        />
        <p className="text-gray-900 font-medium text-lg">Stephanie Sobral</p>
        <p className="text-gray-500 text-sm">Drafter and Permit Specialist</p>
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





       <section className=' max-w-[1440px] w-[100%] mx-auto  mt-[60px] mb-[50px]'>
            <h2 className='mt-[40px] text-[black] font-normal leading-[160%]
          text-[22px]           
    sm:text-[23px]        
    md:text-[36px]        
    xl:text-[44px]    
        '>Let's address your <span className='text-[#4CAF50] '>questions </span>today</h2>

        <Accordion />
      </section>




   </div>

  )
}

export default AboutUS

import React from 'react'
import ContactForm from '../../components/contact/contactform'
import Accordion from './component/Accordian'
import { SiConsul } from "react-icons/si";

import { MdMovieCreation } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GrOptimize } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { FaWordpress, FaShoppingCart, FaBusinessTime, FaBlogger, FaGraduationCap, FaUsers, FaCalendarAlt, FaWpforms } from "react-icons/fa";

import { Helmet } from 'react-helmet'
const web = () => {


const cardData = [
  {
    id: 1,
    title: "WordPress",
    description:
      "WordPress is used to create a lot number of websites. We create responsive, fully optimized websites that are easy to update and built to perform across all devices and industries.",
    icon: <FaWordpress />,
  },
  {
    id: 2,
    title: "E-commerce Websites",
    description:
      "We build powerful eCommerce websites that are fast, secure, and easy to manage. From product listings to smooth checkout, we create online stores that boost sales and user experience.",
    icon: <FaShoppingCart />,
  },
  {
    id: 3,
    title: "Business Websites",
    description:
      "We design the best business websites that reflect your brand, build credibility, and turn visitors into leads. Our sites are fast, mobile-friendly, and built to grow with your company.",
    icon: <FaBusinessTime />,
  },
  {
    id: 4,
    title: "Blog Websites",
    description:
      "Share your passion with the world. We build blog websites that are stylish, scalable, and optimized for both performance and content discovery.",
    icon: <FaBlogger />,
  },
  {
    id: 5,
    title: "Educational Websites",
    description:
      "At WebNest Media, we create educational websites that support learning with features like course listings, student portals, and mobile-friendly design for seamless access.",
    icon: <FaGraduationCap />,
  },
  {
    id: 6,
    title: "Social Media Websites",
    description:
      "Launch your own social media platform with powerful features like user dashboards, messaging, content sharing, and community management—all built for performance and growth.",
    icon: <FaUsers />,
  },
  {
    id: 7,
    title: "Event Websites",
    description:
      "Plan and promote your events with ease using our custom event websites. Featuring easy navigation, ticket sales, event calendars, and live updates, we ensure a smooth experience for both organizers and guests.",
    icon: <FaCalendarAlt />,
  },
  {
    id: 8,
    title: "Form Websites",
    description:
      "Our form websites feature smart validation, secure submission, and integration with your CRM or email marketing tools to help you gather accurate data and connect with your audience.",
    icon: <FaWpforms />,
  },
];


  return (
    <>

    <Helmet>
<title>Best Web Development Company in Gurgaon | Custom Website Solutions – WebNest Media</title>
<meta name="description" content="Build powerful, responsive websites with WebNest Media – a top web development company in Gurgaon. We craft custom solutions to fuel your digital growth." />
<meta name="keywords" content="Web Development Company India, Custom Website Development, WebNest Media, Responsive Web Design, Web Application Development" />
<link rel="canonical" href="https://webnestmedia.com/web-development" />
<meta name="robots" content="index, follow" />
<meta name="author" content="WebNest Media" />

    </Helmet>
  
   <div className='mt-[100px]   w-[100%] '>

    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white relative overflow-hidden">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[black] leading-tight">
            {/* Best Website Development Company in Gurgaon */}

           Best <span className="text-[#409338]"> Web Development  <br/>Company</span> in Gurgaon
        </h1>
        <p className="text-[black] mt-4 max-w-md mx-auto md:mx-0">
        WebNest Media, a leading website development agency in Gurgaon, uses the newest technologies to create scalable, secure, and quick websites. For companies in every sector, our expert developers design customized digital experiences that boost productivity and value.

        </p>
        <button className="mt-6 bg-[#9bc394]  text-white px-6 py-2 rounded-md font-semibold">
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
        {/* Main circle image placeholder */}
        <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center relative z-10">
          {/* <img src="/your-image.svg" alt="Placeholder" className="w-12 h-12 opacity-50" /> */}
        </div>

        {/* Background blob shapes */}
        <div className="absolute top-12 right-8 w-56 h-56 bg-pink-100 rounded-full z-0"></div>
        <div className="absolute bottom-0 left-10 w-12 h-12 bg-blue-100 rounded-full z-0 opacity-60"></div>
      </div>



    </section>


<section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
      
        {/* Left Circle Image Placeholder */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0 relative">
        <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center relative z-10">
          {/* <img src="/your-image.svg" alt="Placeholder" className="w-12 h-12 opacity-50" /> */}
        </div>
      </div>
      {/* Right Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-sm text-[black] uppercase font-semibold mb-2">Why Us?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#409338] mb-6">
          What makes us different in <br />   Web Development? 
        </h2>

        <ul className="space-y-4 text-left text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 text-lg mt-1 mr-2">✔</span>
            <div>
              <p className="font-semibold text-[#EEC370]">Experienced Web Developers</p>
              <p className="text-sm text-[black]">
               Our skilled team of developers builds responsive, high-performance websites tailored to your business goals. From custom coding to modern CMS platforms, we deliver excellence.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-green-500 text-lg mt-1 mr-2">✔</span>
            <div>
              <p className="font-semibold text-[#EEC370]">Performance-First Approach</p>
              <p className="text-sm text-[black]">
               We focus on speed, scalability, and user experience. Every website we build is optimized for performance, ensuring faster load times and better SEO rankings.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-green-500 text-lg mt-1 mr-2">✔</span>
            <div>
              <p className="font-semibold text-[#EEC370]">Client-Centric Solutions</p>
              <p className="text-sm text-[black]">
                We collaborate closely with you to understand your brand, audience, and objectives—delivering websites that not only look great but also drive conversions and growth.
              </p>
            </div>
          </li>
        </ul>

       <button className="mt-6 bg-[#9bc394]  text-white px-6 py-2 rounded-md font-semibold">
          Learn More
        </button>
      </div>

    
    </section>


  <section className="relative overflow-hidden bg-[#eaf7fe]">
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full">
       <svg viewBox="0 0 1440 320" className="w-full h-[100px]" preserveAspectRatio="none">
  <path fill="#ffffff" fillOpacity="1">
    <animate 
      attributeName="d" 
      dur="10s" 
      repeatCount="indefinite"
      values="
        M0,64L60,85.3C120,107,240,149,360,154.7C480,160,600,128,720,122.7C840,117,960,139,1080,133.3C1200,128,1320,96,1380,80L1440,64L1440,0L0,0Z;

        M0,80L60,96C120,112,240,144,360,149.3C480,155,600,133,720,122.7C840,112,960,128,1080,138.7C1200,149,1320,139,1380,128L1440,117L1440,0L0,0Z;

        M0,64L60,85.3C120,107,240,149,360,154.7C480,160,600,128,720,122.7C840,117,960,139,1080,133.3C1200,128,1320,96,1380,80L1440,64L1440,0L0,0Z
      "
    />
  </path>
</svg>

      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-20 text-center max-w-4xl mx-auto">
        <p className="text-[#EEC370] uppercase tracking-widest text-sm font-medium mb-2">Web Development</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#409338] mb-4">
          Best Quality Service
        </h2>
        <p className="text-[black] font-[15px] mb-12">
        At WebNest Media, we specialize in crafting high-performance, visually engaging websites that are built to convert. Whether you're a startup or an established brand, our web development team brings years of industry experience to deliver fast, secure, and scalable websites tailored to your business goals. <br /> 
<br />
        From responsive design to seamless functionality and CMS integration, we ensure every website is optimized for user experience and results. Let us help you turn your digital vision into a powerful online presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <p className="text-3xl font-bold text-[#3f3d56]">100+</p>
            <p className="text-sm text-gray-600 mt-2">Clients Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#3f3d56]">500+</p>
            <p className="text-sm text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#3f3d56]">95%</p>
            <p className="text-sm text-gray-600 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-[100px]" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L60,117.3C120,139,240,181,360,186.7C480,192,600,160,720,154.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>

    <section className='mt-[50px] pl-[40px] pr-[40px]'>

            <h2 class="text-[#409338] font-bold text-[40px] leading-[40px]  text-center stroke-custom fill-custom ">Web Development Company in Gurgaon | Your Vision, Our Expertise
   </h2>


<p className='text-[black] text-[15px] mt-[50px] mb-[50px]'> With over 21 years of experience, WebNest Media stands out as one of the top web development company in Gurgaon, transforming ideas into impactful digital solutions. We've successfully delivered hundreds of custom projects across various industries, serving clients in the UK, USA, Australia, Canada, and India. Our strong track record and a 92% client retention rate speak to our dedication to quality, innovation, and long-term partnerships.
<br/> <br /> 

We create websites that are quick, scalable, and safe by utilizing latest technologies such as React, Angular, Vue.js, Node.js, Progressive Web Apps (PWAs), and headless CMS. With features like AI tools, automation, and simple integrations to increase user engagement and conversions, our responsive designs function smoothly on all devices.
<br/> <br/> <br /> 

Whether you need an eCommerce store, a blog, or a corporate website, WebNest Media has the expertise to turn your vision into a fully functional digital experience. As a trusted website development company, we help businesses of all sizes create a strong online presence that fuels growth and connects with their audience.

<br/>

</p>

    </section>
    
<section className='mx-auto w-[70%] bg-none
'>




    

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardData.map((card) => (
              <div key={card.id} className="bg-white rounded-2xl shadow p-6">
                <div className=" ">
                 
                  <div className='flex items-center gap-2'>
                  <h6 className="w-[20px] h-[20px] object-contain "> {card.icon}</h6>
                   <h4 className="text-lg font-semibold text-[#1a1a1a]">{card.title}</h4>
                     
                   </div>
                    <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
</section>

<section className="relative mt-[120px] mt-[7px] bg-[#C6E4C1] text-[#2d2d2d] px-4 py-20 overflow-hidden">
  {/* Top SVG Wave */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-[100px]"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        d="M0,160 Q180,80 360,160 T720,160 T1080,160 T1440,160 L1440,0 L0,0 Z"
      />
    </svg>
  </div>

  {/* Content */}
  <div className="max-w-6xl mx-auto text-center relative z-10">
    <p className="text-sm uppercase tracking-widest text-[black] font-semibold mb-2">Process</p>
    <h2 className="text-3xl md:text-4xl font-bold text-[#409338] mb-16">How It Works</h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
          {/* <img src="/icons/chat.svg" alt="Consultation" className="w-8 h-8" /> */}
          <SiConsul />
        </div>
        <h3 className="font-semibold text-[#2d2d2d] mb-2">Consultation</h3>
        <p className="text-sm text-[#6b6b6b] text-center">
         We begin with a detailed consultation to understand your business objectives, target audience, and digital challenges. This helps us align our approach with your unique needs.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-[white] rounded-full flex items-center justify-center mb-4 shadow-md">
          {/* <img src="/icons/tools.svg" alt="Creation" className="w-8 h-8" /> */}
       <MdMovieCreation className="text-[32px] " />

        </div>
        <h3 className="font-semibold text-[#2d2d2d] mb-2">Creation</h3>
        <p className="text-sm text-[#6b6b6b] text-center">
        
       Our experts craft a tailored digital marketing strategy, combining creative ideas and data-driven insights to deliver maximum impact.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
          {/* <img src="/icons/settings.svg" alt="Implementation" className="w-8 h-8" /> */}
          <FaHandshakeSimple />
        </div>
        <h3 className="font-semibold text-[#2d2d2d] mb-2">Implementation</h3>
        <p className="text-sm text-[#6b6b6b] text-center">
         We bring the strategy to life—executing campaigns, building assets, and launching initiatives across the right digital channels.
        </p>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
          {/* <img src="/icons/bulb.svg" alt="Optimization" className="w-8 h-8" /> */}
          <GrOptimize />
        </div>
        <h3 className="font-semibold text-[#2d2d2d] mb-2">Optimization</h3>
        <p className="text-sm text-[#6b6b6b] text-center">
         
         We continuously monitor, analyze, and refine your campaigns and content to ensure peak performance and long-term growth.
        </p>
      </div>
    </div>
  </div>


</section>



<section className='mt-[70px]'>

       <div className="conatctform flex flex-row items-center justify-center flex-wrap gap-10 max-lg:flex-col mb-10 px-5 py-10">


        <div className="w-[45%] max-lg:w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-[#5c945c]">
            Work With Us and Take <br />Your Business to the Next Level
          </h3>
          <p className="text-[17px] text-black mt-5 mb-5">
            We provide the tools, expertise, and support you need to grow faster,
            <br /> reach more customers, and stay ahead of the competition.
            <br /> Let’s take your business to the next level—together.
          </p>

          {/* <p>
            <a href="tel:+919696964606" className="text-black font-bold hover:underline">
              +91 9696964606
            </a>
          </p>
          <p>
            <a href="tel:+919211676307" className="text-black font-bold hover:underline">
              +91 9211676307
            </a>
          </p> */}

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


        <div className="w-[45%] max-lg:w-full">
          <ContactForm className="w-full" />
        </div>


      </div>


</section>


<section>
    <Accordion />
</section>


   </div>
     </>
  )
}

export default web

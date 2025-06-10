import React, { useRef } from 'react';
import './digitalservice.css';
import c1_image from './resources/c1_image.svg';
import Conatctfrom from "../../components/contact/contactform";
import { FiPhone } from "react-icons/fi";
import c2_image from './resources/c2_image.svg';
import Accordian from "./component/Accordian";
import Left_Arrow from './resources/Left_Arrow.svg';
import Right_Arrow from './resources/Right_Arrow.svg';
import image_6 from './resources/image_6.svg'
import image_7 from './resources/image_7.svg'
import topimage from './resources/topimage.svg';
const DigitalTranformationservice = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className=''>
      <div className="topsection">
        <img src={topimage} alt="" />
         <h2><span className='text-[#4CAF50]'>Digital Transformation</span> Services</h2>
      </div>
      <div className="dtc1 mb-[96px]">
        <h1 className='text-center text-[52px] mb-[12px]'>
          Digital Transformation
          <span className='text-[#4CAF50]'><br /> Services </span>
        </h1>
        <p className='text-center text-[18px] mb-[20px] font-semibold'>
          We make digital transformation simple by helping you with the smart use of automation, AI, and data-driven <br />
          insights.
        </p>
        <p className='text-center text-[18px] font-semibold mb-[]'>
          Our end-to-end services align technology with your business vision to unlock lasting success.
        </p>
        <div className="flex justify-center mt-10">
          <img src={c1_image} alt="img" className="mx-auto" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="dtc2 flex flex-row mb-[96px]">
        <div className="dtc2left w-[60%] ml-[40px]">
          <h2 className='text-[48px] mb-[32px]'>
            Not sure what is digital transformation? Let’s understand it in plain language.
          </h2>
          <p>
            Digital transformation means using technology to improve how your business works—from automating routine tasks to creating better customer experiences. It’s not just about going digital; it’s about working smarter, faster, and more efficiently by integrating tools like AI, cloud solutions, data analytics, and automation into your operations.
          </p>
          <br /><br />
          <p>
            One of the major benefits of digital transformation is that it helps businesses boost productivity, reduce costs, and stay competitive in a fast-changing market.
          </p>
        </div>
        <div className="dtc2right">
          <img src={c2_image} alt="" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="dtc3 ml-[40px] mb-[96px]">
          <div >
              <h2 className='text-[48px] mb-[35px]'>Digital Transformation Services We Offer</h2>
              <p className='text-[16px] w-[60%]'>
                At WebNest Media, we don’t just help you "go digital"—we help you transform how your business works, connects, and grows. Our digital transformation services are designed to boost efficiency, elevate customer experiences, and future-proof your business with the right tech solutions.
              </p>

            
              {/* Navigation buttons */}
              <div className="flex justify-end mt-[-50px] mb-[40px] ml-10]">
                <button onClick={scrollLeft} className="hover:bg-gray-100">
                  <img src={Left_Arrow} alt="" />
                </button>
                <button onClick={scrollRight} className="hover:bg-gray-100">
                  <img src={Right_Arrow} alt="" />
                </button>
              </div>

          </div>
          {/* Scrollable container */}
          <div className="relative overflow-hidden">
            <div
              ref={sliderRef}
              className="overflow-x-scroll flex space-x-6 py-4 scrollbar-hide"
            >

            {/* Cards */}
            {[
  {
    id: 1,
    title: "Business Process Automation",
    text: "We automate repetitive tasks using modern tools and workflows—saving time, reducing errors, and increasing productivity across departments. From invoice generation to HR onboarding, we help you build smart, self-operating systems."
  },
  {
    id: 2,
    title: "Cloud Migration & Integration",
    text: "We move your legacy systems and data to secure, scalable cloud environments like AWS, Azure, or Google Cloud. With cloud integration, your team can collaborate from anywhere, access real-time data, and scale as your business grows."
  },
  {
    id: 3,
    title: "AI & Machine Learning Solutions",
    text: "Stay ahead with AI-powered tools that automate decisions, personalize user experiences, and predict customer behavior. From chatbots to recommendation engines, we use AI to drive smarter outcomes for your business."
  },
  {
    id: 4,
    title: "CRM & ERP Implementation",
    text: "We implement CRM (like Salesforce or HubSpot) and ERP solutions to unify your operations—sales, inventory, finance, customer service—and streamline your entire workflow."
  },
  {
    id: 5,
    title: "UX/UI Design & Digital Experience",
    text: "Good design = better engagement. We craft user-friendly, modern interfaces that deliver smooth digital experiences across websites, apps, and internal platforms. Because your customers deserve intuitive, delightful interactions."
  },
  {
    id: 6,
    title: "Data Analytics & Business Intelligence",
    text: "Make sense of your data. We build custom dashboards, analytics pipelines, and visual reports that help you understand customer behavior, sales trends, and performance metrics—so you can make smarter business decisions."
  },
  {
    id: 7,
    title: "Cybersecurity & Data Protection",
    text: "Digital growth needs digital safety. We secure your data, applications, and infrastructure with advanced cybersecurity practices including firewalls, encryption, multi-factor authentication, and regular audits."
  },
  {
    id: 8,
    title: "Custom Software Development",
    text: "When off-the-shelf solutions don’t fit, we build custom software tailored to your processes and goals—whether it’s a new internal tool, a client portal, or a full-scale application."
  },
  {
    id: 9,
    title: "Legacy System Modernization",
    text: "Still running on outdated tools? We upgrade and re-engineer your legacy systems into modern, efficient platforms that integrate with current technologies and support your future needs."
  },
  {
    id: 10,
    title: "Omnichannel Strategy Development",
    text: "We help you deliver a seamless, consistent brand experience across all digital channels—web, mobile, email, social, and more—so your customers can connect with you anytime, anywhere."
  }
]
.map((card, index) => (
              <div
                key={index}
                className="inline-block flex-shrink-0 w-[300px] align-top bg-none p-4 text-left"
              >
                <h3 className="mb-6">{card.id}. {card.title}</h3>
                <p className='text-left'>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dtc4 flex flex-row mb-[96px]">
        <div className="dtc4 left w-[60%] ml-[40px]">
          <h2 className='text-[48px] mb-[32px]'>
            We Are a Leading Digital Transformation Solutions Company
          </h2>
          <div className='text-[16px] leading-[150%]'>
            <p>
            At WebNest Media, our deep technical expertise combined with a forward-thinking approach makes us a trusted leader in digital transformation solutions. With a strong history of delivering tailored digital strategies, we help businesses harness next-gen technologies to streamline operations, enhance performance, and scale faster.          </p>
          <br /><br />
          <p>
            Focused on quality, flexibility, and client-first execution, we’re your reliable partner in navigating the digital landscape with confidence and clarity.
          </p>
          <br /> <br />
          <ul>
            <li>• India’s Top 1% Digital Talent</li>
            <li>• Trusted by Startups & Global Brands</li>
            <li>• End-to-End Project Ownership</li>
            <li>• Time-Zone Friendly Teams</li>
            <li>• On-Time Delivery, Always</li>
          </ul>
          </div>
        </div>
        <div className="dtc4 right mt-[20px]">
          <img src={image_6} alt="" />
        </div>
      </div>
       <div className="dtc4 flex flex-row gap-10">
        <div className="dtc4 left w-[60%] ml-[40px]">
          <h2 className='text-[48px] mb-[32px]'>
            Advantages of Digital Transformation          </h2>
          <div className='text-[16px] leading-[150%]'>
            <p>
            Every business from all industries quickly adopts digitalization. With our digital transformation company, we help you by following benefits:</p>
          <br /> <br />
          <ul>
            <li>• Improved Efficiency</li>
            <li>• Cost Reduction</li>
            <li>• Faster Decision Making</li>
            <li>• Enhanced Security</li>
            <li>• Better Customer Experience</li>
          </ul>
          <br /> <br />
          <p>Digital transformation services empower businesses to stay competitive by upgrading traditional operations with modern technology. They allow companies to automate processes, improve customer engagement, harness real-time data, and adapt quickly to market changes.</p>
          </div>
        </div>
        <div className="dtc4 right mt-[20px] px-2">
          <img src={image_7} alt="" />
        </div>
      </div>
      {/* Contact Section */}
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
          <Conatctfrom className="w-full" />
        </div>
      </div>

      {/* Accordion Section */}
      <section className='mt-[60px] mb-[50px]'>
        <Accordian />
      </section>

    </div>
  );
}

export default DigitalTranformationservice;

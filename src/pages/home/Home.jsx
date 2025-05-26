import React, { useState } from "react";
// import '../../../src/index.css'; // or './styles.css'

import "./homeStyle.css"
import Bannerlady from "../../assets/bannerlady.png";
import client from "../../assets/client.png"
import Star1 from "../../pages/home/resources/Frame4.png"
import Star2 from "../../pages/home/resources/Frame5.png"
import Star3 from "../../pages/home/resources/Frame6.png"
import Star4 from "../../pages/home/resources/Frame4.png"

import slideone from "../../pages/home/resources/monday.png";
import slidetwo from "../../pages/home/resources/Notion.png";
import slidethree from "../../pages/home/resources/Slack.png";
import slidefour from "../../pages/home/resources/trello.png";
import pana from "../../pages/home/resources/pana.svg";
import rocket from "../../pages/home/resources/rocket.png";
import marketingbanner from "../../pages/home/resources/marketingbanner.svg";



import PPC  from "../../pages/home/resources/PPC.svg";
import MobileAppDevelopment from "../../pages/home/resources/mobileappdevelopment.svg";
import ConversionRateOptimization from "../../pages/home/resources/ConversionRateOptimization.svg";
import AffiliateMarketing from "../../pages/home/resources/AffiliateMarketing.svg";
import SocialMediaMarketing from "../../pages/home/resources/Socialmediamarketing.svg";
import WebDevelopment from "../../pages/home/resources/WebDevelopment.svg";
import EmailMarketing from "../../pages/home/resources/EmailMarketing.svg";
import SEM from "../../pages/home/resources/SEM.svg";
import ContentMarketing from "../../pages/home/resources/ContentMarketing.svg";
import SEO from "../../pages/home/resources/SEO.svg";



// import "./FlipCard.css";
import * as FaIcons from "react-icons/fa";

const Home = () => {



  const [flippedIds, setFlippedIds] = useState([]);

  const cardsData = [

    { id: 1, icon: PPC, content: " PPC " },
    { id: 2, icon: MobileAppDevelopment, content: "  mobile app development " },
    { id: 3, icon: ConversionRateOptimization, content: " Conversion Rate Optimization " },
    { id: 4, icon: AffiliateMarketing, content: " Affiliate Marketing " },
    { id: 5, icon: SocialMediaMarketing, content: "Social media marketing" },
    { id: 6, icon: WebDevelopment, content: " Web Development " },
    { id: 7, icon: EmailMarketing, content: "Email Marketing" },
    { id: 8, icon: SEM, content: "Search Engine Marketing (SEM)" },
    { id: 9, icon:  ContentMarketing, content: " Content Marketing " },
    { id: 10, icon: SEO, content: "Search Engine Optimization" },

  ];

  const toggleFlip = (id) => {
    if (flippedIds.includes(id)) {
      setFlippedIds(flippedIds.filter((fid) => fid !== id));
    } else {
      setFlippedIds([...flippedIds, id]);
    }
  };

  return (
    <>
      <div className=''>
        <div className="context  flex items-center gap-[60px]  ">



          <div className='text-part '>
            <h1 className="h1tag relative ">
              <span>Best </span>
              <span className="text-[#409338] floating-text">Digital Marketing</span> <br />

              <span>  Agency with  <span className="text-[#409338] floating-text-two">Smart Strategies  </span></span>

              <img src={rocket} className='absolute  top-[90px] left-[90px] animate-floatUp ' />

              {/* <img src={rocket}  className='absolute  top-[90px] right-[90px] animate-floatUp  rotate-270'/> */}

              <div className="absolute top-[90px] right-[90px] animate-float_Up">
                <div className="rotate-[135deg]">
                  <img src={rocket} alt="Rocket" />
                </div>
              </div>


            </h1>



            <h2 className='h2tag text-[black]'>Where strategy meets trust to fuel digital growth</h2>

            <hr className='line'></hr>

            <strong className='text-[grey] trust '>Trusted by 2,000+ local brands and businesses</strong>

            <div className='text-center flex items-center justify-center'>
              <img src={client} />
            </div>



          </div>


        </div>
        <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >

        <div className='subbanner   relative z-10 w-[100%]'>
          <div className='pl-[40px] pr-[40px] pt-[40px] pb-[40px]'>
            <h4>Building Brands with  <br /> Integrity and Innovation <br /> Across India</h4>
            <p>WebNest Media isn’t just another digital marketing company in India — we’re your growth partner. Our team combines strategic thinking, creativity, and technology to elevate your brand across digital channels.

            </p>

            <button className='getstarted-btn'> Get Started</button>

          </div>
          <div>

            <img src={marketingbanner} className="w-[100%] h-[100%]" />




          </div>
        </div>

        <div className="slider-container">
          <div className="slider-track">

            <div className="box"> <img src={slideone} /></div>
            <div className="box"><img src={slidetwo} /> </div>
            <div className="box"><img src={slidethree} /></div>
            <div className="box"><img src={slidefour} /></div>

            <div className="box"> <img src={slideone} /></div>
            <div className="box"><img src={slidetwo} /> </div>
            <div className="box"><img src={slidethree} /></div>
            <div className="box"><img src={slidefour} /></div>
          </div>
        </div>





        <div className="bg-white p-[40px] text-start flex flex-col justify-center md:flex-row md:items-center md:gap-[60px] gap-6">

          <div className="flex justify-center md:w-[35%]">
            <img src={pana} className="w-[200px] md:w-full max-w-xs" alt="Image" />
          </div>

          <div className="md:w-[70%]">
            <h2 className="mt-[20px] mb-[20px] font-bold text-[28px] text-[#4D4D4D] ">
              Comprehensive Digital Marketing Services  in India
            </h2>
            <p className="text-black font-normal text-[14px] md:text-[13px] rounded text-[#4D4D4D]">
              At WebNest, we take pride in being one of the top digital marketing agency in gurgaon. We create strategically designed campaigns that are easily adjustable to your needs and most importantly, centered on your success. We handle everything from developing powerful SEO strategies to optimizing your PPC campaigns, ensuring each aspect of your performance marketing is strategically managed. Additionally, our services extend to content marketing, web development, mobile app development, conversion rate optimization (CRO), email marketing, and in-depth analytics.
            </p>
          </div>

        </div>

        <div className='flipcard bg-[#9bc394] p-[40px]'>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {cardsData.map(({ id, icon, content }) => {
              // const IconComponent = FaIcons[icon];
              return (
                <div
                  key={id}
                  className={`flip-card ${flippedIds.includes(id) ? "flipped" : ""}`}
                  onClick={() => toggleFlip(id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                     
                   <div className="image_wrap">
                       <img src={icon} className="  iconimage " />
                  </div>

                      <p className="text-[14px] text-[black] font-bold">{content}</p>
                    </div>
                    <div className="flip-card-back">
                      <p>{content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>




      </div>
    </>
  )
}

export default Home






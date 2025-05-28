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
import PPC from "../../pages/home/resources/PPC.svg";
import MobileAppDevelopment from "../../pages/home/resources/mobileappdevelopment.svg";
import ConversionRateOptimization from "../../pages/home/resources/ConversionRateOptimization.svg";
import AffiliateMarketing from "../../pages/home/resources/AffiliateMarketing.svg";
import SocialMediaMarketing from "../../pages/home/resources/Socialmediamarketing.svg";
import WebDevelopment from "../../pages/home/resources/WebDevelopment.svg";
import EmailMarketing from "../../pages/home/resources/EmailMarketing.svg";
import SEM from "../../pages/home/resources/SEM.svg";
import ContentMarketing from "../../pages/home/resources/ContentMarketing.svg";
import SEO from "../../pages/home/resources/SEO.svg";

import BradStrategy from "../../pages/home/resources/BradStrategy.svg";
import googleadds from "../../pages/home/resources/GoogleAdword.svg";
import facebookads from "../../pages/home/resources/Facebookads.svg";
import instagramads from "../../pages/home/resources/instagramads.svg";
import Youtubeads from "../../pages/home/resources/Youtubeads.svg";

// import "./FlipCard.css";
import * as FaIcons from "react-icons/fa";

import Slider from "./ResponsiveCarousel";


const ballsData = [
  { id: 1, content: "Abhishek" },
  { id: 2, content: "Bbbbbbbbbb" },
  { id: 3, content: "ccccccccc" },
  { id: 4, content: "ddddddddd" },
  { id: 5, content: "eeeeeeeeeeeeee" },
  { id: 6, content: "fffffffff" },
  { id: 7, content: "gggggggggggg" },
  { id: 8, content: "hhhhhhhhhh" },
  { id: 9, content: "iiiiiiiiiiii" },
  { id: 10, content: "jjjjjjjjjjjjj" },
];



const autoSlide = [
  {
    image: googleadds,
    Heading: "Google Ads",
    Subheading: "Google Ad | Focused on ROI, Not Just Reach ",
    para: "As a leading Google Ad service in Gurgaon, we help businesses of all sizes whether startups, SMEs, and enterprises—drive instant traffic, generate qualified leads, and boost online sales with precision-targeted ad campaigns. Our team of certified experts combines strategic planning, in-depth keyword research, and continuous optimization to ensure your ads reach the right audience at the right time.  ",
    buttonText: "Explore more about Google Ads"

  },

  {
    image: facebookads,
    Heading: "Facebook Ads",

    Subheading: "Facebook Ads | Drive Instant Sales & Qualified Leads ",
    para: "As Facebook ads services agency in Gurgaon, we assist in creating campaigns that drive targeted traffic and generate high-quality leads across India. Our specialist team ensures your ads are seen by the right people at the right time. Boost brand awareness or increase sales, we design and optimize campaigns that align with your specific business goals",
    buttonText: "Explore more about Facebook Ads"

  },

  {
    image: instagramads,
    Heading: "Instagram Ads ",

    Subheading: "Instagram Ads | Elevate Your Business",
    para: "As a best Instagram Ads services agency in Gurgaon, we design visually compelling campaigns that engage your target audience and drive conversions. Our eye-catching campaigns are designed to boost visibility, interest, and drive conversions, ensuring your brand stands out in the feed and delivers measurable results.",
    buttonText: "Explore more about Instagram Ads"

  },

  {
    image: Youtubeads,
    Heading: "YouTube Ads ",

    Subheading: "YouTube Ads | Transform Views into Sales",
    para: "As a leading YouTube Ads services agency in Gurgaon, we design to get your brand in front of millions of potential customers, turning views into action. We create powerful video campaigns that not only capture attention but also drive real results",
    buttonText: "Explore more about Instagram Ads"

  },


];


const Home = () => {

  const [flippedIds, setFlippedIds] = useState([]);

  const cardsData = [

    { id: 1, icon: PPC, content: "Search Engine Marketing", paracontent: "Boost Your Online Visibility Instantly with Proven SEM Strategies That Drive Real Results! " },
    { id: 2, icon: SEO, content: "Search Engine Optimization", paracontent: "Boost Your Online Visibility and Drive Traffic with Expert SEO Solutions" },

    { id: 3, icon: WebDevelopment, content: " Web Development ", paracontent: "Transform Your Ideas into Reality with Cutting-Edge Web Development Solutions!" },

    { id: 4, icon: SocialMediaMarketing, content: "Social Media Marketing", paracontent: "Skyrocket Your Brand’s Visibility with Powerful Social Media Marketing Strategies!" },

    { id: 5, icon: ContentMarketing, content: " Content Marketing ", paracontent: "Boost Your Brand’s Reach with Powerful Content Marketing That Converts" },

    { id: 6, icon: BradStrategy, content: "Brand Strategy", paracontent: "Unleashing the Power of Purpose: Craft a Brand Strategy That Speaks, Connects, and Converts" },
    { id: 7, icon: AffiliateMarketing, content: " Affiliate Marketing ", paracontent: "Unlock Passive Income: Discover the Power of Affiliate Marketing Today!" },
    { id: 8, icon: EmailMarketing, content: "Email Marketing", paracontent: "Turn Clicks into Customers: Unlock the Power of Email Marketing Today!" },
    { id: 9, icon: MobileAppDevelopment, content: " Mobile App Development ", paracontent: "Transform Your Vision into Reality with Cutting-Edge Mobile App Development Solutions!" },

    { id: 10, icon: ConversionRateOptimization, content: "Conversion Rate Optimization", paracontent: "Unlock Skyrocketing Sales with Proven Conversion Rate Optimization Tactics!." },




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

        <div className='subbanner relative z-10 w-[100%]'>
          <div className='pl-[40px] pr-[40px] pt-[40px] pb-[40px]'>
            <h2> Building Brands with  <br /> Integrity and Innovation <br /> Across India</h2>
            <p>WebNest Media isn’t just another digital marketing company in India — we’re your growth partner. Our team combines strategic thinking, creativity, and technology to elevate your brand across digital channels.

            </p>

            <button className='getstarted-btn'> Get Started</button>

          </div>
          <div>

            <img src={marketingbanner} className="w-[100%] h-[100%] sub-bannerimage" />
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
            <div className="box"> <img src={slideone} /></div>
            <div className="box"><img src={slidetwo} /> </div>
            <div className="box"><img src={slidethree} /></div>
            <div className="box"><img src={slidefour} /></div>
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




        <div className="bg-white p-[40px] mt-[30px]  text-start flex flex-col justify-center md:flex-row md:items-center md:gap-[60px] gap-6">

          <div className="flex justify-center md:w-[35%]">
            <img src={pana} className="w-[200px] md:w-full max-w-xs" alt="Image" />
          </div>

          <div className="md:w-[60%] bg-[#dcf5da] p-[40px] comprensive">
            <h2 className="mt-[20px] mb-[20px] font-bold text-[28px] text-[#4D4D4D] ">
              Comprehensive Digital Marketing Services  in India
            </h2>
            <p className="text-black font-normal text-[15px]  rounded text-[#4D4D4D]">
              At WebNest, we take pride in being one of the top digital marketing agency in gurgaon. We create strategically designed campaigns that are easily adjustable to your needs and most importantly, centered on your success. We handle everything from developing powerful SEO strategies to optimizing your PPC campaigns, ensuring each aspect of your performance marketing is strategically managed. Additionally, our services extend to content marketing, web development, mobile app development, conversion rate optimization (CRO), email marketing, and in-depth analytics.
            </p>
          </div>

        </div>

        <div className='flipcard bg-[white] p-[40px]'>


          <h2 className=" "> Service's we Offered</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {cardsData.map(({ id, icon, content, paracontent }) => {
              // const IconComponent = FaIcons[icon];
              return (
                <div
                  key={id}
                  className={`flip-card ${flippedIds.includes(id) ? "flipped" : ""} `}
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
                      <p className=" text-sm">{paracontent}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>



        <div className="Slidercrausol ">
          <h2 className="heading">One Partner. Every Platform. Endless Growth </h2>

          <Slider slides={autoSlide} autoSlideInterval={4000} />

        </div>

        <div className="industriweserve">

          <h2 className="heading mb-[20px]">Industries We serve </h2>
{/* 
          <div className="ball-container">
            {ballsData.map((ball, i) => (
              <div
                className="ball"
                key={ball.id}
                style={{ animationDelay: `${i * 3}s` }}
              >
                {ball.content}
              </div>
            ))}
          </div> */}


          <div className="card-list-container">
      {ballsData.map((ball, i) => (
        <div
          key={ball.id}
          className={`animated-card ${i % 2 === 0 ? 'from-left' : 'from-right'}`}
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          {ball.content}
        </div>
      ))}
    </div>

    


        </div>


      </div>
    </>
  )
}

export default Home






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




// import "./FlipCard.css";
import * as FaIcons from "react-icons/fa";

const Home = () => {



  const [flippedIds, setFlippedIds] = useState([]);

  const cardsData = [
    { id: 1, icon: "FaUser", content: "Search Engine Marketing (SEM)" },
    { id: 2, icon: "FaCoffee", content: "Web Development" },
    { id: 3, icon: "FaAppleAlt", content: "Content Marketing" },
    { id: 4, icon: "FaCar", content: "Search Engine Optimization" },
    { id: 5, icon: "FaBook", content: "Social media marketing" },
    { id: 6, icon: "FaCamera", content: "Affiliate Marketing" },
    { id: 7, icon: "FaCloud", content: "Email Marketing" },
    { id: 8, icon: "FaMusic", content: "Conversion Rate Optimization" },
    { id: 9, icon: "FaHeart", content: "mobile app development" },
    { id: 10, icon: "FaStar", content: "PPC" },
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

              <span>  Agency with  <span className="text-[#409338] floating-text">Smart Strategies  </span></span>

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



          {/* <div className="relative  mx-auto image-part slide-in-right">

            <img
              src={Star1}
              className="absolute top-[50px] left-[100px] w-10 h-10"
              alt="Star Top Left"
            />

            <img
              src={Star3}
              className="absolute top-[100px] left-[300px] w-10 h-10"
              alt="Star Bottom Left"
            />
            <img
              src={Star3}
              className="absolute bottom-[50px] left-[100px] w-10 h-10"
              alt="Star Bottom Left"
            />



        <img
  src={Bannerlady}
  className=" bannerlady h-auto"
  alt="Main Lady"
/>

          </div> */}

          {/* <div className="relative w-full max-w-[500px] aspect-[10/9] mx-auto image-part slide-in-right">
  
  <img
    src={Star1}
    className="absolute top-[10%] left-[20%] w-6 h-6 sm:w-8 sm:h-8"
    alt="Star Top Left"
  />


  <img
    src={Star3}
    className="absolute top-[22%] right-[40%] w-6 h-6 sm:w-8 sm:h-8"
    alt="Star Top Right"
  />

 
  <img
    src={Star3}
    className="absolute bottom-[10%] left-[20%] w-6 h-6 sm:w-8 sm:h-8"
    alt="Star Bottom Left"
  />

 
  <img
    src={Bannerlady}
    className="w-full h-full object-contain"
    alt="Main Lady"
  />
</div> */}



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

        <div class="slider-container">
          <div class="slider-track">

            <div class="box"> <img src={slideone} /></div>
            <div class="box"><img src={slidetwo} /> </div>
            <div class="box"><img src={slidethree} /></div>
            <div class="box"><img src={slidefour} /></div>

            <div class="box"> <img src={slideone} /></div>
            <div class="box"><img src={slidetwo} /> </div>
            <div class="box"><img src={slidethree} /></div>
            <div class="box"><img src={slidefour} /></div>
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
              const IconComponent = FaIcons[icon];
              return (
                <div
                  key={id}
                  className={`flip-card ${flippedIds.includes(id) ? "flipped" : ""}`}
                  onClick={() => toggleFlip(id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <IconComponent size={50} />
                       <p>{content}</p>
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






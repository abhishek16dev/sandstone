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
import AnimatedCardList from "./AnimatedCardList";

import Countarcard from "./counterCard"

import ImageSlider from "./TestomonilaSlider";
import Accordion from "./Accordian";

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

  // const directions = ['from-left', 'from-right', 'from-top', 'from-bottom'];

  // const directions = ['from-left', 'from-right', 'from-top', 'from-bottom'];

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


  // const images = [SEO, PPC, WebDevelopment];

  const testimonialsData = [
    {
      text: "Webnest Media transformed our online presence. After working with them on our SEO strategy, we saw a 40% increase in organic traffic within just three months. Their team truly understands digital marketing, and their custom approach has helped us reach the right audience. Highly recommended!",
      person: "John D., CEO of GreenTech Solutions",
      img: SEO
    },
    {
      text: "I can't say enough great things about Webnest Media. Their social media management services have taken our brand visibility to new heights. Their creative campaigns and attention to detail have made a real difference in engaging our target customers. We’ve noticed a significant increase in sales since partnering with them!",
      person: "Sarah L., Marketing Director at Luxe Apparel",
      img: PPC
    },
    {
      text: "The team at Webnest Media has been instrumental in building our online store. Their web design and development services were top-notch, and they created a site that’s easy to navigate and optimized for conversions. We’ve seen a remarkable growth in online sales and customer engagement.",
      person: "Michael R., Founder of Fresh Foods Inc.",
      img: WebDevelopment
    },
    {
      text: "Webnest Media’s PPC campaigns were a game-changer for our business. They managed our Google Ads and social media ads efficiently, driving targeted traffic to our website. In just a few weeks, we saw a 25% increase in membership sign-ups. Their results speak for themselves!",
      person: "Emily T., Owner of CityFitness",
      img: SEO
    },
    {
      text: "Working with Webnest Media has been an absolute pleasure. Their content marketing strategy was exactly what we needed to engage our audience and drive traffic to our site. They provided actionable insights and crafted content that resonated with our potential clients. Our lead generation has skyrocketed since partnering with them.",
      person: " Alex P., Director of Digital Strategy at Creative Solutions",
      img: PPC
    },

  ];

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



          <div className="animatedcard ">
            <AnimatedCardList />
          </div>

          {/* <div className="counter flex items-center justify-center">
<div className="w-[40%]">

 <Countarcard  />
</div>
<div className="w-[50%] countertextpart">

  <h4 className=" countertextheading">
    Why Choose WebNest Media ?
  </h4>

  <p className="">Webnest Media, based in Gurgaon, brings over 20 years of expertise in web design, development, and digital marketing. With a focus on delivering innovative and results-driven solutions, they help businesses enhance their online presence and achieve sustainable growth. </p>

   <button className='getstarted-btnn'>Know More</button>




</div>

 

</div> */}

          <div className="counter flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12">
            {/* Counter Cards Section */}
            <div className="w-full md:w-1/2 lg:w-[40%]">
              <Countarcard />
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-1/2 lg:w-[50%] text-center md:text-left space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold text-[#5c945c]">
                Why Choose WebNest Media?
              </h4>

              <p className="text-[black] text-[17px]">
                Webnest Media, based in Gurgaon, brings over 20 years of expertise in web design, development, and digital marketing. With a focus on delivering innovative and results-driven solutions, they help businesses enhance their online presence and achieve sustainable growth.
              </p>

              <button className="getstarted-btnn px-6 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition duration-300">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div className="tetonomial mt-[30px] mb-[40px]">
              <h4 className="text-2xl md:text-3xl font-bold text-[#5c945c] text-center mt-[30px] mb-[40px]">
                    Every Insight Matters. Every Voice Fuels Us
              </h4>
          <ImageSlider data={testimonialsData} />
        </div>

        <div className="accordian">
      

           <h4 className="text-2xl md:text-3xl font-bold text-[#5c945c] text-center mt-[30px] mb-[40px]">
                  Information Hub
              </h4>
        <Accordion />
        </div>
      </div>
    </>
  )
}

export default Home






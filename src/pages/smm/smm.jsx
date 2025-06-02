import React from 'react'
import "./smm.css"

import iamgecircle from "../home/resources/industries/Education.svg";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { RiWhatsappFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";
import Seo from "./resources/fb.svg"
import socialgif from "./resources/social.gif";

import cimage from "./resources/cimage.svg";


import SmartIcon from "./resources/cimage.svg";
import AnalyticsIcon from "./resources/cimage.svg";

import Cards from "./componenet/AnimatedCardList";
import Accordian from "./componenet/Accordian";
import Contactform from "../../components/contact/contactform";

import smartright from "./resources/smartright.svg";
import accelerate from "./resources/accelerate.svg"
import largesmart from "./resources/smart-large.svg";


import { MdContentPasteGo } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdCrisisAlert } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { SiSmartthings } from "react-icons/si";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
const Smm = () => {




  const icons = [
    <TiSocialTwitter />,
    <TiSocialYoutube />,
    <TiSocialLinkedin />,
    <SlSocialInstagram />,
    <SlSocialFacebook />,
    <RiWhatsappFill />,
    <SiTelegram />

  ];

  const colors = [
    "#1DA1F2",  // Twitter Blue
    "#FF0000",  // YouTube Red
    "#0077B5",  // LinkedIn Blue
    "#E1306C",  // Instagram Pink
    "#1877F2",  // Facebook Blue
    "#25D366",  // WhatsApp Green
    "#0088cc",  // Telegram Blue
  ];



  const cardData = [
    {
      id: 1,
      title: "Content Creation",
      description:
        "It’s all about crafting valuable, engaging, and relevant content—whether it’s posts, videos, blogs, or graphics—that connects with your audience. Great content builds trust, sparks conversations, and drives results.",
      icon: <MdContentPasteGo />
    },
    {
      id: 2,
      title: "Influencer Marketing",
      description:
        "Powerful strategy where brands collaborate with influencers—people with loyal, engaged followings—to promote their products or services. It’s about trust and authenticity.",
      icon: <SiGooglemarketingplatform />
    },
    {
      id: 3,
      title: "Crisis Management",
      description:
        "Fast action, transparency, and empathy are key to turning a crisis into a chance to rebuild trust.",
      icon:<MdCrisisAlert />
    },
    {
      id: 4,
      title: "Analytics Reporting",
      description:
        "Process of tracking, measuring, and analyzing your social media performance. It shows what’s working, what’s not, and where to improve.",
      icon: <TbReportAnalytics /> 
    },
  ];


  return (
    <div className='mt-[200px] max-w-7xl    mb-[120px] pr-[40px] pl-[40px]'>
      <p className=" mt-[133px] paraheading text-[#409338] font-bold text-[40px] leading-[60px]  text-center stroke-custom fill-custom">Boost Your Digital Impact with  <br /> Smart Social Media Planning  </p>

      <p className='text-[15px] mt-[100px] text-center text-[black] mt-[30px] mb-[10px] w-[50%] mx-auto
'>

        Enhance your brand’s digital footprint with our comprehensive social media management solution, crafted to simplify content creation, scheduling, and analytics — unlock your brand’s true potential today.

      </p>



      <div className="mt-[40px] mb-[100px] flex items-center justify-center max-md:w-[100%]">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className="w-[60px] h-[60px] rounded-full text-white flex items-center justify-center text-2xl border-2 border-white -ml-3 first:ml-0"
            style={{
              backgroundColor: colors[index],
              zIndex: icons.length - index,
            }}
          >
            {Icon}
          </div>
        ))}
      </div>

      <div className="
       flex flex-col md:flex-row">
        {/* Box 1 */}
        <div className="w-full md:basis-1/3  flex justify-center">
          <div className="w-[300px] h-[450px] rounded-md bg-gray-300 overflow-hidden bocshadowgif "  >
            <img src={socialgif} alt="SEO Visual" className="w-full h-full object-contain" />
          </div>
        </div>


        <div className="w-full md:basis-1/3   gap-4">

          <div className="w-full max-w-[300px] h-[400px]   flex flex-col justify-end">
            <div className=' flex flex-col gap-[30px]' >


              <div className="flex flex-col gap-2 rounded-md bg-white p-6 relative right-[-130px]       max-md:right-[0px]  bocshadowgif border-b ">
                <h6 className="text-black text-[15px] font-bold">
                Smart Social Media Management
                </h6>
                <p className="text-black text-[13px] leading-5 font-normal">
              Schedule, publish, and monitor content across all platforms in one place. Social Hub’s intuitive dashboard makes it easy to manage engagement, track performance, and stay consistent with your brand voice.
                </p>
              </div>

              <div className="flex flex-col gap-2 rounded-md bg-white p-6  border-b  bocshadowgif">
                <h6 className="text-black text-[15px] font-bold">
                  Another Strategy
                </h6>
                <p className="text-black text-[13px] leading-5 font-normal">
                  Build strategies that are tailored for your business objectives.
                </p>
              </div>
            </div>
          </div>


        </div>


        <div className="w-full md:basis-1/3  flex justify-center items-center max-md:hidden">
          <div className="text-center text-black font-semibold text-xl">
            <img src={cimage} className=' ' />

          </div>
        </div>
      </div>


      <div className='mt-[200px]'>

        <p className="text-[#409338] font-bold text-[40px] max-md:text-[20px] max-md:leading-[20px] leading-[40px]  mt-[100px] text-center stroke-custom fill-custom">Streamline Your Social Media Account </p>

        <Cards className="" />
      </div>


      <div className='flex justify-center max-md:flex-col  gap-[40px] mt-[100px]'>


        {/* 
        <div className='w-[48%]  max-md:w-[100%]  flex flex-col  items-end justify-between'>

        

            <img src={accelerate} className='  ' />
          


         <div className=" max-md:w-[100%] w-[75%] bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <img src="/assets/smart-icon.svg" alt="Smart Social Media Management" className="w-6 h-6 object-contain" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">Smart Social Media Management</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Schedule, publish, and monitor content across all platforms in one easy-to-use tool.
                    Automate and boost reach, improve engagement, track performance, and stay consistent
                    with your brand’s voice.
                  </p>
                </div>
              </div>
            </div>

        </div> */}

        <div
          className="w-[48%] max-md:w-[100%] flex flex-col items-end justify-end  bg-no-repeat bg-contain bg-left-top"
          style={{ backgroundImage: `url(${accelerate})` }}
        >
          <div className="max-md:w-[100%] w-[75%] bg-white p-6 rounded-xl shadow-md">
            <div className="">
                <div className='flex items-center  gap-2 '>
              <span><GiLevelFourAdvanced /></span>
                 <h3 className="text-lg font-semibold text-[#1a1a1a]">
                Advanced Analytics & Insights
                </h3>
             </div>
              <div>
             
                <p className="mt-2 text-sm text-gray-600">
                Get real-time data that drives decisions. Social Hub offers deep insights into audience behavior, post performance, and growth trends—empowering you to optimize your strategy and accelerate results.
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="w-[50%] max-md:w-[100%]   text-center lg:text-left">
          <div className="max-w-6xl mx-auto flex flex-col  items-start justify-between gap-10">
            <p class="text-[#409338] font-bold text-[40px] max-md:text-[20px] max-md:leading-[20px] leading-[40px]  text-left stroke-custom fill-custom">  Accelerate Your Digital Presence with Social Hub
            </p>
            <p className="text-[black] text-[15px]   max-w-xl">
              Unlock the full potential of your brand online with Social Hub. From social media
              management to content optimization, Social Hub helps you grow faster, engage smarter,
              and stand out in the digital crowd.
            </p>

            <button type="submit " class=" mb-[50px] text-[white] mb-[20px] px-[20px] py-[10px]   bg-[#5c945c] rounded-md ">Contact Now

            </button>



            <div className=" max-md:w-[100%] w-[75%] bg-white p-6 rounded-xl shadow-md">
              <div className="">
                {/* <img src="/assets/smart-icon.svg" alt="Smart Social Media Management" className="w-6 h-6 object-contain" /> */}
           
                <div className='flex items-center  gap-2 '>
                       <span  className="w-[20px] h-[20px] object-contain"> <SiSmartthings />  </span>
                    <h3 className="text-lg font-semibold text-[#1a1a1a]">Smart Social Media Management</h3>
                </div>
                <div>
                
                  <p className="mt-2 text-sm text-gray-600">
                    Schedule, publish, and monitor content across all platforms in one easy-to-use tool.
                    Automate and boost reach, improve engagement, track performance, and stay consistent
                    with your brand’s voice.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>


      <div className="smarter flex flex-col-reverse lg:flex-row  mt-[100px] gap-10 px-4  bg-no-repeat bg-contain bg-right"
         style={{ backgroundImage: `url(${largesmart})` }}
      >

        <div className="w-full lg:w-[65%]">
          <h3 className="text-2xl md:text-3xl font-bold text-[#5c945c]">
            Smarter, Not Harder <br /> Win Big on Social Media
          </h3>

          <p className="text-[15px] md:text-base mb-10 text-black mt-10 leading-relaxed">
            Using smart strategies, not extra effort, to grow online. Focus on what works, stay <br className="hidden md:block" /> consistent, and let tools and data guide your success—no burnout needed.
          </p>


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
        </div>


        {/* <div className="w-full lg:w-[35%]  ">
          <img src={smartright} alt="Smarter visual" className="w-full max-w-sm" />
        </div> */}


      </div>

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
          </p> */}
          {/* <p>
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
          <Contactform className="w-full" />
        </div>


      </div>


      <div className='mt-[100px] '>
        <p className="text-[#409338] mb-[50px] font-bold text-[40px] leading-[40px]  text-center stroke-custom fill-custom">FAQs About Social Media Marketing     </p>

        <Accordian />

      </div>

    </div>

  )
}

export default Smm

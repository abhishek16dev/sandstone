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


import Cards from "./componenet/AnimatedCardList"


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


  return (
    <div className='mt-[200px]  mb-[120px] pr-[40px] pl-[40px]'>
      <p class=" mt-[133px] paraheading text-[#409338] font-bold text-[40px] leading-[60px]  text-center stroke-custom fill-custom">Boost Your Digital Impact with  <br /> Smart Social Media Planning  </p>

      <p className='text-[15px] mt-[100px] text-center text-[black] mt-[30px] mb-[10px] w-[50%] mx-auto
'>

        Enhance your brand’s digital footprint with our comprehensive social media management solution, crafted to simplify content creation, scheduling, and analytics — unlock your brand’s true potential today.

      </p>
      {/* 
    <div className="mt-[40px] mb-[100px] flex items-center justify-center">
  {images.map((src, index) => (
    <div
      key={index}
      className="seoiamgewrap w-[60px] h-[60px] rounded-full bg-gray-400 overflow-hidden border-2 border-white -ml-3 first:ml-0 z-10"
      style={{ zIndex: images.length - index }} // Ensure left images appear on top
    >
     {src}
    </div>
  ))}
</div> */}

      <div className="mt-[40px] mb-[100px] flex items-center justify-center">
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

  <div className="join flex flex-col md:flex-row">
  {/* Box 1 */}
  <div className="w-full md:basis-1/3  flex justify-center">
    <div className="w-[300px] h-[450px] rounded-md bg-gray-300 overflow-hidden bocshadowgif "  >
      <img src={socialgif} alt="SEO Visual" className="w-full h-full object-contain" />
    </div>
  </div>

  
  <div className="w-full md:basis-1/3   gap-4">

 <div className="w-full max-w-[300px] h-[400px]   flex flex-col justify-end">
  <div className=' flex flex-col gap-[30px]' >

 
  <div className="flex flex-col gap-2 rounded-md bg-white p-6 relative right-[-130px]   bocshadowgif border-b ">
    <h6 className="text-black text-[15px] font-bold">
      Social Media Strategy
    </h6>
    <p className="text-black text-[13px] leading-5 font-normal">
     Create tactics specifically suited to your company's objectives to guarantee optimal influence on all social media platforms.
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

  
  <div className="w-full md:basis-1/3  flex justify-center items-center">
    <div className="text-center text-black font-semibold text-xl">
   <img src={cimage} className=' ' />

    </div>
  </div>
</div>


<p className="text-[#409338] font-bold text-[40px] leading-[40px]  mt-[100px] text-center stroke-custom fill-custom">Streamline Your Social Media Account </p>

    <Cards  className="mt-[200px]"/>

    </div>
  )
}

export default Smm

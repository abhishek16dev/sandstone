import React, { useEffect, useRef, useState } from 'react'
import "./brand.css"


import box1 from "./resources/box1.svg"
import box2 from "./resources/box2.svg"
import box3 from "./resources/box3.svg"
import box4 from "./resources/box4.svg"
import box5 from "./resources/box5.svg"
import box6 from "./resources/box6.svg"

import leftiamge from "./resources/leftiamge.svg";


import build1 from "./resources/build1.svg";
import build2 from "./resources/build2.svg"
import build3 from "./resources/build3.svg"
import build4 from "./resources/build4.svg"
import build5 from "./resources/build5.svg"

import why1 from "./resources/why1.svg";
import why2 from "./resources/why2.svg";
import why3 from "./resources/why3.svg";
import why4 from "./resources/why4.svg";
import why5 from "./resources/why5.svg";
import why6 from "./resources/why6.svg";
import why7 from "./resources/why7.svg";
import why8 from "./resources/why8.svg";
import Conatctfrom from "../../components/contact/contactform";
import { FiPhone } from "react-icons/fi";

import Accordian from "./component/Accordian";
const Brandmarketing = () => {


  const [text, setText] = useState('');
  const words = ['Authenticity', 'Innovation', 'Consistency'];
  const delay = 150;
  const pause = 1000;
  
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  
  useEffect(() => {
    let timeout;
  
    const type = () => {
      const currentWord = words[wordIndex.current];
      
      if (!isDeleting.current) {
        // Typing
        setText(currentWord.substring(0, charIndex.current));
        if (charIndex.current < currentWord.length) {
          charIndex.current++;
          timeout = setTimeout(type, delay);
        } else {
          // Pause after typing full word
          timeout = setTimeout(() => {
            isDeleting.current = true;
            timeout = setTimeout(type, delay);
          }, pause);
        }
      } else {
        // Deleting
        if (charIndex.current > 0) {
          charIndex.current--;
          setText(currentWord.substring(0, charIndex.current));
          timeout = setTimeout(type, delay / 2); // Faster delete
        } else {
          // Pause before starting next word
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
          timeout = setTimeout(type, pause / 2); // Shorter pause after delete
        }
      }
    };
  
    type();
  
    return () => clearTimeout(timeout);
  }, []);
  
  


  const cards = [
    {
      image: build1,
      title: "Builds Trust & Recognition",
      text: " A clear and consistent brand makes your business more recognizable and reliable in the eyes of customers.",
    }, ,
    {
      image: build2,
      title: "Drives Customer Loyalty",
      text: "People stick with brands that speak their language and reflect their values.",
    },
    {
      image: build3,
      title: "Creates Emotional Connections",
      text: " A clear and consistent brand makes your business more recognizable and reliable in the eyes of customers.",
    },
    {
      image: build4,
      title: "Gives You a Competitive Edge",
      text: "With a well-defined strategy, your brand stands out in crowded markets."
    },
    {
      image: build5,
      title: "Guides Your Marketing",
      text: "Every marketing effort becomes more focused, effective, and aligned with your brand’s identity..",
    },
  ];

const whycard = [
  {
    image: why1,
    title: "We get to know your business inside-out",
    text: "Every brand has a story. We take the time to understand yours and build a strategy that feels true to who you are.",
  },
  {
    image: why2,
    title: "We speak your audience’s language",
    text: "From tone to messaging, we craft your brand voice to connect with the people who matter most—your customers.",
  },
  {
    image: why3,
    title: "No one-size-fits-all approach",
    text: "Whether you're a startup in Gurgaon or a growing brand across India, we create strategies that fit you—not a template.",
  },
  {
    image: why4,
    title: "We blend creativity with clear thinking",
    text: "We bring bold ideas backed by research—so your brand not only looks amazing but makes a real impact.",
  },
  {
    image: why5,
    title: "We make branding feel easy",
    text: "Our process is collaborative and transparent. You'll always understand our actions and their significance.",
  },
  {
    image: why6,
    title: "We build for the long run",
    text: "Our strategies go beyond just looking good—they help build trust, recognition, and loyal customers over time.",
  },
  {
    image: why7,
    title: "Local roots, wide reach",
    text: "Based in Gurgaon, we understand the local market—and how to help you stand out nationally.",
  },
  {
    image: why8,
    title: "Real people, real results",
    text: "No jargon. No fluff. Just thoughtful, human-focused branding that brings your business to life.",
  },
];


  const images = [box1, box2, box3, box4, box5, box6]

  const brandSteps = [
  {
    number: "01",
    title: "Brand Discovery & Market Research",
    description:
      "We begin by learning about your company, target market, and rivals. This foundation helps us uncover unique opportunities for your brand.",
  },
  {
    number: "02",
    title: "Brand Identity Creation",
    description:
      "From logos to brand colors and typography, we design the visual language that captures your brand’s essence and resonates with your customers.",
  },
  {
    number: "03",
    title: "Brand Messaging & Voice",
    description:
      "We help define your brand’s voice—how it sounds and feels. Taglines, mission statements, and tone guidelines ensure consistency across all channels.",
  },
  {
    number: "04",
    title: "Brand Positioning",
    description:
      "We position your brand in a way that sets it apart from competitors while staying aligned with your audience’s expectations and desires.",
  },
  {
    number: "05",
    title: "Customer Persona Building",
    description:
      "We create detailed profiles of your ideal customers so you can speak directly to their needs, challenges, and motivations.",
  },
];

  return (
    <div className='mt-[120px] max-w-[1440px] w-[100%] mx-auto
  '>
    <section className='text-center h-[200px]'>

         {/* <h1 className=''>    <span>Brand</span> <span>Strategy</span></h1> */}

      
<h2 className="heading-styled relative h-[60px] text-[40px]  bg-yellow font-bold text-black px-4 py-1  ">
  {text}
</h2>

    </section>

      <section className="text-center pl-[155px] pr-[155px] max-lg:pl-[20px] max-lg:pr-[20px]" style={{ fontFamily: 'Segoe UI' }} >  
        <h6 className='text-[52px]  text-center'>
          <span className="font-bold">Brand</span>{' '}
          <span className="italic">Strategy?</span>
        </h6>

        <p className='font-semibold text-[18px] mt-[12px] text-center '>BRAND STRATEGY. MESSAGING. BRANDING. WEB DESIGN. PACKAGING.</p>


        <p className='text-[16px] font-light text-center mt-[52px] '> A brand strategy is the blueprint for how your business is seen and remembered. It defines your purpose, voice, values, and the <br className='max-lg:hidden' /> way you connect with your audience. More than just visuals, it builds trust, sets you apart from competitors, and ensures every <br  className='max-lg:hidden' /> interaction reflects your brand’s identity. A clear brand strategy turns your business into a brand people recognize and trust.</p>

      </section>

      <section className='mt-[112px]'>

        <div className="flex w-full">
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-1/6 h-[250px]">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>


      </section>


      <section>

 


<div className="flex max-lg:flex-col pl-[155px] pr-[155px] max-lg:pl-[20px] max-lg:pr-[20px] mt-[200px] gap-6 justify-center">

  {/* Fixed Left Image on Large Screens */}
  <div className="w-full md:w-[540px] lg:sticky lg:top-[200px] self-start">
    <img
      src={leftiamge}
      alt="Example"
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>

  {/* Scrolling Right Content */}
  <div className="w-full max-lg:w-full" data-aos="fade-up">
    <h6 className="font-light text-black text-[24px]">REAL TALK:</h6>

    <p className="text-[40px] leading-[150%] font-light">
      <span className="font-semibold">Why </span>
      <span className="font-thin italic">Brand Marketing</span>
      <br />
      <span className="font-semibold">Strategy?</span>
    </p>

    <p className="text-[16px] text-[#000000] leading-relaxed mt-[52px] font-normal">
      A powerful brand strategy does more than just make your business look good—it builds trust,
      loyalty, and long-term success. In today’s competitive digital world, customers don’t just
      buy products—they buy stories, values, and experiences.
      <br /><br />
      Here’s why a strong brand strategy is essential:
    </p>

    <div className="mt-[32px] mb-[52px] flex flex-wrap items-center justify-center gap-4 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-[210px] flex flex-col justify-center items-center p-2"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-[64px] h-[64px] object-contain"
          />
          <h3 className="text-[24px] font-normal mt-[24px] mb-[12px] text-center">{card.title}</h3>
          <p className="text-[14px] font-light text-center">{card.text}</p>
        </div>
      ))}
    </div>

    <p className="text-[16px] text-[#000000] font-normal">
      At WebNest Media, we help shape your brand story so that every interaction feels authentic
      <br />and purposeful—leading to stronger customer engagement and business growth.
    </p>
  </div>
</div>



      </section>

      <section>
      <h4 className='text-[52px] leading-[150%] text-center  mt-[96px] mb-[32px] '> <span className="font-bold">Brand Strategy Services by</span> <br /><span className="italic"> WebNest Media</span></h4>
      </section>

<p className='text-[16px] text-[#00000] font-normal text-center '>At WebNest Media, we combine creativity, research, and strategy to craft brand identities that leave a lasting impact. Our  <br/>services cover every stage of your brand-building journey: </p>



<section className="px-[20px] md:px-[155px]  py-10">
  {brandSteps.map((step, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row justify-between border-b border-gray-200 py-6 last:border-none"
    >
      {/* Left: Number + Title */}
      <div className="md:w-[40%] mb-4 md:mb-0 flex gap-[16px]">
        <p className="text-gray-400 font-medium text-[24px] mb-[1px] ">{step.number}</p>
        <h3 className="text-[32px] font-semibold text-[#00000] ">{step.title}</h3>
      </div>

      {/* Right: Description */}
      <div className="md:w-[60%]">
        <p className="text-[16px] text-gray-600 leading-relaxed ">{step.description}</p>
      </div>
    </div>
  ))}
</section>

<section>
  <p className="mt-[96px] mb-[66px] text-center text-[52px] leading-[150%] ">
    <span className="font-bold">Why </span>
    <span className="italic font-thin">WebNest Media?</span>
  </p>
</section>


<section>

     <div className='mt-[32px] mb-[52px] flex flex-wrap items-center justify-center gap-4 p-4'>

              {whycard.map((card, index) => (
                <div
                  key={index}
                  className="w-[325px] flex flex-col justify-center items-center   p-2"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-[64px] h-[64px] object-contain "
                  />
                  <h3 className=" text-[24px] font-normal mt-[24px] mb-[12px] text-center  ">{card.title}</h3>
                  <p className=" text-[14px] font-light text-center ">{card.text}</p>
                </div>
              ))}
            </div>
</section>


  <div className=" conatctform flex flex-row items-center justify-center flex-wrap gap-10 max-lg:flex-col mb-10 px-5 py-10">

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


          <section className='mt-[60px] mb-[50px]'>
<Accordian />
          </section>

        </div>


    </div>
  )
}

export default Brandmarketing

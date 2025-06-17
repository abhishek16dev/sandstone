import React from 'react'

import "./aboutus.css"
import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

import card1 from "../../../src/pages/projects/resource/card1.jpeg"
import card2 from "../../../src/pages/projects/resource/card2.jpeg"
import card3 from "../../../src/pages/projects/resource/card3.jpeg"
import interior from "./resources/animationvideo.mp4"
import { Link } from 'react-router-dom';

const AboutUS = () => {

  const stats = [
    { value: 10, label: ["Year", "experience"] },
    { value: 231, label: ["Properties", "build"] },
    { value: 20, label: ["Awards", "gained"] },
  ];

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * end);

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = currentValue;
          return updated;
        });

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    });
  };

  const cards = [


    {
      title: "End-to-End Interior Solutions",
      description:
        "From initial planning to final handover, we manage the entire design and execution process to deliver a seamless experience.",
    },
    {
      title: "Innovative Design Concepts",
      description:
        "Our creative team brings fresh ideas and modern aesthetics to life—crafting interiors that are both beautiful and functional.",
    },
    {
      title: "On-Time Project Delivery",
      description:
        "We value your time. Our structured workflow and efficient team ensure every project is completed on schedule without compromising quality.",
    },
  
  ];

  return (
    <section className='mt-[12rem] max-w-[1440px] m-auto w-[100%] max-lg:mt-[0]'>
      <section className="breadcrum w-full h-[28.6rem]   flex items-center justify-center pl-[15rem] pr-[15rem] max-lg:pl-[2rem]  max-lg:pr-[2rem]">

        <div className="  flex items-center justify-between w-[100%] max-lg:flex-col max-md:justify-start ">

          <h1 className="text-white text-[8.2rem] leading-[96%]  font-bold mb-4">About Us</h1>
          <div className="flex items-center px-[2rem] py-[1rem] gap-[1.6rem] bg-black">
                        <Link to={"/"}>
                               <p className="  text-white px-3 py-1 text-[1.3rem] font-semibold rounded">HOME</p></Link>
            <p className="text-white text-[1.9rem] font-semibold">›</p>
            <p className="text-[#facc15] text-[1.3rem] font-semibold ">Sand & Stones</p>
          </div>
        </div>
      </section>

      <section
        className="gridbox flex max-lg:flex-col justify-between gap-[7.1rem] max-lg:gap-[2rem] pt-[8.1rem] pl-[6.3rem] max-lg:pl-[2rem]  max-lg:pr-[2rem] "

      >
        <div className='w-[49.8rem] max-lg:w-[100%]'>


          <p className='text-[#E3D27D] uppercase font-monrope  text-[1.4rem] leading-[100%] tracking-[0.5rem]'>About</p>

          <h5 className='font-manrope text-[#FFFFFF] text-[5.4rem] leading-[6.4rem] font-extrabold mt-[0.8rem]'>We Made New <br /> Creative Concept  </h5>
          <p className='mt-[3.2rem] text-[#FFFFFF] font-medium text-[1.4rem] leading-[2.2rem]'> Crafting Spaces, Creating Stories – Welcome to Sand&Stone Solution
            At Sand&Stone Solution, we believe that every space has a story to tell. Based in the vibrant city of Bangalore, we are a full-service interior design <br /> <br /> company dedicated to transforming houses, offices, and commercial spaces into beautiful, functional environments that reflect our clients' personalities and goals. </p>

          <div
            ref={sectionRef}
            className="mt-[3.2rem] grid grid-cols-3 md:grid-cols-3 gap-6 text-center text-[#F6DF8F]"
          >
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="flex items-center justify-center gap-1 text-[3rem] font-bold">
                  {counts[index]}
                  <Plus size={24} className="text-[#F6DF8F]" />
                </div>
                <div className="text-lg xl:text-xl font-normal tracking-[1px] leading-[130%] uppercase text-white/90">
                  {stat.label.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h6 className='text-[#ffffff] max-lg:text-center text-[2.2rem] leading-[3.2] font-extrabold font-manrope pb-[7.7rem]  tracking-0  '>“Out ingredients for over 10 years of success”</h6>

        </div>

        <div className="flex w-[100% - 50rem] flex-col md:flex-row gap-6 max-lg:w-[100%] max-lg:justify-center max-lg:items-center ">

          <div className="flex flex-col gap-4 max-lg:hidden">
            <img
              src={card1}
              alt="Image 1"
              className=" w-[32.2rem]  h-[33.7rem] object-cover rounded-md"
            />
            <img
              src={card2}
              alt="Image 2"
              className="w-[32.2rem]  h-[33.7rem] object-cover rounded-md"
            />
          </div>


          <img
            src={card3}
            alt="Image 3"
            className=" w-[32.2rem]  h-[60.5rem]   max-lg:w-[100%] max-lg:h-[100%]  object-cover rounded-md"
          />

        </div>





      </section>


      <section className="px-4 md:px-20 py-16 bg-white">
        <div className=" mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

            <div>
              <p className="font-manrope font-bold text-[14px] leading-[100%] tracking-[0.3125rem] uppercase text-[#4F6D56]">Works</p>
              <h2 className="mt-[0.8rem] font-manrope font-extrabold text-[5.4rem]  leading-[6.4rem] tracking-[0] text-[#131714]">
                We Create Home <br />
                More Aesthetic
              </h2>
              <p className="mt-[3.2rem] text-[#6F7470] font-raleway font-medium text-[14px] leading-[22px] tracking-[0]">
                Founded by a passionate team of designers, architects, and project managers, Sand&Stone Solution brings together creativity, craftsmanship, and strategic thinking to deliver interior solutions that not only look stunning but also work seamlessly in everyday life.

              </p>
            </div>

            <div className="mt-[3.2rem] text-[#6F7470] font-raleway font-medium text-[14px] leading-[22px] tracking-[0]">
              <p>
                At Sand&Stone, we believe great design starts with understanding. Whether it's a warm, inviting home or a bold, dynamic office space, we immerse ourselves in our clients' needs, lifestyles, and aspirations. This ensures our designs are not just visually stunning, but tailored to enhance day-to-day experiences.
              </p>
              <p>
                Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisi, quis in turpis gravida
                libero. At elit eu lacus, quam neque arcu euismod.
              </p>
              <br />
              <p className="mt-[3.2rem] text-[#6F7470] font-raleway font-medium text-[14px] leading-[22px] tracking-[0]">
                For us, success means more than delivering a finished space—it means exceeding expectations and creating environments where our clients truly feel at home.


              </p>
            </div>
          </div>


          <div className="w-full h-[350px] md:h-[500px] bg-black rounded-md overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster={card1}
              autoPlay
            >
              <source src={interior} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section>

      <section className=" pt-[10rem] pb-[10rem] pl-[15rem] pr-[15rem] bg-white max-lg:pl-[2rem]  max-lg:pr-[2rem]" >
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-manrope font-bold text-[14px] leading-[100%] tracking-[0.3125rem] uppercase text-[#4F6D56] ">
            why
          </p>
          <h2 className=" mt-[0.8rem] font-manrope font-extrabold text-[5.4rem] leading-[6.4rem] tracking-[0] text-[#131714]">
            Why Choose Us?
          </h2>
          <p className="mt-[3.2rem] text-[#6F7470] font-raleway font-medium text-[1.4rem] leading-[2.2rem] tracking-[0]">
            We work closely with each client to understand their lifestyle,  <br className='max-lg:hidden' />preferences, and needs — ensuring the final design is not just beautiful, but truly personal.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] mb-16 justify-items-center mx-auto w-[100%]">
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-[30rem] gap-4 p-8 rounded-md shadow-sm border bg-[#FBF8E9]"
            >
              <div className="w-[4.8rem] h-[4.8rem] bg-gray-300 rounded-sm"></div>
              <h3 className="mt-[1.6rem] text-[#131714] font-manrope font-extrabold text-[2.2rem] leading-[2.8rem] tracking-[0] mb-2">
                {item.title}
              </h3>
              <p className="mt-[1.6rem] text-[#6F7470] font-raleway font-medium text-[1.4rem] leading-[2.2rem] tracking-[0]">
                {item.description}
              </p>
            </div>
          ))}
        </div>



        {/* CTA Banner */}
        <div className="bg-[#2C2C2C] text-white px-6 py-10 md:px-16 md:py-14 rounded-md flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="uppercase text-[#E3D27D] tracking-[0.5rem] font-manrope font-semibold text-[1.4rem] ">
              Contact Us
            </p>
            <h3 className="mt-[0.8rem] text-[#FFFFFF] font-manrope leading-[6.4rem] font-extrabold text-[5.4rem] ">
              Ready To Start New Project?
            </h3>
          </div>
          <Link to={"/contact"}>
            <button className="bg-[#E3D27D]  text-[1.3rem]  uppercase text-[#131714] px-6 py-3 mt-4 md:mt-0  font-semibold rounded hover:bg-yellow-400 transition">
              Get In Touch
            </button>
          </Link>

        </div>

      </section>



      <section>

      </section>

    </section>
  )
}

export default AboutUS

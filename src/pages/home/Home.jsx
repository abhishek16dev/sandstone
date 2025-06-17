import React from 'react'

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import Homeproject from './component/homeproject';

import card1 from "../../../src/pages/projects/resource/card1.jpeg"
import card2 from "../../../src/pages/projects/resource/card2.jpeg"
import card3 from "../../../src/pages/projects/resource/card3.jpeg"


import card7 from "../services/resourse/card1.jpeg";
import card8 from "../services/resourse/card2.jpeg";
import card9 from "../services/resourse/card3.jpeg";
import card4 from "../services/resourse/card4.jpeg";
import card5 from "../services/resourse/card7.jpeg";
import card6 from "../services/resourse/card9.jpeg";
import arrow from "../services/resourse/arrow.svg";
import Bannercomponent from './Bannercomponent';
import Testomonial from './component/Testomonial';


const steps = [
  {
    number: "01",
    title: "Design",
    desc: "We shape your vision into intuitive wireframes and UI/UX layouts, focusing on a seamless user experience.",
  },
  {
    number: "02",
    title: "Develop",
    desc: "Our developers bring designs to life with clean, responsive code using modern, scalable technologies.",
  },
  {
    number: "03",
    title: "Revision",
    desc: "We refine the product based on your feedback through testing, edits, and quality assurance.",
  },
  {
    number: "04",
    title: "Maintenance",
    desc: "Post-launch, we provide updates, fix issues, and ensure long-term performance and reliability.",
  },
];


const projects = [
  { id: 1, image: card7, title: 'Modern',desc:"Clean lines, minimalism, neutral colors, and sleek finishes." },
  { id: 2, image: card8, title: 'Contemporary',desc:"Current trends with a mix of comfort and sophistication." },
  { id: 3, image: card9, title: 'Traditional',desc:"Classic furniture, rich colors, and elegant details.." },
  { id: 4, image: card4, title: 'Industrial ',desc:" Raw materials like metal, brick, and wood with a rugged feel." },
  { id: 5, image: card5, title: 'Scandinavian' ,desc:"Simple, functional, bright spaces with natural elements.."},
  { id: 6, image: card6, title: 'Minimalist',desc:"Less is more; focus on simplicity and essential pieces." },
]

const Home = () => {


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



  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02 },
  };



  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // 👈 Reset animation when out of view
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };


  return (
    <div className='mt-[120px] max-md:mt-[0]'>

      <section className=''>
        <Bannercomponent />
      </section>


      <section
        className="gridbox max-lg:flex-col max-lg:p-[2rem] flex justify-between gap-[7.1rem] pt-[8.1rem] pl-[6.3rem] "

      >
        <div className='w-[49.8rem] max-lg:w-[100%]'>


          <p className='text-[#E3D27D] uppercase font-monrope  text-[1.4rem] leading-[100%] tracking-[0.5rem]'>About</p>

          <h5 className='font-manrope text-[#FFFFFF] text-[5.4rem] leading-[6.4rem] font-extrabold mt-[0.8rem]'>We Made New <br /> Creative Concept  </h5>
           <p className='mt-[3.2rem] text-[#FFFFFF] font-medium text-[1.4rem] leading-[2.2rem]'> Crafting Spaces, Creating Stories – Welcome to Sand&Stone Solution
            At Sand&Stone Solution, we believe that every space has a story to tell. Based in the vibrant city of Bangalore, we are a full-service interior design <br /> <br /> company dedicated to transforming houses, offices, and commercial spaces into beautiful, functional environments that reflect our clients' personalities and goals. </p>

          <div
            ref={sectionRef}
            className="mt-[3.2rem] grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-[#F6DF8F]"
          >
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="flex items-center justify-center gap-1 text-[3rem] font-bold">
                  {counts[index]}
                  <Plus size={24} className="text-[#F6DF8F]" />
                </div>
                <div className="text-sm font-normal tracking-[1px] leading-[130%] uppercase text-white/90">
                  {stat.label.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h6 className='text-[#ffffff] text-[2.2rem] leading-[3.2] font-extrabold font-manrope pb-[7.7rem]  tracking-0 '>“Out ingredients for over 10 years of success”</h6>

        </div>

        {/* <div className="flex w-[100% - 50rem] flex-col md:flex-row gap-6 max-lg:w-[100%] ">

          <div className="flex flex-col gap-4">
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
            className="w-[32.2rem] h-[60.5rem] object-cover rounded-md"
          />
        </div> */}


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
                    className="  max-md:w-[100%] max-md:h-[100%] w-[32.2rem] max-lg:w-[50%] max-lg:h-[50%] h-[60.5rem] object-cover rounded-md"
                  />
        
                </div>





      </section>

      <section className='mb-[5rem]'>

        <div className='pl-[15rem] pr-[15rem] max-lg:pl-[2rem] max-lg:pr-[2rem] '>


          <p className=" mt-[10rem] font-manrope font-bold text-[1.4rem] leading-[100%] tracking-[0.5rem] uppercase text-[#4F6D56]">
            Services
          </p>

          <div className='flex gap-[3rem] items-center max-lg:flex-col'>
            <div>
              <h6 className=' mt-[0.8rem] text-[#131714] text-[5.4rem]  leading-[6.4rem] font-extrabold font-manrope'>We Have The Best Interior Design</h6>


            </div>
            <div className='flex flex-col justify-between items-center'>
              <Link to={"/contact"}>


                <p className='font-medium text-[1.4rem] leading-[2.2rem] text-[#6F7470] font-raleway'> Discover innovative interior design solutions that enhance both beauty and functionality in every project.</p>

                <button className="mt-[1.6rem] border border-[#4F6D56] border-1px px-[2rem] py-[1.1rem] font-manrope font-extrabold text-[1.3rem] leading-[2.2rem] tracking-[0.2rem] uppercase text-[#4F6D56]">
                  Connect us
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>




      <div className="cursor-pointer  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 max-w-[1200px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative flex flex-col shadow-sm border rounded-xl overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-[100%] h-[100%] object-cover"
            />

            {/* Overlay */}
            <div className="absolute right-0 inset-0 bg-black bg-opacity-40 flex flex-col justify-end text-black transition-opacity duration-300 group-hover:bg-opacity-60">
              <div className="bg-white text-end absolute p-[1.2rem] right-0 bottom-[2rem] w-[80%]">
              
                <h3 className="leading-[3.2rem] text-[#131714] text-xl  text-start font-manrope  font-extrabold">
                  {project.title}
                </h3>
                <p className='text-[1.3rem] mb-[0.5rem] text-start leading-[1.4rem] text-[#4F6D56]  font-medium  '> {project.desc}</p>
                <div className="text-start">
                  <Link
                    to="/contact"
                    className="text-[1rem] leading-[1.4rem] text-[#4F6D56] uppercase tracking-[0.2rem] font-medium hover:underline flex items-end gap-1"
                  >
                    Learn More <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="whitegrid w-[full]    ">

        <div className='pl-[15rem]   text-center pr-[15rem] pt-[16rem] pb-[10rem] max-lg:pl-[2rem] max-lg:pr-[2rem]  '>
          <p className="text-[1.4rem] font-manrope font-bold tracking-[5px] uppercase text-[#4F6D56] ">
            Works
          </p>
          <h2 className="text-[5.4rem]  font-extrabold text-[#131714] leading-[6.4rem] mt-[0.8rem]">
            How It Works
          </h2>
          <p className=" font-raleway  mt-[3.2rem] text-[1.4rem] leading-[2.2rem] text-[#6F7470] max-w-[600px] mx-auto mb-12">
          Our simple 4-step process makes transforming your space easy and stress-free. From the initial consultation to the final handover, we handle every detail with care and professionalism.
          </p>



          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 max-w-[1200px] mx-auto"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="text-left"
                custom={i}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[1.8rem] font-bold text-[#4C5C4C] mb-1">
                    {step.number}
                  </p>
                  <img src={arrow} alt="arrow" />
                </div>
                <h4 className="text-[1.8rem] font-extrabold mb-2">{step.title}</h4>
                <p className="text-[1.4rem] leading-[2.2rem] text-gray-600">
                 {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </section>


      <div className='pl-[15rem] pr-[15rem] mb-[10rem] max-lg:pl-[2rem] max-lg:pr-[2rem] '>


        <p className=" mt-[10rem] font-manrope font-bold text-[1.4rem] leading-[100%] tracking-[0.5rem] uppercase text-[#4F6D56]">
          Portfolio
        </p>

        <div className='flex gap-[3rem] items-center max-lg:flex-col'>
          <div>
            <h6 className=' mt-[0.8rem] text-[#131714] text-[5.4rem]  leading-[6.4rem] font-extrabold font-manrope'>100+ Projects All Over The World</h6>


          </div>
          <div>
            <Link to={"/contact"}>


              <p className='font-medium text-[1.4rem] leading-[2.2rem] text-[#6F7470] font-raleway'>Ready to bring your vision to life? Let’s create something exceptional together. Reach out to explore how we can help with your next project..</p>
              <button className="mt-[1.6rem] border border-[#4F6D56] border-1px px-[2rem] py-[1.1rem] font-manrope font-extrabold text-[1.3rem] leading-[2.2rem] tracking-[0.2rem] uppercase text-[#4F6D56]">
                Connect us
              </button>
            </Link>
          </div>
        </div>

      </div>


      <Homeproject />

      <div className='mt-[5rem] mb-[20rem]' >
     
     <Testomonial />
      </div>
    </div>
  )
}

export default Home

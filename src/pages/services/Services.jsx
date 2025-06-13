import React from 'react'
import { Link } from 'react-router-dom'
import "./services.css";
import arrow from "./resourse/arrow.svg";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import card1 from "./resourse/card1.jpeg";
import card2 from "./resourse/card2.jpeg";
import card3 from "./resourse/card3.jpeg";
import card4 from "./resourse/card4.jpeg";
import card5 from "./resourse/card7.jpeg";
import card6 from "./resourse/card9.jpeg";



const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.02 },
};


const services = () => {

    const testimonials = [
        {
            name: "Julia William",
            role: "Manager at Furni®",
            feedback:
                "Sed id cursus eros vivamus amet neque eleve tellus lacus aliquet amet et vitae pharetra posuere lorem lorem diam.",
        },
        // Duplicate for 3 cards
    ];

    const steps = [
        { number: "01", title: "Design" },
        { number: "02", title: "Develop" },
        { number: "03", title: "Revision" },
        { number: "04", title: "Maintenance" },
    ];


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


    const testim = [
        {
            name: "Julia William",
            position: "Manager at Furniti",
            feedback:
                "Sed id cursus cras viverra vivamus orci Neque vitae ellus lacus aliquet amet id vitae pharetra posuere fermentum diam.",
        },
        {
            name: "Julia William",
            position: "Manager at Furniti",
            feedback:
                "Sed id cursus cras viverra vivamus orci Neque vitae ellus lacus aliquet amet id vitae pharetra posuere fermentum diam.",
        },
        {
            name: "Julia William",
            position: "Manager at Furniti",
            feedback:
                "Sed id cursus cras viverra vivamus orci Neque vitae ellus lacus aliquet amet id vitae pharetra posuere fermentum diam.",
        },
    ];

    const projects = [
  { id: 1, image: card1, title: 'Interior' },
  { id: 2, image: card2, title: 'Interior' },
  { id: 3, image: card3, title: 'Interior' },
  { id: 4, image: card4, title: 'Interior' },
  { id: 5, image: card5, title: 'Interior' },
  { id: 6, image: card6, title: 'Interior' },
]

    return (
        <div className='mt-[10rem]'>


            <section className="bg-[#535353] w-full h-[28.6rem]   flex items-center justify-center pl-[15rem] pr-[15rem]">

                <div className="  flex items-center justify-between w-[100%] ">

                    <h1 className="text-white text-[8.2rem] leading-[96%]  font-bold mb-4">Our Services</h1>
                    <div className="flex items-center px-[2rem] py-[1rem] gap-[1.6rem] bg-[#FFFFFF33]">
                        <p className="  text-white px-3 py-1 text-[1.3rem] font-semibold rounded">HOME</p>
                        <p className="text-white text-[1.9rem] font-semibold">›</p>
                        <p className="text-[#facc15] text-[1.3rem] font-semibold ">Services</p>
                    </div>
                </div>
            </section>


<section className='mb-[5rem]'> 
    
                <div className='pl-[15rem] pr-[15rem] max-lg:pl-[2rem] max-lg:pr-[2rem]'>
    
    
                    <p className=" mt-[10rem] font-manrope font-bold text-[1.4rem] leading-[100%] tracking-[0.5rem] uppercase text-[#4F6D56]">
                        Services
                    </p>
    
                    <div className='flex gap-[3rem]'>
                        <div>
                            <h6 className=' mt-[0.8rem] text-[#131714] text-[5.4rem]  leading-[6.4rem] font-extrabold font-manrope'>We Have The Best Interior Design</h6>
    
    
                        </div>
                        <div>
                            <Link to={"/contact"}>
    
    
                                <p className='font-medium text-[1.4rem] leading-[2.2rem] text-[#6F7470] font-raleway'>Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero..</p>
                                <button className="mt-[1.6rem] border border-[#4F6D56] border-1px px-[2rem] py-[1.1rem] font-manrope font-extrabold text-[1.3rem] leading-[2.2rem] tracking-[0.2rem] uppercase text-[#4F6D56]">
                                    Connect us
                                </button>
                            </Link>
                        </div>
                    </div>
    
                </div>
</section>

<section>



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 max-w-[1200px] mx-auto">
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
          <div className="bg-white text-end absolute p-[2rem] right-0 bottom-[2rem] w-[80%]">
            <h3 className="leading-[3.2rem] text-[#131714] text-lg mb-2 text-start font-manrope text-[2.2rem] font-extrabold">
              {project.title}
            </h3>
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

</section>



            <section className=''>

                {/* Testimonials Section */}
                <section className="bg-[#4C5C4C] mt-[5rem]  text-center  pr-[15rem] pt-[10rem] pb-[10rem] pl-[15rem]">
                    <p className="text-[1.4rem] text-[#E3D27D] font-raleway tracking-[5px] uppercase mb-4">
                        Testimonials
                    </p>

                    <h2 className="text-[5.4rem] text-[#ffffff] font-extrabold leading-[6.4rem] font-manrope  mt-[0.8rem]">
                        What Our Clients Say About Us
                    </h2>

                    <p className=" text-[#FFFFFF] text-[1.4rem] leading-[2.2rem] font-medium font-raleway max-w-[600px] mx-auto mt-[3.2rem]">
                        Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] px-4 relative bottom-[-16.5rem]  ">
                        {testim.map((item, index) => (
                            <div
                                key={index}
                                className="w-[300px] h-[300px] p-8 gap-4 bg-white  shadow-md rounded-md flex flex-col items-center justify-start"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-[#E3D27D] font-medium text-[2rem]">★</span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="font-manrope font-extrabold text-[2.2rem] leading-[3.2rem] tracking-[0%] text-[#131714] text-center mb-2">
                                    What others thought of
                                </h3>

                                {/* Feedback */}
                                <p className="font-raleway font-medium text-[1.4rem] leading-[2.2rem] tracking-[0%] text-center text-[#131714] mb-4">
                                    {item.feedback}
                                </p>

                                {/* Avatar Placeholder */}
                               
                                {/* Name */}
                                <p className="font-manrope  text-[#131714] font-extrabold text-[2.2rem] leading-[3.2rem] tracking-[0%] text-center">{item.name}</p>
                                <p className="font-raleway font-medium text-[1.4rem] leading-[22px] tracking-[0%] text-center text-[#4F6D56]">{item.position}</p>
                            </div>
                        ))}
                    </div>

                </section>

                {/* How It Works Section */}
                <section className="whitegrid w-[full]    ">

                    <div className='pl-[15rem]   text-center pr-[15rem] pt-[16rem] pb-[10rem]'>
                        <p className="text-[1.4rem] font-manrope font-bold tracking-[5px] uppercase text-[#4F6D56] ">
                            Works
                        </p>
                        <h2 className="text-[5.4rem]  font-extrabold text-[#131714] leading-[6.4rem] mt-[0.8rem]">
                            How It Works
                        </h2>
                        <p className=" font-raleway  mt-[3.2rem] text-[1.4rem] leading-[2.2rem] text-[#6F7470] max-w-[600px] mx-auto mb-12">
                            Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero.
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
                                        Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus.
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                    </div>

                </section>

            </section>

            <section>

                <div className="bg-[#2C2C2C]  mb-[6rem] text-white px-6 py-10 md:px-16 md:py-14  flex flex-col md:flex-row justify-between items-center">
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



        </div>
    )
}

export default services

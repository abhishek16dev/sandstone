import React from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";



const Testomonial = () => {

const testim = [
  {
    name: "Ananya Sharma",
    position: "Homeowner, Gurugram",
    feedback:
      "Sand&Stone transformed our living room into a cozy yet stylish retreat. Their attention to detail and seamless coordination made the whole experience stress-free and truly enjoyable.",
  },
  {
    name: "Rahul Mehta",
    position: "Entrepreneur & Startup Founder",
    feedback:
      "From concept to completion, the team brought innovative ideas to life with impeccable craftsmanship. The result is a functional, modern workspace that inspires creativity every day.",
  },
  {
    name: "Priya Kapoor",
    position: "Interior Enthusiast",
    feedback:
      "Their transparent pricing and proactive communication set Sand&Stone apart. They delivered on time and exceeded my expectations with a beautifully executed project.",
  },
];


    return (
        <div>

            <section className=''>

                {/* Testimonials Section */}
                <section className="bg-[#4C5C4C] mt-[5rem]  text-center  pr-[15rem] pt-[10rem] pb-[10rem] pl-[15rem] max-lg:pr-[2rem] max-lg:pl-[2rem]">
                    <p className="text-[1.4rem] text-[#E3D27D] font-raleway tracking-[5px] uppercase mb-4">
                        Testimonials
                    </p>

                    <h2 className="text-[5.4rem] text-[#ffffff] font-extrabold leading-[6.4rem] font-manrope  mt-[0.8rem]">
                        What Our Clients Say About Us
                    </h2>

                    <p className=" text-[#FFFFFF] text-[1.4rem] leading-[2.2rem] font-medium font-raleway max-w-[600px] mx-auto mt-[3.2rem]">
                    Hear from our satisfied clients who’ve experienced seamless design, expert execution, and exceptional service across every project.

                   
                    </p>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] px-4 relative bottom-[-16.5rem] place-items-center md:place-items-start">

                        {testim.map((item, index) => (
                            <div
                                key={index}
                                className="w-[300px] h-[300px] p-8 gap-4 bg-white  shadow-md rounded-md flex flex-col items-center justify-start  max-lg:justify-center"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-[#E3D27D] font-medium text-[2rem]">★</span>
                                    ))}
                                </div>

                                {/* Title */}
                               

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


            </section>

        </div>
    )
}

export default Testomonial

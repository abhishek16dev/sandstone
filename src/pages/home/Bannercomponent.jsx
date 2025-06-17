import React from 'react'
import bannerimage from "./images/bannerbg.svg"
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
const Bannercomponent = () => {
  return (
    <div>
  <div className="relative h-screen w-full overflow-hidden">
    
      <div className="absolute inset-0 z-0">
        <img
          src={bannerimage}
          alt="Interior"
          className="w-full h-full object-cover"
        />
      </div>

 
      <div className="absolute inset-0 bg-black/60 z-10"></div>


      <motion.div
        className="relative z-20 flex flex-col justify-center items-start h-full px-8 max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-white text-[8.2rem] max-lg:text-[6rem]  font-extrabold leading-[96%] mb-4">
          Modern Interior <br /> Design Studio
        </h1>
        <p className="text-white text-[1.6rem]   max-w-[500px] mb-6 font-normal leading-[120%]">
        Redefining interiors in Bangalore with creativity and detail for functional living and working spaces.
        </p>
        <Link to={"/contact"} >
          <button className="bg-[#E3D27D] text-black px-12 py-6 rounded  transition">
          GET STARTED
        </button>
        </Link>
      
      </motion.div>
{/* 
      <motion.div
        className="absolute bottom-[10rem] right-0 w-[50%] bg-black/80 text-white px-8 py-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-xl text-white font-semibold">Combine Modern Bathroom</h2>
        <p className="text-lg text-white mt-1 max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </motion.div> */}
    </div>
    </div>
  )
}

export default Bannercomponent

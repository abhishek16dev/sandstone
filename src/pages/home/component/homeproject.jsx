import React from 'react'


import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

import card1 from "../../projects/resource/card1.jpeg"

import card2 from "../../projects/resource/card2.jpeg"
import card3 from "../../projects/resource/card3.jpeg"
import card4 from "../../projects/resource/card4.jpeg"
import card5 from "../../projects/resource/card5.jpeg"
import card6 from "../../projects/resource/card6.jpeg"
import card7 from "../../projects/resource/card7.jpeg"
import card8 from "../../projects/resource/card8.jpeg"
import card9 from "../../projects/resource/card9.jpeg"
import card10 from "../../projects/resource/card10.jpeg"
import card11 from "../../projects/resource/card11.jpeg"
import card12 from "../../projects/resource/card12.jpeg"
import card13 from "../../projects/resource/card13.jpeg"
import card14 from "../../projects/resource/card14.jpeg"
import card15 from "../../projects/resource/card15.jpeg"


const homeproject = () => {
    
        const containerVariants = {
            hidden: { opacity: 0, y: 50 },
            visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: "easeOut",
                },
            }),
        };
    
        const imageVariants = {
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
            },
        };
    
    
 const projects = [
  {
    id: 1,
    title: "Residents",
    description:
      "Comfort meets elegance in our residential projects, where each space is designed to reflect the personality and lifestyle of its inhabitants.",
    image: card1,
    image2: card11,
    link: "https://drive.google.com/file/d/1MESy8H3ItShHhq-vV1_nc7FGct0E0GiB/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Penthouse",
    description:
      "Our penthouse designs blend luxury with panoramic views, featuring open layouts, premium finishes, and a timeless aesthetic.",
    image: card2,
    image2: card12,
    link: "https://drive.google.com/file/d/1972vTP5T1kElJsRWICZMGwk5GZ99sVeT/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Living Room",
    description:
      "We craft living rooms that are both stylish and welcoming—perfect for relaxation, entertainment, and meaningful gatherings.",
    image: card3,
    image2: card13,
    link: "https://drive.google.com/file/d/1EVfplB7GEJbXJHSzz4oG0Txn77G77BVZ/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Kitchen",
    description:
      "Functional yet sophisticated, our kitchen designs maximize space, flow, and convenience while maintaining a sleek, modern look.",
    image: card4,
    image2: card14,
    link: "https://drive.google.com/file/d/1xaFIZeYdHqoiDU47efl5Qu2GvrXFZLnJ/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Garden",
    description:
      "Our garden designs integrate greenery with architectural finesse, creating tranquil outdoor retreats for relaxation and inspiration.",
    image: card5,
    image2: card15,
    link: "https://drive.google.com/file/d/1wOuGYyFAa00WtupVhS8nThkKPm01lV8h/view?usp=drive_link",
  },
];

  return (
    <div>
{/*       
                    <div className="w-full">
                        {projects.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`flex flex-col md:flex-row w-full gap-[3rem] mb-[10rem] ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                    }`}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={containerVariants}
                            >
                            
                                <motion.div
                                    className="flex flex-col md:flex-row gap-[3rem]"
                                    variants={imageVariants}
                                >
                                    <div className="bg-gray-300 w-[450px] h-[300px] rounded-md overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="bg-gray-300 w-[320px] h-[300px] rounded-md overflow-hidden">
                                        <img
                                            src={item.image2}
                                            alt={item.title}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>
                                </motion.div>

                    
                                <motion.div
                                    variants={imageVariants}
                                    className="flex flex-col justify-center pr-[4rem] pl-[4rem]"
                                >
                                    <h3 className="text-[4rem] text-[#4F6D56]  leading-[5rem] font-manrope font-extrabold uppercase mb-2">
                                        {String(item.id).padStart(2, "0")}
                                    </h3>
                                    <h2 className="text-[4rem] font-manrope font-extrabold text-[#131714] mt-[0.8rem]">
                                        {item.title}
                                    </h2>
                                    <p className="text-[1.4rem] text-[#6F7470] leading-[2.2rem] mb-6 font-raleway">
                                        {item.description}
                                    </p>


                                    <a
                                        href={item.link}
                                        download
                                        className="bg-[#E3D27D] max-w-[40%]  text-[1.3rem]  text-[#131714] cursor-pointer font-semibold h-[4.6rem] rounded uppercase tracking-widest  flex items-center justify-center text-center font-manrope"
                                    >
                                        Download
                                    </a>

                                </motion.div>
                            </motion.div>
                        ))}
                    </div> */}

                    
                <div className="mt-[5rem]">
  <div className="w-full">
    {projects.map((item, index) => (
      <motion.div
        key={item.id}
        className={`flex flex-col md:flex-row w-full gap-[2rem] mb-[6rem] ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col sm:flex-row gap-[2rem] w-full md:w-1/2"
          variants={imageVariants}
        >
          <div className="bg-gray-300 w-full sm:w-1/2 h-[200px] sm:h-[300px] rounded-md overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="bg-gray-300 w-full sm:w-1/2 h-[200px] sm:h-[300px] rounded-md overflow-hidden">
            <img
              src={item.image2}
              alt={item.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="flex flex-col justify-center w-full md:w-1/2 px-[1.5rem] md:px-[4rem]"
        >
          <h3 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] text-[#4F6D56] leading-tight font-manrope font-extrabold uppercase mb-2">
            {String(item.id).padStart(2, "0")}
          </h3>
          <h2 className="text-[2.2rem] sm:text-[3rem] md:text-[4rem] font-manrope font-extrabold text-[#131714] mt-[0.8rem] leading-snug">
            {item.title}
          </h2>
          <p className="text-[1.3rem] sm:text-[1.4rem] text-[#6F7470] leading-[2rem] sm:leading-[2.2rem] mb-6 font-raleway">
            {item.description}
          </p>

          <a
            href={item.link}
            download
            className="bg-[#E3D27D] w-full sm:max-w-[60%] md:max-w-[40%] text-[1.2rem] sm:text-[1.3rem] text-[#131714] cursor-pointer font-semibold h-[4rem] sm:h-[4.6rem] rounded uppercase tracking-widest flex items-center justify-center font-manrope"
          >
            Download
          </a>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>
    </div>
  )
}

export default homeproject

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

import card1 from "../../../src/pages/projects/resource/card1.jpeg"
import card2 from "../../../src/pages/projects/resource/card2.jpeg"
import card3 from "../../../src/pages/projects/resource/card3.jpeg"
import card4 from "../../../src/pages/projects/resource/card4.jpeg"
import card5 from "../../../src/pages/projects/resource/card5.jpeg"
import card6 from "../../../src/pages/projects/resource/card6.jpeg"
import card7 from "../../../src/pages/projects/resource/card7.jpeg"
import card8 from "../../../src/pages/projects/resource/card8.jpeg"
import card9 from "../../../src/pages/projects/resource/card9.jpeg"
import card10 from "../../../src/pages/projects/resource/card10.jpeg"
import card11 from "../../../src/pages/projects/resource/card11.jpeg"
import card12 from "../../../src/pages/projects/resource/card12.jpeg"
import card13 from "../../../src/pages/projects/resource/card13.jpeg"
import card14 from "../../../src/pages/projects/resource/card14.jpeg"
import card15 from "../../../src/pages/projects/resource/card15.jpeg"


const Project = () => {



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

        { id: 1, title: "Residents", description: "Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.", image: card1 ,image2:card11 ,link:"https://drive.google.com/file/d/1MESy8H3ItShHhq-vV1_nc7FGct0E0GiB/view?usp=drive_link"},
        { id: 2, title: "Penthouse", description: "Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.", image: card2,image2:card12,link:"https://drive.google.com/file/d/1972vTP5T1kElJsRWICZMGwk5GZ99sVeT/view?usp=drive_link" },
        { id: 3, title: "Living Room", description: "Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.", image: card3,image2:card13,link:"https://drive.google.com/file/d/1EVfplB7GEJbXJHSzz4oG0Txn77G77BVZ/view?usp=drive_link" },
        { id: 4, title: "Kitchen", description: "Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.", image: card4,image2:card14 ,link:"https://drive.google.com/file/d/1xaFIZeYdHqoiDU47efl5Qu2GvrXFZLnJ/view?usp=drive_link"},
        { id: 5, title: "Garden", description: "Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.", image: card5,image2:card15 ,link:"https://drive.google.com/file/d/1wOuGYyFAa00WtupVhS8nThkKPm01lV8h/view?usp=drive_link"},
        { id: 6, title: "Dining Area", description: "Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.", image: card6,image2:card1,link:"https://drive.google.com/file/d/1_saNvFYnjPgMlfZCBUZcu9BmrEwYjKqW/view?usp=drive_link" },
        { id: 7, title: "Office Space", description: "Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.", image: card7,image2:card2 ,link:"https://drive.google.com/file/d/1zfS-Jh7JxuWdmUWL6wnZ1yJ7e819_YQp/view?usp=drive_link"},
        { id: 8, title: "Master Bedroom", description: "Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.", image: card8,image2:card3 ,link:"https://drive.google.com/file/d/1wwwt7FvwKqIKBjdnGu7Ku7TsuKKU-rXU/view?usp=drive_link"},
        { id: 9, title: "Balcony View", description: "Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.", image: card9,image2:card4 ,link:"https://drive.google.com/file/d/1iYPX0H7xp3xOLarQhMPs2CJcaRpoEtrD/view?usp=drive_link"},
        { id: 10, title: "Lounge", description: "Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.", image: card10,image2:card5 ,link:"https://drive.google.com/file/d/1pyslY10OBjZxPZKZmWHj0-i7f30kV68U/view?usp=drive_link"}


    ];
    return (
        <div className='mt-[103px] max-w-[1440px] w-[100%] max-auto'>

            <div className="bg-[#535353] w-full h-[28.6rem]   flex items-center justify-center pl-[15rem] pr-[15rem] max-lg:pl-[2rem] max-lg:pr-[2rem]">

                <div className="  flex items-center justify-between w-[100%] ">

                    <h1 className="text-white text-[8.2rem] leading-[96%]  font-bold mb-4">Our Projects</h1>
                    <div className="flex items-center px-[2rem] py-[1rem] gap-[1.6rem] bg-[#FFFFFF33]">
                        <p className="  text-white px-3 py-1 text-[1.3rem] font-semibold rounded">HOME</p>
                        <p className="text-white text-[1.3rem] font-semibold">›</p>
                        <p className="text-[#facc15] text-[1.3rem] font-semibold">OUR PROJECTS</p>
                    </div>
                </div>
            </div>



            <div className='pl-[15rem] pr-[15rem] max-lg:pl-[2rem] max-lg:pr-[2rem]'>


                <p className=" mt-[10rem] font-manrope font-bold text-[1.4rem] leading-[100%] tracking-[0.5rem] uppercase text-[#4F6D56]">
                    Portfolio
                </p>

                <div className='flex gap-[3rem]'>
                    <div>
                        <h6 className=' mt-[0.8rem] text-[#131714] text-[5.4rem]  leading-[6.4rem] font-extrabold font-manrope'>100+ Projects All Over The World</h6>


                    </div>
                    <div>
                        <Link to={"/contact"}>


                            <p className='font-medium text-[1.4rem] leading-[2.2rem] text-[#6F7470] font-raleway'>Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero.</p>
                            <button className="mt-[1.6rem] border border-[#4F6D56] border-1px px-[2rem] py-[1.1rem] font-manrope font-extrabold text-[1.3rem] leading-[2.2rem] tracking-[0.2rem] uppercase text-[#4F6D56]">
                                Connect us
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className='mt-[5rem]  '>



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
                            {/* Image Section */}
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

                            {/* Text Section */}
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
                </div>



            </div>



        </div>
    )
}

export default Project

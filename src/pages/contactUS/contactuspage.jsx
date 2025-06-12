import React from 'react'

import image1 from "./resource/image1.jpg";
import image2 from "./resource/image2.jpg";

const contactuspage = () => {
  return (
    <div className=' mt-[90px] w-full max-w-[1440px] max-auto'>
      

      <div className="bg-[#535353] w-full h-[28.6rem]   flex items-center justify-center pl-[15rem] pr-[15rem]">
      
        <div className="  flex items-center justify-between w-[100%] ">
          
          <h1 className="text-white text-[8.2rem] leading-[96%]  font-bold mb-4">Contact</h1>
          <div className="flex items-center px-[2rem] py-[1rem] gap-[1.6rem] bg-[#FFFFFF33]">
            <p className="  text-white px-3 py-1 text-[1.3rem] font-semibold rounded">HOME</p>
            <p className="text-white text-[1.3rem] font-semibold">›</p>
            <p className="text-[#facc15] text-[1.3rem] font-semibold">CONTACT</p>
          </div>
        </div>
      </div>

      <div className=" pl-[15rem] gap-[6.4rem] pr-[15rem]  mx-auto w-full flex flex-col md:flex-row  mt-[60px]">
        {/* Left Images */}
        <div className="lg:sticky lg:top-[20rem] self-start flex flex-col gap-8 w-full md:w-1/2">

          <div className="bg-gray-300  w-full h-[240px] md:h-[300px] rounded-md flex items-center justify-center text-xl font-bold text-gray-500">
            <img src={image1} className='w-[100%] h-[100%] object-cover' />
          </div>

      


        </div>


        <div className=" w-full md:w-1/2 flex flex-col justify-center mt-[0.8rem]">
          <span className="font-manrope font-bold text-[1.4rempx] leading-tight100 tracking-wider5 uppercase text-[#4F6D56]">Contact</span>

          <h2 className="font-manrope font-bold text-[5.4rem] leading-[6.4rem] tracking-wider5 uppercase text-[#131714] mt-[1rem]">Contact Us</h2>
          <p className="text-[1.4rem] leading-[2.2rem] font-raleway text-[#6F7470] mt-[3.2rem]">
            Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nibh, quis in turpis gravida libero. Ali et eu lacus, quam neque arcu euismod. At id in auctor posuere eget. Convallis varius laoreet.
          </p>
          <div className="mt-[3.2rem]">
            <span className="uppercase text-[1.3rem] text-[#4F6D56] font-extrabold font-manrope leading-[2.2rem] ">Info Contact</span>
            <div className="mt-[1.6rem] text-sm text-[#131714]">
              <p className='text-[#131714] font-medium text-[1.8rem] leading-[2.8rem] font-raleway'>768 Market Street San Francisco, CA 64015, United States </p>


              <p className='text-[#131714] font-medium text-[1.8rem] leading-[2.8rem] font-raleway mt-[0.8rem]'>   customer@electron.com  </p>

              <p className='text-[#131714] font-medium text-[1.8rem] leading-[2.8rem] font-raleway mt-[0.8rem] '>(+021) 345 678 910 </p>


            </div>
          </div>
          <form className="flex flex-col gap-4">


            <p className="font-manrope font-extrabold text-[32px] leading-[38px] tracking-[0] text-[#131714] mt-[3.2rem] mb-[3.2rem]">
              Get a Quote
            </p>

            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="phone"
              placeholder="Phone Number"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded w-fit mt-2 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contactuspage;

import React from 'react'
import '../../../src/index.css'; // or './styles.css'

import "./homeStyle.css"
import Bannerlady from "../../assets/bannerlady.png";
import client from "../../assets/client.png"
import Star1 from "../../pages/home/resources/Frame4.png"
import Star2 from "../../pages/home/resources/Frame5.png"
import Star3 from "../../pages/home/resources/Frame6.png"
import Star4 from "../../pages/home/resources/Frame4.png"


const Home = () => {
  return (
    <>
      <div className=' pl-[40px] pr-[40px]'>
        <div className="context  flex items-center gap-[60px] ">
          <div className='text-part '>
            <h1 className="h1tag">
              <span>Best </span>
              <span className="text-[#409338] floating-text">Digital Marketing</span> <br/>

              <span>  Agency with Smart Strategies</span>
            </h1>

            <h2 className='h2tag'>Where strategy meets trust to fuel digital growth</h2>

            <hr className='line'></hr>

            <strong className='text-[grey] trust '>Trusted by 2,000+ local brands and businesses</strong>

            <div className='text-center flex items-center justify-center'>
              <img src={client} />
            </div>
          </div>



          {/* <div className="relative  mx-auto image-part slide-in-right">

            <img
              src={Star1}
              className="absolute top-[50px] left-[100px] w-10 h-10"
              alt="Star Top Left"
            />

            <img
              src={Star3}
              className="absolute top-[100px] left-[300px] w-10 h-10"
              alt="Star Bottom Left"
            />



         
            <img
              src={Star3}
              className="absolute bottom-[50px] left-[100px] w-10 h-10"
              alt="Star Bottom Left"
            />



        <img
  src={Bannerlady}
  className=" bannerlady h-auto"
  alt="Main Lady"
/>

          </div> */}

          {/* <div className="relative w-full max-w-[500px] aspect-[10/9] mx-auto image-part slide-in-right">
  
  <img
    src={Star1}
    className="absolute top-[10%] left-[20%] w-6 h-6 sm:w-8 sm:h-8"
    alt="Star Top Left"
  />


  <img
    src={Star3}
    className="absolute top-[22%] right-[40%] w-6 h-6 sm:w-8 sm:h-8"
    alt="Star Top Right"
  />

 
  <img
    src={Star3}
    className="absolute bottom-[10%] left-[20%] w-6 h-6 sm:w-8 sm:h-8"
    alt="Star Bottom Left"
  />

 
  <img
    src={Bannerlady}
    className="w-full h-full object-contain"
    alt="Main Lady"
  />
</div> */}



        </div>




        <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >




        <div className='subbanner bg-[#D7F5DC] h-[] pl-[40px] pr-[40px]'>
          <div>
<h4>Building Brands with  <br/> Integrity and Innovation <br/> Across India</h4>
<p>WebNest Media isn’t just another digital marketing company in India — we’re your growth partner. Our team combines strategic thinking, creativity, and technology to elevate your brand across digital channels.
   {/* With us, you get transparency, results, and long-term value. */}
   </p>

   <button className='getstarted-btn'> Get Started</button>

          </div>
<div>
         <img
  src={Bannerlady}
  className=" bannerlady h-auto"
  alt="Main Lady"
/>

</div>




        </div>

      </div>
    </>
  )
}

export default Home

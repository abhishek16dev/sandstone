import React from 'react'
import '../../../src/index.css'; // or './styles.css'

import "./homeStyle.css"
import Homelady from "../../assets/homelady.png";

const Home = () => {
  return (
    <>
      <div className=' pl-[40px] pr-[40px]'>
        <div className="context  ">
          <div className='text-part '>
            <h1 className="h1tag">
              <span>Best </span>
              <span className="text-[#409338] animate-moveUpDown  inline-block">Digital Marketing</span>
            
              <span> Agency with Smart Strategies</span>
            </h1>

            <h2 className='h2tag'>Where strategy meets trust to fuel digital growth</h2>

            <hr className='line'></hr>

            <h3>Trusted by 2,000+ local brands and businesses</h3>

          </div>
          <div className='image-part'>
            <img src={Homelady} className='  w-[500px] ' />

          </div>
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

      </div>

  
 
<div className='bg-[red] rounded-full w-[40px] h-[40px] fade-in zoom-in'></div>


    </>
  )
}

export default Home

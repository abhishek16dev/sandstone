import React, { useState, useRef, useEffect } from 'react'
import c2image from './resources/c2image.svg'
import './lead.css'
import c3image from './resources/c3image.svg'
import image1 from './resources/image1.svg'
import image2 from './resources/image2.svg'
import image3 from './resources/image3.svg'
import image4 from './resources/image4.svg'
import image5 from './resources/image5.svg'
import image6 from './resources/image6.svg'
import c5image from './resources/c5image.svg'
import Accordion from './Components/Accordian'
const Lead = () => {
   const [text, setText] = useState('');
   const words = ['Exclusive', 'Instant', 'Proven'];
   const delay = 150;
   const pause = 1000;
   
   const wordIndex = useRef(0);
   const charIndex = useRef(0);
   const isDeleting = useRef(false);
   
   useEffect(() => {
     let timeout;
   
     const type = () => {
       const currentWord = words[wordIndex.current];
       
       if (!isDeleting.current) {
         // Typing
         setText(currentWord.substring(0, charIndex.current));
         if (charIndex.current < currentWord.length) {
           charIndex.current++;
           timeout = setTimeout(type, delay);
         } else {
           // Pause after typing full word
           timeout = setTimeout(() => {
             isDeleting.current = true;
             timeout = setTimeout(type, delay);
           }, pause);
         }
       } else {
         // Deleting
         if (charIndex.current > 0) {
           charIndex.current--;
           setText(currentWord.substring(0, charIndex.current));
           timeout = setTimeout(type, delay / 2); // Faster delete
         } else {
           // Pause before starting next word
           isDeleting.current = false;
           wordIndex.current = (wordIndex.current + 1) % words.length;
           timeout = setTimeout(type, pause / 2); // Shorter pause after delete
         }
       }
     };
   
     type();
   
     return () => clearTimeout(timeout);
   }, []);
 
  return (
   <div className='mt-[120px] '>
        <div className="amc1 mb-[5px] h-[300px]">
        <h1 id="amc1h1" className='relative text-center'>
          Customer Retention Services<span className='text-black'><br />in Gurgaon</span>  
        </h1>
        <h2 className="heading-styled relative h-[70px] text-[40px]  bg-yellow font-bold text-black px-4 py-1 mt-[15px] ml-[44%]  ">
          {text}
        </h2>
      </div>
      <div className="lmc2">
        <h2 className='text-[52px] text-center mb-[12px]'> Boost Customer Retention with Tried- <br /> and- <span className='text-[#388E3C]'>True Growth Techniques</span></h2>
        <p className='text-[16px] text-center mb-[40px]'>We are a leading customer retention agency in India, helping businesses in Gurgaon, Delhi, and beyond keep their customers happy and engaged.</p>
        <img src={c2image} alt="" className='block mx-auto w-[1200px] h-[493px] mb-[93px] '/>
      </div>
      <div className="lmc3 flex flex-row ml-[40px] mr-[40px] mb-[96px] ">
        <div className="lmc3_left flex flex-col w-[80%]">
          <h2 className='text-[48px] mb-[30px]'>What is customer retention? Sounds heavy? No stress, we’ve got you covered!</h2>
          <p className='text-[16px]'>The goal of customer retention is to keep your current clients satisfied, involved, and returning for more. It entails developing genuine relationships with those who already trust your business rather than concentrating just on acquiring new leads. Think of it like this: ever noticed how your favorite online store remembers your preferences, gives you exclusive offers, and checks in with personalized emails? That’s customer retention in action! <br /> <br />
            We provide customer retention strategies in India that help businesses whether in Gurgaon, Delhi, or anywhere else reduce churn, increase repeat purchases, and turn first-time buyers into loyal fans. It is essential to long-term company success, cost-effective, and brand-building.o</p>
        </div>
      <div className="lmc3_right" >
      <img src={c3image} alt="" className='w-[673.72px] h-[389px] '/>
      </div>
      </div>
      <div className="lmc4 ml-[40px]">
          <h2 className='text-[48px]'>How We Help You to <br />increase customer retention</h2>
            <div className="services-grid">
          <div className="service-card">
            <div className="corner-wrapper">
               <img src={image1} alt="" className='service-icon'/>
              <h3 className="service-title">Create Custom Retention Strategies</h3>
              <p className="service-description">We tailor every plan to match your business goals, audience, and industry for maximum results.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="corner-wrapper">
               <img src={image2} alt="" className='service-icon'/>
              <h3 className="service-title">Run Targeted Email & SMS Campaigns</h3>
              <p className="service-description">Stay connected with your customers through personalized, automated follow-ups that drive repeat sales.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="corner-wrapper">
               <img src={image3} alt="" className='service-icon'/>
              <h3 className="service-title">Implement Loyalty & Reward Programs</h3>
              <p className="service-description">We help you build trust and reward loyal customers so they keep coming back.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="corner-wrapper">
               <img src={image4} alt="" className='service-icon'/>
              <h3 className="service-title">Analyze Customer Behavior & Insights</h3>
              <p className="service-description">Understand what your customers want and when—so you can serve them better.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="corner-wrapper">
               <img src={image5} alt="" className='service-icon'/>
              <h3 className="service-title">Boost Customer Engagement & Satisfaction</h3>
              <p className="service-description">From first purchase to post-sale care, we help you create a consistent and meaningful customer experience.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="corner-wrapper">
               <img src={image6} alt="" className='service-icon'/>
              <h3 className="service-title">Local Focus, National Impact</h3>
              <p className="service-description">Whether you’re in Gurgaon or anywhere in India, our customer retention services are built to grow with you.</p>
            </div>
          </div>
        </div>
      </div>      
      <div className="lmc5 flex flex-row  ml-[20px] mr-[20px] ">
        <div className="lmc5_left w-[] pr-0 mb-[20px] ">
          <h2 className="text-[32px] lg:text-[48px] mb-[24px] lg:mb-[32px] leading-tight">
            How We Help You to <br />
            increase customer retention
          </h2>
          <p className="text-[16px]">
            Customer retention is one of the most critical growth motorists for any business. While acquiring new customers is important, retaining your living bones is further cost-effective, builds trust, and leads to long-term profitability.
            <br />
            <br />
            <br />
            Then’s why it matters
          </p>
          <ol className="mt-[32px] lg:mt-[44px]">
            <li className="mb-[20px] lg:mb-[28px]">
              <h2 className="font-medium text-[24px] mb-[8px] ">1. Lower Acquisition Costs</h2>
              <p className="text-[16px]">
                It costs 5x more to acquire a new client than to retain an being one. fastening on retention helps you save on marketing and deals charges.
              </p>
            </li>
            <li className="mb-[20px] lg:mb-[28px]">
              <h2 className="font-medium text-[24px] lg:text-[32px] mb-[8px] lg:mb-[12px]">2. Advanced Customer Continuance Value (CLV)</h2>
              <p className="text-[16px]">
                Constant customers tend to spend more over time, adding their overall value to your business.
              </p>
            </li>
            <li className="mb-[20px] lg:mb-[28px]">
              <h2 className="font-medium text-[24px] lg:text-[32px] mb-[8px] lg:mb-[12px]">3. More Brand fidelity</h2>
              <p className="text-[16px]">
                Satisfied customers are more likely to stick with your brand, relate to others, and become brand lawyers.
              </p>
            </li>
            <li className="mb-[20px] lg:mb-[28px]">
              <h2 className="font-medium text-[24px] lg:text-[32px] mb-[8px] lg:mb-[12px]">4. Stronger connections</h2>
              <p className="text-[16px]">
                Retention strategies allow you to make meaningful connections through substantiated gests, offers, and support.
              </p>
            </li>
            <li className="mb-[20px] lg:mb-[28px]">
              <h2 className="font-medium text-[24px] lg:text-[32px] mb-[8px] lg:mb-[12px]">5. Sustainable Growth</h2>
              <p className="text-[16px]">
                A high retention rate creates a stable profit sluice, allowing you to plan and gauge with confidence.
              </p>
            </li>
          </ol>
        </div>
        <div className="lmc5_right h-[50%] sticky top-[200px] h-fit self-start">
          <img src={c5image} alt="" className="w-full h-auto object-contain" />
        </div>
      </div>
      <div className="lmc6 mt-[120px]">

        <p className=" mb-[50px] font-medium text-[32px] leading-[40px] ml-[40px] stroke-custom fill-custom">Lets address your <span className='text-[#409338]'>questions</span> today!</p>

        <Accordion/>
      </div>
    </div>
  )
}

export default Lead

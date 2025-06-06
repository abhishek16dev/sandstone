import React from 'react'
import "./brand.css"


import box1 from "./resources/box1.svg"
import box2 from "./resources/box2.svg"
import box3 from "./resources/box3.svg"
import box4 from "./resources/box4.svg"
import box5 from "./resources/box5.svg"
import box6 from "./resources/box6.svg"

import  leftiamge from "./resources/leftiamge.svg";



const Brandmarketing = () => {

const images =[box1,box2,box3,box4,box5,box6]

  return (
    <div className='mt-[120px]'>

<section className="text-center" style={{ fontFamily: 'Segoe UI' }}>
  <h6 className='text-[52px] text-center'>
    <span className="font-bold">Brand</span>{' '}
    <span className="italic">Strategy?</span>
  </h6>
  <p className='font-semibold text-[18px] mt-[12px] text-center'>BRAND STRATEGY. MESSAGING. BRANDING. WEB DESIGN. PACKAGING.</p>


<p className='text-[16px] font-light text-center mt-[52px]'> A brand strategy is the blueprint for how your business is seen and remembered. It defines your purpose, voice, values, and the <br /> way you connect with your audience. More than just visuals, it builds trust, sets you apart from competitors, and ensures every <br/> interaction reflects your brand’s identity. A clear brand strategy turns your business into a brand people recognize and trust.</p>

</section>

<section className='mt-[112px]'>

<div className="flex w-full">
  {images.map((src, index) => (
    <div key={index} className="flex-shrink-0 w-1/6 h-[250px]">
      <img
        src={src}
        alt={`Image ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>


</section>


<section>

<div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 max-w-6xl mx-auto">

  {/* Image on left (smaller) */}
  <div className="w-full md:w-1/3">
    <img
      src={leftiamge}
      alt="Example"
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>

  {/* Content on right (larger) */}
  <div className="w-full md:w-2/3">
    <h6 className="font-light text-black text-[24px]">REAL TALK:</h6>

    <p className="text-[40px] leading-[150%] font-light ">
     <span className='font-semibold' >  Why </span>  <span className='font-thin  italic'> Brand Marketing </span> <br /> <  span className='font-semibold' > Strategy? </span>
    </p>
  </div>

</div>

</section>



    </div>
  )
}

export default Brandmarketing

import React from 'react'
import './Seo.css'
import c1_image from './resources/c1_image.svg'
const Seo = () => {
  return (
   <div className='mt-[120px]'>
      <div className="c1">
        <div className="c1-left">
          <h1>Raise Your Website to #1 on Result Page</h1>
          <p>Let’s take your website from hidden to high-ranking with smart SEO, search-friendly content, smooth structure, and grow naturally.</p>
          <button>Learn More</button>
        </div>
        <div className="c1-right">
          <img src={c1_image} alt="" />
        </div>
      </div>
      <div className="c2">
        <div className="c2-inside">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam exercitationem minima incidunt tenetur nisi.</p>
        </div>
        <div className="c2-cards">
          <p>202002</p>
          <p>20202</p>
          <p>20202</p>
        </div>
      </div>
      <div className="c3">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, doloremque.</p>
          <div className="c3-cards">
    
          </div>
      </div>
      <div className="c4">
        <div className="c4-left">

        </div>
        <div className="c4-right">

        </div>
      </div>
      <div className="c5-form">

      </div>
    </div>
  )
}

export default Seo;

import React, { useState, useRef, useEffect } from 'react'
import './Affilatemarketing.css'
import amc2img from './resources/amc2img.svg'
import amc3img from './resources/amc3img.png'
const Affilatemarketing = () => {
  const [text, setText] = useState('');
    const words = ['Visibility', 'Rank', 'Traffic'];
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
    <div className='mt-[120px]'>
      <div className="amc1">
        <h1 id="amc1h1" className='relative text-center '>Affiliate Marketing Agency <br />in Gurgaon </h1>
        <h2 className="text-[40px] font-bold text-black bg-yellow-400 px-4 py-1 inline-block rounded-md typing ml-[45%] mb-[40px]">
          {text}
        </h2>
      </div>
      <div className="amc2">
        <div className="amc2-left">
          <h1 className="amc2-heading">Affiliate Marketing?</h1>
          <p className="amc2-desc">
            Affiliate marketing is a way for people or businesses to earn money by promoting someone else's products or services. 
            You recommend something you trust—like a product, a tool, or even a course—and when someone buys it through your special link, you earn a commission.
          </p>
          <h2 className="amc2-subheading">It’s a Win-Win:</h2>
          <ul className="amc2-list">
            <li>The company gets more sales.</li>
            <li>The customer gets what they’re looking for.</li>
            <li>And you get paid for making the connection.</li>
          </ul>
          <div className="amc2-buttons">
            <button className="amc2-btn amc2-btn-learn">Learn More</button>
            <button className="amc2-btn amc2-btn-contact">Contact Us</button>
          </div>
        </div>

        <div className="amc2-right">
          <img src={amc2img} alt="Woman with laptop" className="amc2-image justify-between" />
          {/* <div className="amc2-tag">SHARE WITH FOLLOWERS</div> */}
        </div>
      </div>
      <div className="amc3-container">
        <h2 className="amc3-heading">Affiliate Marketing Types</h2>

        <p className="amc3-subheading">
          Affiliate marketing is a way for people or businesses to earn money by promoting someone else’s products or services.
          You recommend something you trust—like a product, a tool, or even a course—and when someone buys it through your special link, you earn a commission.
        </p>

        <div className="amc3-content">
          <div className="amc3-image">
            <img src={amc3img} alt="Affiliate Marketing Illustration" />
          </div>

          <div className="amc3-types">
            {[
              {
                number: '01',
                title: 'Unattached Affiliate Marketing',
                description:
                  'No personal connection or niche authority. Affiliates run ads or share links without recommending the product. It’s simple but less trustworthy and often less effective.',
              },
              {
                number: '02',
                title: 'Related Affiliate Marketing',
                description:
                  'Affiliates have a niche-related audience but haven’t used the product. They leverage their platform to drive traffic based on relevance, not personal experience.',
              },
              {
                number: '03',
                title: 'Involved Affiliate Marketing',
                description:
                  'Affiliates use the product and share real experiences. This builds strong trust and often boosts conversions, but it also means their reputation is tied to the product’s quality.',
              },
            ].map((item, index) => (
              <div className="amc3-type-card" key={index}>
                <div className="amc3-type-header">
                  <span className="amc3-number">{item.number}</span>
                  <h3 className="amc3-title">{item.title}</h3>
                </div>
                <p className="amc3-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
    </div>

    </div>
    
  )
}

export default Affilatemarketing
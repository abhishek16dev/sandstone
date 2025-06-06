import React, { useState, useRef, useEffect } from 'react'
import './Affilatemarketing.css'
import amc2img from './resources/amc2img.svg'
 
import amc3img from './resources/amc3img.png'
import  Icons1 from './resources/Icons1.svg'
import Icons2 from './resources/Icons2.svg'
import Icons3 from './resources/Icons3.svg'
import Icons4 from './resources/Icon4.svg'
import image from './resources/Image.svg'

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
  const statsData = [
    { number: '100%', label: 'Performance Based' },
    { number: '2200+', label: 'Trusted Affiliates' },
    { number: '24/7', label: 'Real-Time Tracking' },
    { number: '100%', label: 'Managed Setup' },
  ];
   
  return (
    <div className='mt-[120px]'>
      <div className="amc1">
        <h1 id="amc1h1" className='relative text-center'>
          Affiliate Marketing Agency <br />in Gurgaon 
        </h1>
        <h2 className="text-[40px] font-bold text-black bg-yellow-400 px-4 py-1 inline-block rounded-md typing ml-[44%] mb-[40px]">
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
          <h2 className="amc2-subheading">It's a Win-Win:</h2>
          <ul className="amc2-list">
            <li>The company gets more sales.</li>
            <li>The customer gets what they're looking for.</li>
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
        <div className="amc3-subcontainer">
          <h2 className="amc3-heading">Affiliate Marketing Types</h2>
          <p className="amc3-subheading">
            Affiliate marketing is a way for people or businesses to earn money by promoting someone else's products or services.
            You recommend something you trust—like a product, a tool, or even a course—and when someone buys it through your special link, you earn a commission.
          </p>
        </div>
        <div className="amc3-content">
          <div className="amc3-image">
            <img src={amc3img} alt="Affiliate Marketing Illustration" />
          </div>
          <div className="amc3-table">
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
                <div className="amc3-row" key={index}>
                  <div className="amc3-title">
                    {/* <span className="amc3-number text-[#252429]">{item.number}</span>{' '} */}
                    <span className="amc3-text-title">{item.title}</span>
                  </div>
                  <div className="amc3-description">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

        </div>
      </div>
      <div className="amc4">
          <div className="container3">
        <p style={{ color: '#EEC370', fontSize: 18 }}>The no. 1 Affiliate Marketing Service</p>
         <p style={{ color: 'black', fontSize: 32, fontWeight: 600, marginBottom:15}}> Grow Smarter with <span className='highlight'>Affiliate Marketing</span></p>
        <p style={{ fontSize: 16}}>
            Drive results through performance-based partnerships – only pay when you earn.
        </p>
        <div className="c2_cards">
          {statsData.map((item, index) => (
            <div className="stat-card" key={index}>
              <h2 className="stat-number">{item.number}</h2>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      </div>
      <div className="amc4">
         <h2 className="trust-heading mt-[40px] ml-[40px] font-semibold text-6xl leading-[72px]">
          <span className='highlight'>WebNest</span> Media's <br />Affiliate  Marketing
          <span className="highlight"> in Gurgaon</span>
        </h2>
        <p className="trust-subheading ml-[40px] mb-[40px] mr-[40px] ">
          In today’s competitive digital landscape, content is more than just information—it’s your voice,
          your story, and your most powerful marketing tool. At WebNest Media, we provide the content marketing services
          in Gurgaon designed to build your brand’s authority, drive traffic, and convert prospects into loyal customers.
          Whether you're a startup looking to create your first content campaign or an established business aiming to scale,
          our content marketing strategies are crafted with precision, creativity, and purpose.
        </p>
          <div className="affiliate-benefits-section">
            <div className="affiliate-benefits-container">
    <div className="affiliate-benefit-card">
      <img src={Icons1} alt="Icon" className="affiliate-icon" />
      <h3>Strategic Partner Selection</h3>
      <p>We carefully choose and collaborate with top affiliate marketers who align with your brand and target audience.</p>
    </div>
    <div className="affiliate-benefit-card">
      <img src={Icons2} alt="Icon" className="affiliate-icon" />
      <h3>Customized Campaign Setup</h3>
      <p>Every business is different. We tailor affiliate strategies that match your goals—whether it’s sales, sign-ups, or brand awareness.</p>
    </div>
    <div className="affiliate-benefit-card">
      <img src={Icons3} alt="Icon" className="affiliate-icon" />
      <h3>Performance Tracking & Optimization</h3>
      <p>We don’t just set it and forget it. Our team continuously tracks clicks, conversions, and ROI to optimize campaigns for better results.</p>
    </div>
    <div className="affiliate-benefit-card">
      <img src={Icons4} alt="Icon" className="affiliate-icon" />
      <h3>Transparent Reporting</h3>
      <p>You get clear, detailed performance reports so you always know where your affiliate budget is going.</p>
    </div>
    <div className="affiliate-benefit-card">
      <img src={Icons1} alt="Icon" className="affiliate-icon" />
      <h3>Ethical, Scalable Growth</h3>
      <p>We focus on long-term, sustainable affiliate partnerships—no spammy tactics, just proven strategies from best affiliate marketing company in Gurgaon.</p>
    </div>   
          </div>

        </div>

      </div>
      <div className="amc5">
        <div className="amc2">
        <div className="amc2-left">
          <h1 className="amc2-heading">Can you make money with <br /><span className='highlight'>Affiliate Marketing?</span> </h1>
          <p className="amc2-desc">
            Yes, you can absolutely make money with affiliate marketing—and the numbers back it up. According to Statista, the global affiliate marketing market is projected to exceed $12 billion by 2027, with consistent year-over-year growth. Reports also show that around 15% to 30% of affiliate marketers earn between $1,000 and $5,000 per month, and the top 1% make over $100,000 annually.
            <br />
            <br />
            The concept is straightforward: you promote products or services using unique affiliate links and earn a commission for each sale made through your referral. Since there's no need to create your own products or handle inventory, affiliate marketing is a low-risk, scalable way to build income online.
          </p>
          
        </div>

        <div className="amc2-right">
          <img src={image} alt="Woman with laptop" className="amc2-image justify-between" />
          {/* <div className="amc2-tag">SHARE WITH FOLLOWERS</div> */}
        </div>
      </div>
      <div className="amc5">
        <div className="accordian">
        <h2 className=''>Let's address your <span className='text-black '>questions </span>today</h2>
        <div className="accordion-wrapper-columns">
          {/* Left Column */}
          <div className="accordion-column">
            <div className="accordion">
              <input type="checkbox" id="left-1" />
              <label className="accordion-label" htmlFor="left-1">
                What is content marketing?
              </label>
              <div className="accordion-content">
                <p>
                  Content marketing is a strategy that involves creating and sharing valuable, relevant content to attract, engage, and convert your target audience. It builds trust and positions your brand as an authority in your industry.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-2" />
              <label className="accordion-label" htmlFor="left-2">
                How does content marketing help my business?
              </label>
              <div className="accordion-content">
                <p>
                  Content marketing drives organic traffic, improves SEO, builds brand awareness, and increases customer loyalty. It also helps educate your audience and guide them toward making a purchase.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-3" />
              <label className="accordion-label" htmlFor="left-3">
                What types of content do you create?
              </label>
              <div className="accordion-content">
                <p>
                  We create a variety of content including blog posts, website copy, social media content, email campaigns, video scripts, case studies, whitepapers, and more—all tailored to your business goals.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-4" />
              <label className="accordion-label" htmlFor="left-4">
                Is content marketing the same as advertising?
              </label>
              <div className="accordion-content">
                <p>
                  Not exactly. Advertising is short-term and sales-focused, while content marketing is long-term and relationship-focused. It’s about providing value, not just pushing products.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-5" />
              <label className="accordion-label" htmlFor="left-5">
                How long does it take to see results from content marketing?
              </label>
              <div className="accordion-content">
                <p>
                  Content marketing is a long-term strategy. While you might see initial engagement within weeks, significant traffic growth and conversions typically take 3–6 months or more.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="accordion-column">
            <div className="accordion">
              <input type="checkbox" id="right-6" />
              <label className="accordion-label" htmlFor="right-6">
                How is content marketing different from SEO?
              </label>
              <div className="accordion-content">
                <p>
                  SEO is the technical process of improving your website’s visibility, while content marketing is about creating valuable content that fuels SEO efforts. They work best together.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-7" />
              <label className="accordion-label" htmlFor="right-7">
                Do you offer content strategy as part of your service?
              </label>
              <div className="accordion-content">
                <p>
                  Yes! We provide a complete content marketing strategy, including content planning, keyword research, tone of voice guidelines, and performance tracking.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-8" />
              <label className="accordion-label" htmlFor="right-8">
                Can content marketing help with lead generation?
              </label>
              <div className="accordion-content">
                <p>
                  Absolutely. By offering informative, solution-based content, you build trust and encourage visitors to take action—whether it’s signing up, contacting you, or making a purchase.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-9" />
              <label className="accordion-label" htmlFor="right-9">
                How do you measure content marketing success?
              </label>
              <div className="accordion-content">
                <p>
                  We track success using key metrics like website traffic, engagement rates, keyword rankings, conversion rates, and ROI through tools like Google Analytics and Search Console.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-10" />
              <label className="accordion-label" htmlFor="right-10">
                Why should I choose WebNest Media for content marketing?
              </label>
              <div className="accordion-content">
                <p>
                  At WebNest Media, we offer custom content strategies backed by research and creativity. Our team focuses on delivering consistent, high-quality content that aligns with your brand and drives results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      </div>
    </div>
  )





}



export default Affilatemarketing




import React, { useState } from 'react';
import "./sem.css";
import SEM1 from './Resources/SEM1.svg';

const Sem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    { id: 0, label: 'Paid Search Ads (PPC)', content: 'Content for Paid Search Ads (PPC)' },
    { id: 1, label: 'Keyword Targeting', content: 'Content for Keyword Targeting' },
    { id: 4, label: 'Bid Management', content: 'Content for Bid Management' },
    { id: 3, label: 'Performance Tracking and Analytics', content: 'Content for Performance Tracking and Analytics' },
    { id: 2, label: 'Ad creation and optimization', content: 'Content for Performance Tracking and Analytics' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className='mt-[120px]'>
      <div className="container_1">
        <div>
          <img src={SEM1} alt="Search Engine Marketing" className="c1_img" />
          <div className="c1_text">
            <h2 className='c1_introduction'>Search Engine Marketing</h2>
            <p className="ans ">
              SEM is a digital marketing tactic focused on increasing a website’s presence on search engines through paid advertising.
              Different types of websites or online businesses can use SEM services in different ways to improve brand awareness.
              At WebNest Media, we provide comprehensive best search engine marketing services.
            </p>
          </div>
        </div>
        <div className="loginform">
          <form onSubmit={handleSubmit}>
            <p className='Form_heading'>Get a free consultation!</p>

            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required />

            <label htmlFor="services">What services are you looking for?</label>
            <select id="services" name="services" required>
              <option value="">Select a service</option>
              <option value="sem">Search Engine Marketing(SEM)</option>
              <option value="seo">Search Engine Optimization(SEO)</option>
              <option value="webDesign">Social Media Marketing(SMM)</option>
              <option value="webDevelopment">Web Development</option>
              <option value="contentMarketing">Content Marketing</option>
              <option value="affiliateMarketing">Affiliate Marketing</option>
            </select>

            <label htmlFor="specifications">Mention your specifications:</label>
            <textarea id="specifications" name="specifications" placeholder="Mention your specific requirements"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="tabs">
        {tabsData.map((tab, index) => (
          <button
            key={tab.id}
            className={`tabbuttons ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabsData[activeTab].content}
      </div>

      <div className="container_2">
        <h2 className='c2_text'>Why choose WebNest Media for Top Search Engine Marketing?</h2>
        <div className='c2_para'>
          <p>
            WebNest Media is the best search engine marketing agency in Gurgaon (SEM) and offers several benefits that set them
            apart from other agencies. Here are a few reasons why you might want to consider them:
          </p>
          <ul className='c2_list'>
            <li className="list-item">
              <span className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></span>
              <b>Expertise in </b> We have a team of professionals experienced in creating and optimizing paid search campaigns. Their
              expertise could help improve ad performance and maximize ROI.
            </li>
            <li className="list-item">
              <span className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></span>
              <b> Customized Strategies:</b>We will provide top-notch search engine marketing strategies that are aligned with your business
              goals, focusing on specific keywords, targeting methods, and ad copy that will resonate with your audience.
            </li>
            <li className="list-item">
              <span className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></span>
              <b>Comprehensive Services:</b> SEM is more than just pay-per-click (PPC) ads; it's about integrating your strategy with SEO,
              landing page optimization, and continuous testing. WebNest Media may offer a holistic approach that addresses all
              these areas.
            </li>
            <li className="list-item">
              <span className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></span>
              <b>Up-to-Date with Trends:</b> The world of SEM is constantly evolving. WebNest Media likely stays updated with the latest
              trends and strategies to keep your campaigns ahead of the competition. We use different types of search engine
              marketing tools to stay updated.
            </li>
            <li className="list-item">
              <span className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></span>
              <b>Conversion-Focused:</b> WebNest Media could emphasize not only driving traffic but also increasing conversions. Whether it's
              purchases, leads, or other goals, our team focuses on improving conversion rates for better overall campaign success.
            </li>
            <li className="list-item">
              <span className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></span>
              <b>Experience with Various Platforms:</b> Our team is full of experience with major SEM platforms like Google Ads, Bing Ads,
              and other search networks, offering flexibility depending on your audience and objectives.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sem;
import React, { useState } from 'react';
import "./sem.css";
import SEM1 from './Resources/SEM1.svg';
import KeywordTargeting from './resources/KeywordTargeting.svg';
import PPC from './resources/PPC.svg';
import bid from './resources/bid.svg';
import analytics from "./resources/analytics.svg";
import ads from './resources/ads.svg';
const Sem = () => {
  const [activeTab, setActiveTab] = useState(0);

   const tabsData = [
    { id: 0, label: 'Pay-Per-Click (PPC)', image: PPC,
      description: (
        <>
          <h2>What is Pay Per Click Advertising?</h2>
          <p>Pay Per Click is a form of online advertising where advertisers pay a fee for every single click. In essence, it's a method of purchasing website traffic instead of obtaining it naturally through SEO. Pay Per Click Ads show up on social media sites like Facebook and Instagram and search engines like Google and Bing, enabling companies to target particular demographics based on keywords, location, and demographics.</p>
        </>
      ),
       content: (
        <div>
          <h2>Top Reasons to Invest in Pay Per Click Marketing</h2>
          <p>Pay-Per-Click is one of the most cost-effective ways to reach potential customers who are actively searching for what you offer. Here are some key benefits:</p>
          <ul className='tab-list' style={{paddingBottom: '20px'}}>
            <li className='c2_list_items'><div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Instant Visibility:</b> PPC ads appear as soon as your campaign is live, providing immediate traffic and brand exposure as compared to SEO, which can delay results for months.</li>
            <li className='c2_list_items'><div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Highly Targeted:</b>  To make sure you reach the correct audience, PPC targets the right audience based on their search intent, location, and demographics.</li>
            <li className='c2_list_items'><div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Budget Control:</b>  You can set your own budget and simply pay for clicks, making it easy to control your ad expenditure.</li>
            <li className='c2_list_items'><div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Measurable Results:</b>  PPC offers tracking and analysis of every click, helping you optimize your campaigns for maximum impact.</li>
          </ul>
          <h2>PPC Advertising Solutions</h2>
          <ul className='tab-list' style={{paddingBottom: '20px'}}>
            <li style={{ paddingTop: '10px' }}><b> Google Ads Management:</b>  We craft highly targeted campaigns that appear in Google Search results and on the Google Display Network, ensuring your ads reach the right audience at the right time.</li>
            <li style={{ paddingTop: '10px' }} ><b> Social Media Ads:</b>  We run powerful PPC campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter, targeting users based on their interests, behaviors, and engagement.</li>
            <li style={{ paddingTop: '10px' }}><b> Remarketing Campaigns:</b>  We have a team of PPC experts in Gurgaon that keeps your brand top of mind by showing ads to users who have already visited your website, encouraging them to return and complete their purchase.</li>
            <li style={{ paddingTop: '10px' }}><b>Video Ads (YouTube):</b> Use engaging video content to drive brand awareness, increase website visits, and generate leads through YouTube Ads.</li>
            <li style={{ paddingTop: '10px' }}><b>Display Advertisements:</b> Our team targets users with banner advertisements across the Google Display Network, increasing brand visibility and driving conversions.</li>
          </ul>
          <h2>Start Your PPC Campaign Today</h2>
          <p>
            Ready to drive more traffic and boost conversions? Our team of PPC experts is here to design and manage custom campaigns that align with your business goals. Contact us today to start seeing real results with PPC advertising.
          </p>
        </div>
      )
      },
    { id: 1, label: 'Keyword Targeting',image:KeywordTargeting,
    description: (
      <>
        <h2>What is Keyword Targeting?</h2>
        <p>
          The technique of choosing and focusing on particular keywords that potential customers use to look for goods, services, or information about your company is known as keyword targeting. By strategically placing these keywords in your ads or content, you increase the likelihood of showing up in search results when your target audience is actively searching for solutions.
        </p>
      </>
    ),
     content: (
      <div>
        <h2>What Makes Keyword Targeting So Effective</h2>
        <ul className='tab-list'>
          <li className='c2_list_items'>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Audience Targeting:</strong> Keyword targeting ensures that your content or ads reach the exact audience searching for what you offer. We focus on highly specific keywords, attracting qualified leads and relevant traffic, avoiding wasted impressions.
          </li>
          <li className='c2_list_items'>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Scalability & Flexibility:</strong> Whether we’re focused on local keywords to attract nearby customers or using broader keywords to scale to a global audience, keyword targeting offers the flexibility to adapt based on our goals.
          </li>
          <li className='c2_list_items'>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>High-Intent Keywords for Higher Conversions:</strong> Targeting high-intent keywords means we’re reaching users ready to take action—leading to better quality traffic and improved conversion rates.
          </li>
          <li className='c2_list_items'>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>SEO and Paid Media Synergy:</strong> By using the same keywords for SEO and PPC, we maximize reach across both paid and organic channels—improving visibility, traffic, and overall campaign effectiveness.
          </li>
        </ul>

        <h2>How Keyword Targeting Improves Your Ad Campaigns</h2>
        <p>
          PPC campaigns are all about targeting the right audience with the right message. Focusing on targeted keywords ensures your ads show up when users search for terms closely related to your business. This results in:
        </p>
        <ul className='tab-list'>
          <li className='c2_list_items'>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Higher Click-Through Rates (CTR):</strong> Your ads are more relevant to searchers, increasing the chance of clicks.
          </li>
          <li className='c2_list_items'>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Better Quality Traffic:</strong> Keyword-focused targeting brings visitors more likely to convert, minimizing wasteful ad spend.
          </li>
          <li className='c2_list_items'>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Improved Ad Ranking:</strong> A precise keyword strategy boosts your Quality Score in Google Ads, helping your ads rank higher.
          </li>
        </ul>

        <h2>How Keyword Targeting Boosts Your SEO Strategy</h2>
        <p>
          In SEO, keyword targeting helps your website rank for relevant search queries. Including keywords in title tags, meta descriptions, headers, and content makes it easier for search engines to understand your content. Benefits include:
        </p>
        <ul className='tab-list'>
          <li className='c2_list_items'>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Increased Organic Traffic:</strong> Targeting the right keywords gets your site seen by users actively searching for your offerings.
          </li>
          <li className='c2_list_items'>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Better Search Engine Visibility:</strong> Keyword optimization helps you rank higher in search results, boosting visibility and credibility.
          </li>
          <li className='c2_list_items'>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Targeting User Intent:</strong> Aligning keywords with user intent helps deliver content that answers real queries, increasing engagement and reducing bounce rates.
          </li>
        </ul>
        
      </div>
    ) },
    { id: 2, label: 'Bid Management',image:bid,
    description: (
      <>
        <h2>What is Bid Management?</h2>
        <p>
          Bid Management is the strategic process of setting and adjusting how much you’re willing to pay for each click or impression in your online advertising campaigns. It involves monitoring real-time data, analyzing competitor activity, and optimizing bids to ensure your ads get the best possible placement without overspending.
        </p>
        <p>
          Effective bid management helps maximize your return on investment by balancing cost with performance, ensuring your budget is spent where it drives the most valuable traffic and conversions.
        </p>

      </>
    ),
     content: (
      <div>
        
        <h2>How Bid Management Boosts Your Campaign Performance</h2>
        <p>
          Proper bid management helps your ads rank higher in auction results, improving visibility and attracting more qualified clicks. By continuously optimizing bids, we reduce unnecessary spend, increase click-through rates (CTR), and improve conversion rates — delivering better results with less budget.
        </p>

        <h2>Types of Bidding Strategies We Use</h2>
        <ul className='tab-list'>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Manual CPC Bidding:</strong> Gives complete control by allowing you to set individual bids for each keyword.
          </li>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Enhanced CPC:</strong> Automatically adjusts your manual bids to help get more conversions while maintaining cost-efficiency.
          </li>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Target CPA (Cost Per Acquisition):</strong> Builds bids to drive as many conversions as possible at your preferred acquisition cost.
          </li>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Target ROAS (Return On Ad Spend):</strong> Focuses on maximizing revenue while achieving your desired return on ad spend.
          </li>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Maximize Clicks:</strong> Automatically modifies bids to gain the highest number of clicks while staying within your budget.
          </li>
        </ul>

        <h2>Why Partner with WebNest Media for Bid Management?</h2>
        <p>
          At WebNest Media, we combine data-driven decision-making with years of digital marketing expertise to manage your bids smartly and strategically. Our continuous monitoring and optimization guarantee that your campaigns always perform at their best—maximizing ROI and accelerating business growth.
        </p>
      </div>

     )},
    { id: 3, label: 'Performance Tracking and Analytics',image:analytics,
    description: (
      <>
        <h2>What is Performance Tracking and Analytics?</h2>
        <p>
          We know that successful marketing depends on understanding how your campaigns perform. Performance tracking and analytics give you clear visibility into every aspect of your marketing efforts, allowing us to make smart, data-driven decisions that maximize your ROI and business growth.
        </p>
         <p>
          By using tools and reports, businesses can make informed decisions, optimize strategies in real-time, and maximize the effectiveness of their advertising efforts to achieve better results and higher returns.
        </p>

      </>
    ),
     content: (
      <div>
       
        <h2 style={{paddingTop: '40px'}}>Why Performance Tracking is Crucial</h2>
        <p>
          Marketing initiatives are predicated on assumptions in the absence of tracking and analytics, which results in lost opportunities and wasted money. By measuring the right metrics, you can see which ads drive results, allocate budgets wisely, and improve underperforming areas to maximize ROI.
        </p>

        <h2 >Tools We Use for Accurate Insights</h2>
        <ul className='tab-list'>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Google Analytics:</strong> Tracks user behavior on your website, helping us understand what works and what needs improvement.
          </li>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Google Ads Conversion Tracking:</strong> Monitors the performance of your paid campaigns, ensuring you get the most from your budget.
          </li>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'>
              <span className='tick text-[white]'>&#10003;</span>
            </div>
            <strong>Facebook Pixel:</strong> Provides valuable data on social media ad engagement and conversions to refine campaign strategies.
          </li>
        </ul>

        <h2>How We Optimize Your Campaigns</h2>
        <p>
          Collecting data is just the start. We analyze performance insights to refine targeting, improve ad creatives, optimize landing pages, and adjust budgets. This ongoing process ensures your campaigns deliver better results at lower costs.
        </p>

        <h2>Why Choose WebNest Media for Performance Tracking and Analytics?</h2>
        <p>
          Our team combines marketing expertise with technical skills to turn data into actionable strategies. We ensure your advertising budget is spent effectively, helping your business grow and outperform competitors.
        </p>
      </div>

      )
     },
    { id: 2, label: 'Ad creation and optimization',image:ads,
    description: (
      <>
        <h2>What is Ad Creation and Optimization?</h2>
        <p>
          Ad Creation and Optimization is the process of designing compelling advertisements and continuously refining them to achieve the best possible results. It involves crafting engaging ad copy, selecting eye-catching visuals, and targeting the right audience.
        </p>
        <p>
          Optimization means regularly testing and adjusting ads—like headlines, images, and bids—based on performance data to increase clicks, conversions, and return on investment (ROI). This ensures your advertising budget is used efficiently to drive sales, leads, or brand awareness.
        </p>

      </>
    ),
     content: (
      <div>
        
        <h2 style={{paddingTop: '30px'}}>Strategic Ad Creation & Optimization Services That Deliver Results</h2>
        <p>
          In today’s competitive digital space, just running ads isn’t enough. You need ads that speak to your audience, grab attention, and convert. At WebNest Media, we specialize in strategic ad creation and optimization that helps your brand cut through the noise and drive meaningful results — whether it’s sales, leads, or engagement.
        </p>

        <h2>Continuous Optimization for Maximum ROI</h2>
        <p>
          Launching the ad is just the beginning. We believe real success lies in continuous performance optimization. Our team monitors ad performance daily, analyzing what’s working and what needs to improve.
        </p>
        <ul className='tab-list'>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'><span className='tick text-[white]'>&#10003;</span></div>
            <strong>Ad Creatives:</strong> Engaging visuals and formats tailored to resonate with your audience.
          </li>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'><span className='tick text-[white]'>&#10003;</span></div>
            <strong>Headlines and CTAs:</strong> Optimized copy that grabs attention and drives action.
          </li>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'><span className='tick text-[white]'>&#10003;</span></div>
            <strong>Target Audiences:</strong> Refined based on behavior and performance to reach the most relevant users.
          </li>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'><span className='tick text-[white]'>&#10003;</span></div>
            <strong>Bidding Strategies:</strong> Adjusted to maximize performance within your budget.
          </li>
          <li className='c2_list_items'  style={{ paddingTop: '10px' }}>
            <div className='tick_mark'><span className='tick text-[white]'>&#10003;</span></div>
            <strong>Landing Pages:</strong> Optimized for conversions with clear messaging and fast load times.
          </li>
        </ul>

        <h2>Multi-Platform Ad Expertise</h2>
        <p>
          Whether you're running ads on Google Search, Display Network, Meta (Facebook & Instagram), LinkedIn, or YouTube, we bring the expertise to design and optimize campaigns specific to each platform’s strengths.
        </p>
        <p>
          Each channel has a unique user mindset, and our ad strategies adapt to fit — from high-intent Google Ads to visually impactful Meta campaigns.
        </p>

        <h2>Connect with WebNest Media to Make Your Ads Work Harder for You</h2>
        <p>
          We believe that ads should be more than just pretty designs — they should be powerful tools that drive measurable business growth. If you're ready to run high-impact campaigns with lower costs and higher conversions, we’re here to help.
        </p>
        <p>
          Partner with WebNest Media for ad creation and optimization services that make your marketing budget work smarter — and harder.
        </p>
      </div>

    ) },
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
              SEM is a digital marketing tactic focused on increasing a website’s presence on search engines through paid advertising. Different types of websites or online businesses can use search engine marketing services in different ways to improve brand awareness. At WebNest Media, we provide comprehensive search engine marketing SEM services.</p>
          </div>
        </div>
        <div className="loginform">
          <form 
          onSubmit={handleSubmit}
          >
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

      <div className="container_2">
        <h2 className='c2_text'>Why choose WebNest Media for Search Engine Marketing Campaign?</h2>
        <div className='c2_para'>
          <p style={{paddingTop: '10px', paddingBottom: '10px'}}>
           WebNest Media is the search engine marketing company india and offers several benefits that set them apart from other agencies. Here are a few reasons why you might want to consider them:
          </p>
          <ul className='c2_list'>
            <li className='c2_list_item'>
              <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Specialist Search Engine Marketing </b> We have a team of professionals experienced in creating and optimizing paid search campaigns. Their
              expertise could help improve ad performance and maximize ROI.
            </li>
            <li className='c2_list_item'>
               <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b> Customized Strategies:</b>We will provide top-notch search engine marketing strategies that are aligned with your business
              goals, focusing on specific keywords, targeting methods, and ad copy that will resonate with your audience.
            </li>
             <li className='c2_list_item'>
              <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Comprehensive Services:</b> SEM is more than just pay-per-click (PPC) ads; it's about integrating your strategy with SEO,
              landing page optimization, and continuous testing. WebNest Media may offer a holistic approach that addresses all
              these areas.
            </li>
             <li className='c2_list_item'>
              <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Up-to-Date with Trends:</b> The world of SEM is constantly evolving. WebNest Media likely stays updated with the latest
              trends and strategies to keep your campaigns ahead of the competition. We use different types of search engine
              marketing tools to stay updated.
            </li>
             <li className='c2_list_item'>
              <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Conversion-Focused:</b> WebNest Media could emphasize not only driving traffic but also increasing conversions. Whether it's
              purchases, leads, or other goals, our team focuses on improving conversion rates for better overall campaign success.
            </li>
             <li className='c2_list_item'>
              <div className='tick_mark'> <span className='tick text-[white]'> &#10003;</span></div><b>Experience with Various Platforms:</b> Our team is full of experience with major SEM platforms like Google Ads, Bing Ads,
              and other search networks, offering flexibility depending on your audience and objectives.
            </li>     
          </ul>
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
        <div className="tab-image-description">
          <div className="img_wrap">
            <img className='tab_image' src={tabsData[activeTab].image} alt={tabsData[activeTab].label} />
          </div>
          <div className="tab-description">
            {tabsData[activeTab].description}
          </div>
        </div>
        <div className="tab-html-content"> {tabsData[activeTab].content}</div>
      </div>


   

    </div>
  );
};

export default Sem;
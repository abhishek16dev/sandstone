import React, { useEffect, useState, useRef } from 'react';
import './cm.css'; // Make sure this file has your styles
import c1_image from './Resources/Rectangle.svg';
import image from './Resources/image.svg';
import Conatctfrom from '../../components/contact/contactform'; // Corrected import
import Accordian from '../home/componnet/Accordian.jsx';
import { FiPhone } from "react-icons/fi";

const ContentMarketing = () => {
  const [text, setText] = useState('');
   const words = ['Engage', 'Impact', 'Content'];
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
    { number: '1050+', label: 'Pro Video Edits' },
    { number: '85%', label: 'Content Strategy' },
    { number: '40%', label: 'Brand Stories' },
    { number: '2500+', label: 'Bold Visuals' },
  ];
  const trustData = [
    {
      title: "Uncovering Your Potential",
      text: "Our creative team delves deep into your brand's strengths to identify opportunities and connect with the most suitable audience for your business.",
    },
    {
      title: "Strategic Keyword Research",
      text: "As the best content writing company in Gurgaon, WebNest Media meticulously selects relevant keywords to enhance your website's appeal and search engine visibility.",
    },
    {
      title: "Collaborative Creativity",
      text: "We value your insights and actively involve you in the content creation process. By blending your ideas with our expertise, we craft content that truly represents your brand's voice.",
    },
  ];

  const faqData = [
    {
      question: "What is content marketing?",
      answer: "Content marketing is a strategy that involves creating and sharing valuable, relevant content to attract, engage, and convert your target audience. It builds trust and positions your brand as an authority in your industry.",
    },
    {
      question: "How does content marketing help my business?",
      answer: "Content marketing drives organic traffic, improves SEO, builds brand awareness, and increases customer loyalty. It also helps educate your audience and guide them toward making a purchase.",
    },
    {
      question: "What types of content do you create?",
      answer: "We create a variety of content including blog posts, website copy, social media content, email campaigns, video scripts, case studies, whitepapers, and more—all tailored to your business goals.",
    },
    {
      question: "Is content marketing the same as advertising?",
      answer: "Not exactly. Advertising is short-term and sales-focused, while content marketing is long-term and relationship-focused. It’s about providing value, not just pushing products.",
    },
    {
      question: "How long does it take to see results from content marketing?",
      answer: "Content marketing is a long-term strategy. While you might see initial engagement within weeks, significant traffic growth and conversions typically take 3–6 months or more.",
    },
    {
      question: "How is content marketing different from SEO?",
      answer: "SEO is the technical process of improving your website’s visibility, while content marketing is about creating valuable content that fuels SEO efforts. They work best together.",
    },
    {
      question: "Do you offer content strategy as part of your service?",
      answer: "Yes! We provide a complete content marketing strategy, including content planning, keyword research, tone of voice guidelines, and performance tracking.",
    },
    {
      question: "Can content marketing help with lead generation?",
      answer: "Absolutely. By offering informative, solution-based content, you build trust and encourage visitors to take action—whether it’s signing up, contacting you, or making a purchase.",
    },
    {
      question: "How do you measure content marketing success?",
      answer: "We track success using key metrics like website traffic, engagement rates, keyword rankings, conversion rates, and ROI through tools like Google Analytics and Search Console.",
    },
    {
      question: "Why should I choose WebNest Media for content marketing?",
      answer: "At WebNest Media, we offer custom content strategies backed by research and creativity. Our team focuses on delivering consistent, high-quality content that aligns with your brand and drives results.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="container1">
        <h1 id="c1h1" className='relative text-center'>Content Marketing <span className='text-black'>Agency <br />in Gurgaon </span></h1>
        <h2 className="heading-styled relative h-[60px] text-[40px]  bg-yellow font-bold text-black px-4 py-1 mt-[320px] ">
  {text}
</h2>
      </div>

      <div className="container2">
        <div className="c2left">
          <p id="c2headingleft" className="c2heading">
            <span className='highlight'>Content</span> is the key to building audiences

          </p>
          <p id="c2paraleft">
            Great content captures attention, builds trust, and keeps your audience coming back. At WebNest Media, we craft meaningful content that speaks directly to your ideal customers.

          </p>
          <div className="c2buttons">
            <button className='greenbutton'>Learn More</button>
            <button className='whitebutton'>Contact Us</button>
          </div>
        </div>
        <div className="c2right">
          <img src={image} alt="" />
        </div>
      </div>
        {/* <div className="custom-stats-section">
          <p style={{ color: '#EEC370', fontSize: 18 }}>The no.1 SEO Service</p>
          <p style={{ color: 'black', fontSize: 32, fontWeight: 600, marginBottom: 15 }}>
            Your <span className='highlight'>Success</span> is our <span className='highlight'>Mission</span>
          </p>
          <p style={{ fontSize: 16 }}>
            From strategy to execution, we align your content with what your audience truly values.
          </p>
          <div className="custom-stats-cards">
            {statsData.map((item, index) => (
              <div className="custom-stat-card" key={index}>
                <h2 className="stat-number">{item.number}</h2>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
       </div> */}
            <div className="container3">
        <p style={{ color: '#EEC370', fontSize: 18 }}>The no. 1 Content Marketing Service</p>
        <p style={{ color: 'black', fontSize: 32, fontWeight: 600, marginBottom:15}}>
          Build a Customer-Centric  <span className='highlight'>Marketing Strategy</span>
        </p>
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




      

      <div className="container4">
  <h2 className="trust-heading ml-[40px] font-semibold text-6xl leading-[72px]">
    Bringing Out the Best Content Writing <br />Company 
    <span className="highlight"> in Gurgaon</span>
  </h2>

  <p className="trust-subheading ml-[40px] mb-[40px] ">
    In today’s competitive digital landscape, content is more than just information—it’s your voice,
    your story, and your most powerful marketing tool. At WebNest Media, we provide the content marketing services
    in Gurgaon designed to build your brand’s authority, drive traffic, and convert prospects into loyal customers.
    Whether you're a startup looking to create your first content campaign or an established business aiming to scale,
    our content marketing strategies are crafted with precision, creativity, and purpose.
  </p>

  <div className="trust-card-container">
    {trustData.map((item, index) => (
      <div className="trust-card" key={index}>
        <h3 className="trust-title">
          <span className="trust-number">{index + 1}.</span> {item.title}
        </h3>
        <p className="trust-description">{item.text}</p>
      </div>
    ))}
  </div>
</div>

      <div className="container5">
        <p className="service-label text-center" style={{ fontSize: 20, fontWeight: 400 }}>Our Services</p>
        <h2 className="process-heading text-center">
          Types of <span className="highlight">Content Marketing</span>
        </h2>
        <div className="seo-steps">
          {[
            {
              title: "Blog Content Marketing",
              text: "Helpful, well-written blogs that answer real questions and bring your audience to your website naturally.",
            },
            {
              title: "Social Media Content",
              text: "Creative posts and stories that spark conversations, build your brand, and connect you with real people.",
            },
            {
              title: "Video Marketing",
              text: "Videos that tell your story in a way your audience loves—simple, emotional, and easy to remember.",
            },
            {
              title: "Email Marketing",
              text: "Friendly, helpful emails that keep your audience informed, engaged, and excited to hear from you.",
            },
            {
              title: "Infographics",
              text: "Fast, attractive pictures that make difficult concepts simple to learn and enjoyable to share.",
            },
          ].map((item, index) => (
            <div className="seo-step-card h-[50px]" key={index}>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container6 ">
        <p className="text-[#409338] font-bold text-[40px] leading-[40px]  text-center stroke-custom fill-custom mt-20">
          Get a free consultation!
        </p>

        <div className="conatctform flex flex-row items-center justify-center flex-wrap gap-10 max-lg:flex-col mb-10 px-5 py-10">

          {/* Left Side: Text + Numbers */}
          <div className="w-[45%] max-lg:w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5c945c]">
              Work With Us and Take <br />Your Business to the Next Level
            </h3>
            <p className="text-[17px] text-black mt-5 mb-5">
              We provide the tools, expertise, and support you need to grow faster,
              <br /> reach more customers, and stay ahead of the competition.
              <br /> Let’s take your business to the next level—together.
            </p>

            <div className="space-y-2">
              <button className="getstarted-btnn w-[200px] flex items-center gap-2 px-4 py-2 rounded bg-[#5c945c] text-white">
                <FiPhone className="text-white" />
                <a href="tel:+919696964606" className="text-white">
                  +91-9696964606
                </a>
              </button>

              <button className="getstarted-btnn w-[200px] flex items-center gap-2 px-4 py-2 rounded bg-[#5c945c] text-white">
                <FiPhone className="text-white" />
                <a href="tel:+919211676307" className="text-white">
                  +91-9211676307
                </a>
              </button>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-[45%] max-lg:w-full">
            <Conatctfrom className="w-full" /> {/* Corrected component name */}
          </div>
        </div>
      </div>
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
    </>
  );
};
export default ContentMarketing;
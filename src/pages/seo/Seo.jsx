import React, { useState, useRef, useEffect } from 'react';
import './Seo.css';
import c1_image from './resources/c1_image.svg';
import c2_image from './resources/hero_img.svg';
import Conatctfrom from '../../components/contact/contactform';
import Accordian from '../home/componnet/Accordian.jsx';
import { FiPhone } from "react-icons/fi";

const Seo = () => {
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
    { number: '21,3456', label: 'Organic Traffic Growth' },
    { number: '13,200+', label: 'Keyword Rankings' },
    { number: '98/100', label: 'Speed & UX Score' },
    { number: '231,580+', label: 'Leads Generated' },
  ];
  const trustData = [
    {
      title: "SEO That Works, Without the Gimmicks",
      text: "As a leading SEO company in Gurgaon, we ensure your business reaches the right audience at right moment. Our trusted SEO expert in Gurgaon uses ethical, data-driven strategies to boost visibility, traffic, and customer trust.",
    },
    {
      title: "Proven Track Record of Results",
      text: "At Webnest Media, we deliver real results. As the best SEO services company in Gurgaon, our SEO expert boosts organic traffic, rankings, and conversions with data-driven strategies.",
    },
    {
      title: "Experienced SEO Specialists",
      text: "Our team is made up of passionate SEO professionals with years of experience across diverse industries. We stay ahead of algorithm changes and industry trends to keep your site competitive.",
    },
    {
      title: "Client-Centered Approach",
      text: "Your success is our priority. We work as an extension of your team, keeping your business goals at the center of everything we do.",
    },
    {
      title: "Ready to Rank Higher and Grow Smarter?",
      text: "Whether you're just getting started or looking to scale, Webnest Media is here to help. Let’s turn your website into your most powerful marketing tool.",
    },
  ];
  const faqData = [
    {
      question: "What is Search Engine Marketing (SEM)?",
      answer: "SEM refers to strategies that promote websites by increasing visibility in search engine results pages through paid advertising.",
    },
    {
      question: "What are the benefits of Search Engine Marketing?",
      answer: "It provides instant visibility, targeted traffic, measurable results, and better ROI for your marketing budget.",
    },
    {
      question: "How does SEM differ from SEO?",
      answer: "SEM is paid and provides instant results, while SEO is organic and builds visibility over time.",
    },
    {
      question: "What is PPC (Pay-Per-Click) marketing in Search Engine Marketing?",
      answer: "PPC is an SEM model where advertisers pay a fee each time their ad is clicked.",
    },
    {
      question: "Why is keyword research important in SEM?",
      answer: "It ensures ads target the right search terms, improving ad relevance and cost-efficiency.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className=" mt-[100px] container1 " id='c1'>
        <h1 id='c1h1'>SEO Agency in Gurgaon</h1>
        <h2 className="text-[40px] font-bold text-black bg-yellow-400 px-4 py-1 inline-block rounded-md typing mt-[150px]">
          {text}
        </h2>

        


      </div>

      <div className="container2">
        <div className="c2left">
          <p id="c2headingleft" className="c2heading">
            Raise Your <span className='highlight'>Website</span> to #1 on Result Page with <span className='highlight'>WebNest Media</span>
          </p>
          <p id="c2paraleft">
            Let’s take your website from hidden to high-ranking with smart SEO, search-friendly content,
            smooth structure, and grow naturally. WebNest Media is the best SEO company in Gurgaon that
            personalizes SEO strategies, clear reports, honest practices, and ongoing support focused on
            boosting your rankings and growing your business.
          </p>
          <div className="c2buttons">
            <button className='greenbutton'>Learn More</button>
            <button className='whitebutton'>Contact Us</button>
          </div>
        </div>
        <div className="c2right">
          <img src={c2_image} alt="" />
        </div>
      </div>
      <div className="container3">
        <p style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>The no.1 SEO Service</p>
        <p style={{ color: '#4CAF50', fontSize: 32, fontWeight: 600 }}>Your success is our mission</p>
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          We combine on page SEO, off page SEO and technical SEO to scale supply chain solutions and accelerate growth.

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
        <h2 className="trust-heading">
          Why Businesses Trust <span className="highlight">Webnest Media</span> for SEO?
        </h2>
        <p className="trust-subheading">
          Your web presence can be made or broken by your choice of SEO partner. At <span className="highlight">Webnest Media</span>, we reject formula approaches and false promises. We believe in real results, honest work, and long-term success.
        </p>
        <div className="c4_cards">
          {trustData.map((item, index) => (
            <div className="c4_card" key={index}>
              <h3>
                <span className="card-number">{index + 1}.</span> {item.title}
              </h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container5">
        <p className="service-label" style={{ fontSize: 20, fontWeight: 400 }}>Our Services</p>
        <h2 className="process-heading">
          Proven <span className="highlight">SEO Process</span>
        </h2>
        <div className="seo-steps">
          {[
            {
              step: "01",
              title: "Local SEO",
              text: "As the best local SEO agency, we help connect your business with people searching nearby—boosting visibility, calls, visits, and trust where it matters most.",
              icon: "📍",
            },
            {
              step: "02",
              title: "Organic SEO",
              text: "Our organic SEO services improve your content, keywords, and site structure to help your website rank higher and achieve steady, long-term growth.",
              icon: "🌱",
            },
            {
              step: "03",
              title: "Social Media Marketing",
              text: "By interacting with consumers on channels they use on a daily basis, social media marketing increases sales, promotes your brand, and engages audiences.",
              icon: "📢",
            },
            {
              step: "04",
              title: "PPC Advertising",
              text: "Our PPC advertising service drives instant traffic and leads by placing your business at the top of search results with targeted paid campaigns.",
              icon: "💰",
            },
            {
              step: "05",
              title: "SEO Optimization",
              text: "SEO optimization improves your website’s visibility, boosts search rankings, and attracts organic traffic through content, keywords, and technical performance enhancements.",
              icon: "⚙️",
            },
          ].map((item, index) => (
            <div className="seo-step-card" key={index}>
              <div className="step-icon">{item.icon}</div>
              <div className="step-meta">
                <span className="step-tag">STEP</span>
                <span className="step-number">{item.step}</span>
              </div>
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
        <h2 className='text-center'>Let's address your <span className='text-black '>questions </span>today</h2>
        <div className="accordion-wrapper-columns">
          {/* Left Column */}
          <div className="accordion-column">
            <div className="accordion">
              <input type="checkbox" id="left-1" />
              <label className="accordion-label" htmlFor="left-1">
                What is Search Engine Optimization?
              </label>
              <div className="accordion-content">
                <p>
                  The practice of improving your website to rank higher on search engines like Google is known as search engine optimization, or SEO. The higher you rank, the more visible your site is—and that means more traffic, leads, and sales. If people can't find you online, you're missing out on business.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-2" />
              <label className="accordion-label" htmlFor="left-2">
                Why is SEO important for my business?
              </label>
              <div className="accordion-content">
                <p>
                  SEO is important because it helps your business get found by people searching online. By improving your website’s visibility on search engines like Google, SEO drives more organic traffic and builds trust.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-3" />
              <label className="accordion-label" htmlFor="left-3">
                What services does your SEO agency offer?
              </label>
              <div className="accordion-content">
                <p>
                  Our SEO agency offers a full range of services, including keyword research, on-page optimization, technical SEO audits, content creation, link building, local SEO, and ongoing performance tracking to help your website rank higher and attract more traffic.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-4" />
              <label className="accordion-label" htmlFor="left-4">
                How much time take to see SEO results?
              </label>
              <div className="accordion-content">
                <p>
                  SEO isn’t instant—it’s a long-term strategy. Most businesses start seeing noticeable improvements in 3 to 6 months, depending on the competition and how much work is done. The key is consistency and quality.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="left-5" />
              <label className="accordion-label" htmlFor="left-5">
                What’s the difference between SEO and paid ads (PPC)?
              </label>
              <div className="accordion-content">
                <p>
                  SEO earns you organic (free) traffic over time. Paid ads give you instant visibility, but only while you’re paying. SEO builds lasting authority and trust, while PPC offers quick wins. A smart strategy often includes both.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="accordion-column">
            <div className="accordion">
              <input type="checkbox" id="right-6" />
              <label className="accordion-label" htmlFor="right-6">
                Do I need SEO if I already run ads?
              </label>
              <div className="accordion-content">
                <p>
                  Yes! SEO and ads serve different purposes. While ads can bring short-term traffic, SEO ensures your business is discoverable in the long run—without constantly paying for clicks.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-7" />
              <label className="accordion-label" htmlFor="right-7">
                Is SEO a one-time thing or ongoing?
              </label>
              <div className="accordion-content">
                <p>
                  SEO is an ongoing process. Search engines, competitors, and user behavior all change constantly. Ongoing SEO keeps your site optimized, competitive, and visible.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-8" />
              <label className="accordion-label" htmlFor="right-8">
                How Search Engine Optimization Works?
              </label>
              <div className="accordion-content">
                <p>
                  SEO works by optimizing your website’s content, keywords, and structure so search engines can understand it better and rank it higher. The goal is to appear in front of the right audience, drive organic traffic, and build trust over time.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-9" />
              <label className="accordion-label" htmlFor="right-9">
                Can I do SEO myself?
              </label>
              <div className="accordion-content">
                <p>
                  Yes, basic SEO can be done on your own, but for long-term results and competitive keywords, working with SEO professionals often delivers better results.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="checkbox" id="right-10" />
              <label className="accordion-label" htmlFor="right-10">
                What makes Webnest Media different from other SEO companies?
              </label>
              <div className="accordion-content">
                <p>
                  WebNest Media is the best SEO agency in Gurgaon. We don’t believe in one-size-fits-all solutions. At Webnest Media, we focus on real relationships, honest work, and results that matter. Our strategies are tailored, transparent, and rooted in what your business truly needs to grow.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Seo;
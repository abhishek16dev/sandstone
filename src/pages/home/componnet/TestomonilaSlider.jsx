

import React from "react";
import "./slider.css";

import { useEffect, useState } from "react";

import SocialMediaMarketing from "../../home/resources/Socialmediamarketing.svg";
import WebDevelopment from "../../home/resources/WebDevelopment.svg";
import EmailMarketing from "../../home/resources/EmailMarketing.svg";
import maninwhite from "../../home/resources/maninwhite.svg"

// const testimonials = [
//   {
//     name: "John D., CEO of GreenTech Solutions",
//     rating: "★★★★★",
//     message: "Webnest Media transformed our online presence. After working with them on our SEO strategy, we saw a 40% increase in organic traffic within just three months. Their team truly understands digital marketing, and their custom approach has helped us reach the right audience. Highly recommended!",
//     img: "https://via.placeholder.com/40",
//   },
//   {
//     name: "Sarah L., Marketing Director at Luxe Apparel",
//     rating: "★★★★★",
//     message: "I can't say enough great things about Webnest Media. Their social media management services have taken our brand visibility to new heights. Their creative campaigns and attention to detail have made a real difference in engaging our target customers. We’ve noticed a significant increase in sales since partnering with them!",
//     img: "https://via.placeholder.com/40",
//   },
//   {
//     name: "Michael R., Founder of Fresh Foods Inc.",
//     rating: "★★★★★",
//     message: "The team at Webnest Media has been instrumental in building our online store. Their web design and development services were top-notch, and they created a site that’s easy to navigate and optimized for conversions. We’ve seen a remarkable growth in online sales and customer engagement.",
//     img: "https://via.placeholder.com/40",
//   },
//   {
//     name: "Emily T., Owner of CityFitness",
//     rating: "★★★★★",
//     message: "Webnest Media’s PPC campaigns were a game-changer for our business. They managed our Google Ads and social media ads efficiently, driving targeted traffic to our website. In just a few weeks, we saw a 25% increase in membership sign-ups. Their results speak for themselves!",
//     img: "https://via.placeholder.com/40",
//   },
//   {
//     name: " Alex P., Director of Digital Strategy at Creative Solutions",
//     rating: "★★★★★",
//     message: "Working with Webnest Media has been an absolute pleasure. Their content marketing strategy was exactly what we needed to engage our audience and drive traffic to our site. They provided actionable insights and crafted content that resonated with our potential clients. Our lead generation has skyrocketed since partnering with them.",
//     img: "https://via.placeholder.com/40",
//   },
//    {
//     name: " Alex P., Director of Digital Strategy at Creative Solutions",
//     rating: "★★★★★",
//     message: "Working with Webnest Media has been an absolute pleasure. Their content marketing strategy was exactly what we needed to engage our audience and drive traffic to our site. They provided actionable insights and crafted content that resonated with our potential clients. Our lead generation has skyrocketed since partnering with them.",
//     img: "https://via.placeholder.com/40",
//   },

// ];


const testimonials = [
  {
    name: "John D",
    sunheading: "GreenTech Solutions",
    rating: "★★★★★",
    message:
      "Webnest Media boosted our organic traffic by 40% in just three months. Their SEO expertise and tailored strategy were game-changers.",
    img: SocialMediaMarketing
  },
  {
    name: "Sarah L",
    sunheading: "Luxe Apparel",
    rating: "★★★★★",
    message:
      "Their social media campaigns have greatly increased our brand visibility and sales. A highly creative and reliable team!",
    img: WebDevelopment
  },
  {
    name: "Michael R",
    sunheading: "Foods Inc.",
    rating: "★★★★★",
    message:
      "Webnest built an intuitive, high-converting site for us. We’ve seen major growth in online sales and engagement.",
    img: EmailMarketing
  },
  {
    name: "Emily T",
    sunheading: "CityFitness",
    rating: "★★★★★",

    message:
      "Their PPC campaigns increased our sign-ups by 25%. Webnest knows how to drive results fast and efficiently.",
    img: EmailMarketing
  },
  {
    name: "Alex P",
    sunheading: "Creative Solutions",
    rating: "★★★★★",
    message:
      "Their content marketing helped us connect better with clients and drive quality leads. Great strategy and execution.",
    img: EmailMarketing
  },
  {
    name: "Alex P",
    sunheading: "Creative Solutions",
    rating: "★★★★★",
    message:
      "Working with Webnest was a pleasure. Their approach to content truly resonated with our audience and boosted lead generation.",
    img: EmailMarketing
  },
];


export default function App() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev === 0 ? 1 : 0));
        setAnimating(false);
      }, 500); // Match animation duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const cards = testimonials.slice(index * 3, index * 3 + 3);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen text-white p-10">


      <div className="max-w-6xl mx-auto">
        {/* Mobile Headings */}
        <div className="text-start xl:hidden mb-10 relative">
          <h1 className=" headingstroke">
            Every Insight Matters.
          </h1>
            <h2 className="headingstrokesecond ">
              Every Voice Fuels Us.
            </h2>

        </div>

        <div className="flex flex-col md:flex-row justify-end gap-10">
          {/* Desktop Headings */}
          <div className="max-xl:hidden  flex flex-col justify-start">
            <h1 className=" headingstroke">
              Every Insight Matters.
            </h1>
            <h2 className="headingstrokesecond ">

              Every Voice Fuels Us.
            </h2>


            <img src={maninwhite} />
          </div>

          {/* Animated Cards from Right */}
          <div
            className={`flex flex-col md:flex-row gap-10 items-center transition-all duration-500 ${animating ? "slide-out-right" : "slide-in-right"
              }`}
          >
            {/* Left Card */}
            <div className="flex flex-col items-center justify-end">
              <TestimonialCard {...cards[0]} />
            </div>

            {/* Right Column - Two stacked cards */}
            <div className="flex flex-col items-center justify-end gap-12">
              <TestimonialCard {...cards[1]} />
              <TestimonialCard {...cards[2]} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide animations from the right */}
      <style>{`
  .slide-in-right {
    animation: slideInRight 0.7s ease-in-out forwards;
    will-change: opacity, transform;
  }

  .slide-out-right {
    animation: slideOutRight 0.7s ease-in-out forwards;
    will-change: opacity, transform;
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px) translateZ(0);
    }
    to {
      opacity: 1;
      transform: translateX(0) translateZ(0);
    }
  }

  @keyframes slideOutRight {
    from {
      opacity: 1;
      transform: translateX(0) translateZ(0);
    }
    to {
      opacity: 0;
      transform: translateX(-100px) translateZ(0);
    }
  }
`}</style>

    </div>
  );
}

function TestimonialCard({ name, rating, message, img, sunheading }) {
  return (
    // <div className="speech-bubble w-80 bg-gray-700 p-4 rounded-xl shadow-lg ">
    <div
  className="speech-bubble w-80 bg-gray-700 p-4 rounded-xl shadow-md"
  style={{
    boxShadow: '0 4px 8px rgba(128, 128, 128, 2)',
  }}
>
      <div className="flex items-center gap-4 mb-3">
        <div className="w-[100px] h-[100px]">
          <img src={img} className="rounded-full w-full h-full object-cover" alt={name} />
        </div>

        <div>
          <p className="font-semibold">{name}</p>
          <p className="font-normal"> {sunheading} </p>
          <p className="text-sm">{rating}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed">{message}</p>
    </div>
  );
}


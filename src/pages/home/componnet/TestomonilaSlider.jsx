


import React from "react";
import "./slider.css";

import { useEffect, useState } from "react";

import SocialMediaMarketing from "../../home/resources/Socialmediamarketing.svg";
import WebDevelopment from "../../home/resources/WebDevelopment.svg";
import EmailMarketing from "../../home/resources/EmailMarketing.svg";
import maninwhite from "../../home/resources/maninwhite.svg";

const testimonials = [
  {
    name: "John D",
    sunheading: "GreenTech Solutions",
    rating: "★★★★★",
    message:
      "Webnest Media boosted our organic traffic by 40% in just three months. Their SEO expertise and tailored strategy were game-changers.",
    img: SocialMediaMarketing,
  },
  {
    name: "Sarah L",
    sunheading: "Luxe Apparel",
    rating: "★★★★★",
    message:
      "Their social media campaigns have greatly increased our brand visibility and sales. A highly creative and reliable team!",
    img: WebDevelopment,
  },
  {
    name: "Michael R",
    sunheading: "Foods Inc.",
    rating: "★★★★★",
    message:
      "Webnest built an intuitive, high-converting site for us. We’ve seen major growth in online sales and engagement.",
    img: EmailMarketing,
  },
  {
    name: "Emily T",
    sunheading: "CityFitness",
    rating: "★★★★★",
    message:
      "Their PPC campaigns increased our sign-ups by 25%. Webnest knows how to drive results fast and efficiently.",
    img: EmailMarketing,
  },
  {
    name: "Alex P",
    sunheading: "Creative Solutions",
    rating: "★★★★★",
    message:
      "Their content marketing helped us connect better with clients and drive quality leads. Great strategy and execution.",
    img: EmailMarketing,
  },
  {
    name: "Alex P",
    sunheading: "Creative Solutions",
    rating: "★★★★★",
    message:
      "Working with Webnest was a pleasure. Their approach to content truly resonated with our audience and boosted lead generation.",
    img: EmailMarketing,
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
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const cards = testimonials.slice(index * 3, index * 3 + 3);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen text-white px-4 py-10 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Headings */}
        <div className="text-start xl:hidden mb-10">
          <h1 className="headingstroke">Every Insight Matters.</h1>
          <h2 className="headingstrokesecond">Every Voice Fuels Us.</h2>
        </div>

        <div className="flex flex-col xl:flex-row justify-end gap-10">
          <div className="hidden xl:flex flex-col justify-start w-full xl:w-1/2">
            <h1 className="headingstroke">Every Insight Matters.</h1>
            <h2 className="headingstrokesecond">Every Voice Fuels Us.</h2>
            <img src={maninwhite} className="w-full h-auto object-contain mt-6" alt="Description" />
          </div>

          <div
            className={`flex flex-col md:flex-row gap-10 items-center transition-all duration-500 ${
              animating ? "slide-out-right" : "slide-in-right"
            } w-full xl:w-1/2`}
          >
            <div className="flex flex-col items-center justify-end w-full md:w-1/2">
              <TestimonialCard {...cards[0]} />
            </div>

            <div className="flex flex-col items-center justify-end gap-6 w-full md:w-1/2">
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
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100px);
          }
        }
      `}</style>
    </div>
  );
}

function TestimonialCard({ name, rating, message, img, sunheading }) {
  return (
    <div
      className="w-full max-w-sm bg-[#409338] p-6 rounded-xl shadow-md"
      style={{ boxShadow: "0 4px 8px rgba(128, 128, 128, 0.5)" }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-[70px] h-[70px]">
          <img src={img} className="rounded-full w-full h-full object-cover" alt={name} />
        </div>
        <div>
          <p className="font-semibold text-[16px]">{name}</p>
          <p className="text-sm">{sunheading}</p>
          <p className="text-xs">{rating}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed">{message}</p>
    </div>
  );
}

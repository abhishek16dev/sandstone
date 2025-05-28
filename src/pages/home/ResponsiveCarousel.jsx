
import React, { useState, useEffect, useRef } from 'react';
import { FaSquareArrowUpRight } from "react-icons/fa6";
import "./slider.css"


const ImageSlider = ({ slides, autoSlideInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Clear any existing interval
    clearInterval(intervalRef.current);
    // Start new interval
    intervalRef.current = setInterval(goToNext, autoSlideInterval);

    // Cleanup on unmount or when interval changes
    return () => clearInterval(intervalRef.current);
  }, [autoSlideInterval]); // Only restart if interval changes

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="relative h-80 sm:h-[470px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out flex items-center ${
              index === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              backgroundColor: 'white',
              borderRadius: '0.5rem',
            }}
          >
            {/* Left: Image */}
            <div className="w-1/2 h-full p-6 flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.Heading}
                className="object-contain rounded-lg max-h-[400px] w-full"
              />
            </div>

            {/* Right: Content */}
            <div className="w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4 text-[#409338]">{slide.Heading}</h2>
              <p className="mb-6 text-lg text-[#4D4D4D]">{slide.Subheading}</p>
              <p className="text-[15px] text-[black]  pr-[40px]">{slide.para}</p>
              {slide.buttonText && (
                <button className="px-5 py-3 bg-[#409338] mt-[30px] mb-[10px] text-white rounded text-[13px]  transition flex gap-[5px] items-center">
                 
                 <span className="animate-bounce-x">
    <FaSquareArrowUpRight />
  </span>
  &nbsp;
                  <span> {slide.buttonText}</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Left nav */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-center z-50">
        <button
          onClick={() => {
            goToPrevious();
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(goToNext, autoSlideInterval);
          }}
          className="bg-slate-100 p-2 mx-3 rounded-3xl hover:bg-slate-300 transition"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Right nav */}
      <div className="absolute inset-y-0 right-0 flex items-center justify-center z-50">
        <button
          onClick={() => {
            goToNext();
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(goToNext, autoSlideInterval);
          }}
          className="bg-slate-100 p-2 mx-3 rounded-3xl hover:bg-slate-300 transition"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;



// export default ImageSlider;
import React, { useState, useEffect, useRef } from 'react';
import { FaSquareArrowUpRight } from "react-icons/fa6";
import "./slider.css";

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
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNext, autoSlideInterval);
    return () => clearInterval(intervalRef.current);
  }, [autoSlideInterval]);

  return (
    <div className="relative w-full mx-auto overflow-hidden transparenbody">
      <div className="relative h-[400px] sm:h-[470px] md:h-[520px] max-md:h-[550px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out flex flex-col sm:flex-row items-center ${
              index === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              // backgroundColor: 'white',
              borderRadius: '0.5rem',
            }}
          >
            {/* Left: Image */}
            <div className="w-full sm:w-1/2 h-60 sm:h-full p-4 sm:p-6 flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.Heading}
                className="object-contain rounded-lg max-h-[250px] sm:max-h-[400px] w-full"
              />
            </div>

            {/* Right: Content */}
            <div className="w-full sm:w-1/2 p-4 sm:p-8">
              <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4 text-[#409338] max-md:text-center">{slide.Heading}</h2>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg text-[#4D4D4D]  max-md:text-center">{slide.Subheading}</p>
              <p className="text-sm sm:text-[15px] text-[black] pr-0 sm:pr-[40px]  max-md:text-center">{slide.para}</p>
              {slide.buttonText && (
                <div className='max-md:flex max-md:items-center  max-md:justify-center'>
                <button className="px-4 sm:px-5 py-2 sm:py-3 bg-[#409338] mt-5 mb-3 text-white rounded text-[12px] sm:text-[13px] transition flex gap-[5px] items-center max-md:justify-center">
                  <span className="animate-bounce-x">
                    <FaSquareArrowUpRight />
                  </span>
                  <span>{slide.buttonText}</span>
                </button>

                  </div>
              
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Left nav */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-4 flex items-center justify-center z-50">
        <button
          onClick={() => {
            goToPrevious();
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(goToNext, autoSlideInterval);
          }}
          className="bg-slate-100 p-2 mx-1 sm:mx-3 rounded-3xl hover:bg-slate-300 transition"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-black"
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
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4 flex items-center justify-center z-50">
        <button
          onClick={() => {
            goToNext();
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(goToNext, autoSlideInterval);
          }}
          className="bg-slate-100 p-2 mx-1 sm:mx-3 rounded-3xl hover:bg-slate-300 transition"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-black"
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

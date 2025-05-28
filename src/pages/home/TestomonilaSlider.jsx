import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef(null);
//   const [dragStartX, setDragStartX] = useState(null);
//   const [dragging, setDragging] = useState(false);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? data.length - 1 : prevIndex - 1
//     );
//   };

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(slideInterval);
  }, []);

  // Handle drag start
//   const handleDragStart = (e) => {
//     setDragging(true);
//     setDragStartX(e.clientX || e.touches[0].clientX);
//   };

  // Handle drag end
//   const handleDragEnd = (e) => {
//     if (!dragging) return;

//     const dragEndX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
//     const dragDistance = dragEndX - dragStartX;

//     if (dragDistance > 50) {
//       goToPrevious();
//     } else if (dragDistance < -50) {
//       goToNext();
//     }

//     setDragging(false);
//     setDragStartX(null);
//   };

  // Prevent default touch actions to avoid scrolling
//   const handleTouchMove = (e) => {
//     if (dragging) {
//       e.preventDefault();
//     }
//   };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


  return (
    <div 
      className="relative w-full max-w-4xl px-4 pb-10 mx-auto lg:rounded-lg bg-white/70"
      style={{ border: '1px solid #5c945c' }}
    >
    <Slider {...settings}>
      {data.map((slideContent, index) => (
          <div
            key={index}
            className={`flex items-center justify-center}`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <div className="md:flex p-7 w-full mx-auto cursor-pointer border-[#5c945c] bg-white/70 rounded-[100%]">
             
              <img
                src={slideContent.img}
                alt=""
                className="w-[150px] h-[150px] mx-auto object-contain rounded-full"
              />

              <div className="italic text-[#5c945c] text-center my-auto md:pl-10 max-md:mt-5">
                {slideContent.text}
                <br />
                <span>{slideContent.person}</span>
              </div>
            </div>
          </div>
        ))}

    </Slider>
    </div>
  );
};

export default ImageSlider;


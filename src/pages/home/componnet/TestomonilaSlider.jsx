// import React, { useState, useEffect, useRef } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ImageSlider = ({ images, data }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === data.length - 1 ? 0 : prevIndex + 1
//     );
//   };



//   // Auto-slide functionality
//   useEffect(() => {
//     const slideInterval = setInterval(goToNext, 5000);

//     // Cleanup the interval when the component is unmounted
//     return () => clearInterval(slideInterval);
//   }, []);


//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };


//   return (
//     <div 
//       className="relative w-full max-w-4xl px-4 pb-10 mx-auto lg:rounded-lg bg-white/70"
//       style={{ border: '1px solid #5c945c' }}
//     >
//     <Slider {...settings}>
//       {data.map((slideContent, index) => (
//           <div
//             key={index}
//             className={`flex items-center justify-center}`}
//             style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
//           >
//             <div className="md:flex p-7 w-full mx-auto cursor-pointer border-[#5c945c] bg-white/70 rounded-[100%]">
             
//               <img
//                 src={slideContent.img}
//                 alt=""
//                 className="w-[150px] h-[150px] mx-auto object-contain rounded-full"
//               />

//               <div className="italic text-[#5c945c] text-center my-auto md:pl-10 max-md:mt-5">
//                 {slideContent.text}
//                 <br />
//                 <span>{slideContent.person}</span>
//               </div>
//             </div>
//           </div>
//         ))}

//     </Slider>
//     </div>
//   );
// };

// export default ImageSlider;



import React from "react";
import "./slider.css";



export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Every Insight Matters.</h1>
        <h2 className="text-3xl text-center font-semibold mb-12">Every Voice Fuels Us.</h2>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          {/* Left Column - Card 1 */}
          <div className="flex flex-col items-center">
            <div className="speech-bubble w-80">
              <div className="flex items-center gap-4 mb-3">
                <img src="https://via.placeholder.com/40" className="rounded-full" alt="Abhishek" />
                <div>
                  <p className="font-semibold">Abhishek</p>
                  <p className="text-sm">★★★★★</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              </p>
            </div>
          </div>

          {/* Right Column - Card 2 and Card 3 */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="speech-bubble w-80">
              <div className="flex items-center gap-4 mb-3">
                <img src="https://via.placeholder.com/40" className="rounded-full" alt="Olivia Wilson" />
                <div>
                  <p className="font-semibold">Olivia Wilson</p>
                  <p className="text-sm">★★★★★</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              </p>
            </div>

            <div className="speech-bubble w-80">
              <div className="flex items-center gap-4 mb-3">
                <img src="https://via.placeholder.com/40" className="rounded-full" alt="Howard Ong" />
                <div>
                  <p className="font-semibold">Howard Ong</p>
                  <p className="text-sm">★★★★★</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

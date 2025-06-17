import React, { useState } from 'react';
import bannerimage from './images/bannerbg.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Bannercomponent = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-transparent">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerimage}
          alt="Interior"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* Overlay appears only when image is loaded */}
      {loaded && (
        <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500"></div>
      )}

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center items-start h-full px-8 max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-white text-[8.2rem] max-lg:text-[6rem] font-extrabold leading-[96%] mb-4">
          Modern Interior <br /> Design Studio
        </h1>
        <p className="text-white text-[1.6rem] max-w-[500px] mb-6 font-normal leading-[120%]">
          Redefining interiors in Bangalore with creativity and detail for functional living and working spaces.
        </p>
        <Link to="/contact">
          <button className="bg-[#E3D27D] text-black px-12 py-6 rounded transition">
            GET STARTED
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Bannercomponent;

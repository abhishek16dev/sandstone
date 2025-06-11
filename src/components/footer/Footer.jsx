

import React from 'react';
import FooterSection from './FooterSection';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo.png';
// import WhatsAppIcon from './WhatsappStickyIcon';
import { Link } from 'react-router-dom';

import {  FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
   <footer className="bg-[#1A1D1C] text-white p-[40px] relative">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Top Section */}
        <div className="flex flex-col items-center max-sm:items-start lg:flex-row justify-between gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            < Link to={"/"} >
              <img src={logo} alt="WebNest Media Logo" className="w-[90px] h-[90px]" />
            </Link>

          </div>

          {/* Social Media */}
          <div className=" flex flex-col items-center  max-sm:items-start   lg:text-left gap-[10px]">
            <h4 className="text-lg font-semibold mb-2 hover:text-[#25D366] transition-colors duration-300">
              Connect on Social Media
            </h4>
            <div className="flex justify-center lg:justify-start space-x-4 text-xl">
              <a
                href="https://www.facebook.com/profile.php?id=61576616442478"
                target="_blank"
                rel="noopener noreferrer"
              >   <FaFacebookF className="hover:text-blue-500 transition-transform transform hover:scale-110 duration-300 cursor-pointer" />
              </a>
              <a
                href="https://x.com/webnestmediag?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-blue-400 transition-transform transform hover:scale-110 duration-300 cursor-pointer" />   </a>
              <a
                href="https://www.linkedin.com/company/webnest-media-group/"
                target="_blank"
                rel="noopener noreferrer"
              >    <FaLinkedinIn className="hover:text-blue-700 transition-transform transform hover:scale-110 duration-300 cursor-pointer" />   </a>
              {/* <a
                href="https://www.instagram.com/webnestmediagroup/"
                target="_blank"
                rel="noopener noreferrer"
              >    <FaYoutube className="hover:text-red-600 transition-transform transform hover:scale-110 duration-300 cursor-pointer" />   </a>
              */}
             
              <a
                href="https://www.instagram.com/webnestmediagroup/"
                target="_blank"
                rel="noopener noreferrer"
              >   <FaInstagram className="hover:text-pink-500 transition-transform transform hover:scale-110 duration-300 cursor-pointer" />   </a>
            </div>
          </div>

          {/* Address & Email */}
          <div className="flex  flex-col text-center  max-sm:text-start lg:text-right">
            <div>
              <h4 className="text-lg font-semibold mb-2">Our Address</h4>
              <p className="text-sm mb-4">
                1st Floor Orchid Business Park,<br />
                Near Subhash Chowk, Sector 48,<br />
                Gurugram, Haryana 122004
              </p>
            </div>

          </div>

          <div>



            <h4 className="text-lg font-semibold mb-2">Email Us</h4>
            <p> <a
              className="text-sm text-blue-300 hover:underline"
              href="mailto:info@webnestmedia.com"
            >
              info@webnestmedia.com
            </a></p>

            < Link to={"/privacy-policy"}  >
              <p className='text-sm text-[white] hover:underline'>Privacy Policy</p>
            </Link>
          </div>
        </div>

        <svg width="100%" height="2">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
        </svg>


        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <FooterSection
            title="Digital Marketing"
            items={[
              'Search Engine Marketing',
              'Search Engine Optimization',
              'Social Media Marketing',
              'Web Development',
              'Content Marketing',
              'Affiliate Marketing',
            ]}
          />
          <FooterSection
            title="Branding"
            items={[
              'Brochure Designing',
              'Logo Designing',
              'Packaging Designing',
            ]}
          />
          <FooterSection
            title="Others"
            items={[
              'Analytics & Reporting',
              'Conversion Rate Optimization',
              'Programmatic Marketing',
            ]}
          />
          <FooterSection
            title="Solutions"
            items={[
              'Brand Strategy',
              'Lead Generation',
              'Customer Retention',
              'Digital Transformation',
              'Market Research & Insights',
              'Omnichannel Marketing',
            ]}
          />
          <FooterSection
            title="Promotions"
            items={[
              'Email Marketing',
              'Mobile Marketing',
              'Influencer Marketing',
              'SMS Marketing',
            ]}
          />
        </div>

        {/* Bottom Text */}
        <svg width="100%" height="2">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
        </svg>
        <div className="text-center pt-4 text-sm text-gray-400">
          <p>© 2025 WebNest Media. All rights reserved.</p>
          <p>Developed by WebNest Media</p>
        </div>
      </div>

      {/* WhatsApp Sticky Icon */}
      {/* <div className="fixed bottom-4 right-4 z-50">
        <WhatsAppIcon fixed={false} size="70px" />
      </div> */}
           <div className="fixed bottom-[20px] right-6 flex flex-col items-center gap-4 z-[99999999999999]">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919696964606" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Phone */}
        <a
          href="tel:+919696964606" // Replace with your phone number
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300 ring-animation"
        >
          <FaPhoneAlt size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

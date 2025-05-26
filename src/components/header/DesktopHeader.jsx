import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import "./headerStyle.css"

import logo from "../../assets/logo.jpg"
const menuItems = [
  {
    title: "Home",

  },

  {
    title: "About Us",


  },
  {
    title: "Solutions",
    subItems: [
      "Brand Strategy",
      "Lead Generation",
      "Customer Retention",
      "Digital Transformation",
      "Market Research & Insights",
      "Omnichannel Marketing"
    ],
  },
  {
    title: "Digital Marketing",
    subItems: ["Search Engine Marketing (SEM)", "Search Engine Optimization (SEO)", "Social Media Marketing (SMM)", "Web Development", "Content Marketing", "Affiliate Marketing"],
  },
  {
    title: "Promotions",
    subItems: ["Mobile Marketing", "Influencer Marketing", "SMS Marketing", "Email Marketing"],
  },
  {
    title: "Contact",
    subItems: ["Careers", "Contact", "Insight", "Blogs"],
  },



];

export default function DesktopHeader() {



  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isParentHovered, setIsParentHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const dropdownRefs = useRef([]);

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleMouseEnterParent = (index) => {
    setIsParentHovered(true);
    setDropdownOpen(index); // Open the dropdown when hovering over the parent
  };

  const handleMouseLeaveParent = () => {
    if (!isDropdownHovered) {
      //setDropdownOpen(null); // Only close if the dropdown isn't being hovered
    }
    setIsParentHovered(false);
  };

  const handleMouseEnterDropdown = () => {
    setIsDropdownHovered(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsDropdownHovered(false);
    if (!isParentHovered) {
      setDropdownOpen(null); // Close if neither parent nor dropdown are hovered
    }
  };

  return (
    <header className=" fixed top-0  left-0  z-[9999]  bg-[white] w-[100%]  ">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 pl-[40px] pr-[40px] p-[10px]">
        <img src={logo} alt="WebNest Media Logo" className="w-[60px] h-[60px] rounded-full cursor-pointer" />
        <nav className="flex items-center gap-5 text-sm">
          {menuItems.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (dropdownRefs.current[index] = el)}
              className="relative z-[9999]"

            >
              <button
                aria-haspopup="true"
                aria-expanded={dropdownOpen === index}
                onClick={() => handleDropdownToggle(index)}
                className="flex items-center p-[10px] gap-1 text-[14px] cursor-pointer font-normal leading-[21px]  hover:text-[#43b649]  bg-transparent border-0 outline-none focus:outline-none"
                onMouseEnter={() => handleMouseEnterParent(index)}  // Handle hover on the parent
                onMouseLeave={handleMouseLeaveParent}

              >
                {item.title}

                {/* <ChevronDown size={16} className="pl-[10px]" /> */}

                {item.subItems && item.subItems.length > 0 && (
                  <ChevronDown size={25} className="pl-[10px]" />
                )}

              </button>

              {dropdownOpen === index && (

                <div className="absolute z-[9999]  w-[180px] left-0 top-[40px] bg-[white] borderradius shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1)]
                transition-all duration-300 ease-out opacity-200 translate-z-0
                "

                  onMouseEnter={handleMouseEnterDropdown}  // Handle hover on the dropdown
                  onMouseLeave={handleMouseLeaveDropdown}
                >


                  {item.subItems && item.subItems.length > 0 && (
                    <ul>
                      {item.subItems.map((sub, idx) => (
                        <li
                          key={idx}
                          className={`pb-[10px] pl-[10px] pt-[5px] cursor-pointer hover:text-[#43b649] text-[13px] hover:bg-gray-100 ${idx === 0 ? "rounded-tl-md rounded-tr-md" : ""
                            } ${idx !== item.subItems.length - 1 ? "border-b border-gray" : ""}`}
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}



                </div>
              )}
            </div>
          ))}

        </nav>
        <div className="flex gap-[10px]">
          <button className=" bookdemo px-[15px] py-[10px] text-[#43b649] rounded-md border   hover:bg-[#f0fdf3]  transition-colors duration-300    cursor-pointer">
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  );
}

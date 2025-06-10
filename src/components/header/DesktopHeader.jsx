import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import "./headerStyle.css"

import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  {
    title: "Digital Marketing",
    subItems: [
      { title: "Search Engine Optimization", path: "/search-engine-optimization" },
      { title: "Search Engine Marketing", path: "/search-engine-marketing" },

      { title: "Social Media Marketing", path: "/social-media-marketing" },
      { title: "Web Development", path: "/web-development" },
      { title: "Content Marketing", path: "/content-marketing" },
      { title: "Affiliate Marketing", path: "/affiliate-marketing" }
    ]
  },

  {
    title: "Solutions",
    subItems: [
      { title: "Online Reputation Managment", path: "/online-reputation-managment" },

      { title: "Brand Strategy", path: "/brand-strategy" },
      { title: "Lead Generation", path: "/lead-generation" },
      { title: "Customer Retention", path: "/customer-retention" },
      { title: "Digital Transformation", path: "/digital-transformation" },
      { title: "Market Research & Insights", path: "/market-research" },

    ]
  },



  {
    title: "Promotions",
    subItems: [
      { title: "Mobile Marketing", path: "/mobile-marketing" },
      { title: "Influencer Marketing", path: "influencer-marketing" },
      { title: "SMS Marketing", path: "sms-marketing" },
      { title: "Email Marketing", path: "email-marketing" }
    ]
  },

  {
    title: "Contact",
    subItems: [
      { title: "Careers", path: "careers" },
      { title: "Contact", path: "/contact" },
      { title: "Insight", path: "insight" },
      { title: "Blogs", path: "blogs" }
    ]
  }
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


  const handleDropdownItemClick = () => {
  setDropdownOpen(null);
};

const navRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target)
    ) {
      setDropdownOpen(null); // Close dropdown
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  return (
    <header className=" fixed top-0  left-0   z-[9999]  bg-[white] w-[100%]  border-b-[1px] border-[#9ac496]  ">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 pl-[40px] pr-[40px] p-[10px] max-xl:p-[0px] max-xl:pl-[20px] max-xl:pr-[20px]">
        <div className="flex items-center gap-[10px]">
          <Link to={"/"}>
            <img src={logo} alt="WebNest Media Logo" className="w-[80px] h-[80px] rounded-full cursor-pointer" />
          </Link>

          <div className=" items-center flex-d">
            <h6 className="text-[#5c945c] font-bold  ">WebNest Media</h6>
            <p className="text-[black] text-[9px]"> ( Nest your brand in the web of success )
            </p>
          </div>

        </div>
        <nav ref={navRef} className="flex items-center gap-5 text-sm max-xl:gap-1">
          {menuItems.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (dropdownRefs.current[index] = el)}
              className="relative z-[9999]"

            >
              <Link to={item.path} className="block w-full"
                onClick={handleDropdownItemClick}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen === index}
                  onClick={() => handleDropdownToggle(index)}
                  className="flex items-center p-[10px] max-xl:p-[3px] gap-1 text-[14px] cursor-pointer font-normal leading-[21px]  hover:text-[#43b649]  bg-transparent border-0 outline-none focus:outline-none"
                  onMouseEnter={() => handleMouseEnterParent(index)}  // Handle hover on the parent
                  onMouseLeave={handleMouseLeaveParent}
                

                >

                  {item.title}


                  {/* <ChevronDown size={16} className="pl-[10px]" /> */}

                  {item.subItems && item.subItems.length > 0 && (
                    <ChevronDown size={25} className="pl-[10px]" />
                  )}

                </button>

              </Link>

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
                        <Link to={sub.path} className="block w-full"   onClick={handleDropdownItemClick}>
                          <li
                            key={idx}
                            className={`pb-[10px] pl-[10px] pt-[5px] cursor-pointer hover:text-[#43b649] text-[13px] hover:bg-gray-100 ${idx === 0 ? "rounded-tl-md rounded-tr-md" : ""
                              } ${idx !== item.subItems.length - 1 ? "border-b border-gray" : ""}`}
                          >
                            {/* {sub} */}

                            {sub.title}

                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}



                </div>
              )}
            </div>
          ))}

        </nav>
        <div className="flex gap-[10px]">
          <button className=" bookdemo px-[15px] py-[10px] text-[white] bg-[#9bc394] rounded-md border   hover:bg-[#9bc394]  transition-colors duration-300    cursor-pointer">
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  );
}

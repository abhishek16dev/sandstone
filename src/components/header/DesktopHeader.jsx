import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

import logo from "../../assets/logo.jpg"
const menuItems = [
  {
    title: "Solutions",
    subItems: [
      "B2B Ecommerce",
      "Field Sales Management",
      "Simplified Order Management",
      "Exhibition Lead Management Tool",
    ],
  },
  {
    title: "Industries",
    subItems: ["Retail", "FMCG", "Distribution", "Healthcare"],
  },
  {
    title: "Resources",
    subItems: ["Blog", "Guides", "Webinars"],
  },
  {
    title: "Company",
    subItems: ["About Us", "Careers", "Contact"],
  },
];

export default function DesktopHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRefs = useRef([]);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownOpen !== null &&
        dropdownRefs.current[dropdownOpen] &&
        !dropdownRefs.current[dropdownOpen].contains(e.target)
      ) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <header className="w-full border-b bg-white  bg-[#9ac496] ">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 pl-[40px] pr-[40px] p-[10px]">
        <img src={logo} alt="WebNest Media Logo" className="w-[60px] h-[60px] rounded-full" />
        <nav className="flex items-center gap-5 text-sm">
          {menuItems.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (dropdownRefs.current[index] = el)}
              className="relative z-[9998]"
              
            >
              <button
                aria-haspopup="true"
                aria-expanded={dropdownOpen === index}
                onClick={() => handleDropdownToggle(index)}
                className="flex items-center p-[10px] gap-1 text-[17px] cursor-pointer font-normal leading-[21px] text-gray-800 text-[#374151] bg-transparent border-0 outline-none focus:outline-none"
            
            >
                {item.title}
                <ChevronDown size={16} />
              </button>

              {dropdownOpen === index && (
               
                 <div className="absolute z-[9999]  w-[180px] left-0 top-full mt-[20px] bg-white rounded-md shadow-[0_4px_10px_-2px_rgba(0,0,0,.1)] ">
                 
                  <ul>
                    {item.subItems.map((sub, idx) => (
                      <li
                        key={idx}
                   
                       className={`pb-[10px] pl-[10px] pt-[5px]  cursor-pointer  text-[#727176] text-sm hover:bg-gray-100 ${idx === 0 ? "rounded-tl-md rounded-tr-md" : ""
                          } ${idx !== item.subItems.length - 1 ? "border-b border-gray-100" : " border-b border-gray-100"}`}
                       >
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <a href="#" className="text-[17px] font-medium hover:text-indigo-700">
            Contact Us
          </a>
        </nav>

{/*     
        <div className="flex gap-[10px]">
          <button className="px-[10px] py-[6px] text-[#43b649] rounded-md border border-[#43b649] hover:bg-[#f0fdf4] transition">
            Log in
          </button>
          <button className="px-[10px] py-[6px] text-[#43b649] rounded-md border border-[#43b649] hover:bg-[#f0fdf4] transition">
            Book a Demo
          </button>
        </div> */}
      </div>
    </header>
  );
}

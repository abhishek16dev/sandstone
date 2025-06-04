

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";
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
      { title: "Content Marketing", path: "/digital-marketing/content-marketing" },
      { title: "Affiliate Marketing", path: "/digital-marketing/affiliate-marketing" }
    ]
  },

  {
    title: "Solutions",
    subItems: [
      { title: "Brand Strategy", path: "/brand-strategy" },
      { title: "Lead Generation", path: "/lead-generation" },
      { title: "Customer Retention", path: "/customer-retention" },
      { title: "Digital Transformation", path: "/digital-transformation" },
      { title: "Market Research & Insights", path: "/market-research" },
    { title: "Online Reputation Managment", path: "/online-reputation-managment" },
    ]
  },


  {
    title: "Promotions",
    subItems: [
      { title: "Mobile Marketing", path: "/promotions/mobile" },
      { title: "Influencer Marketing", path: "/promotions/influencer" },
      { title: "SMS Marketing", path: "/promotions/sms" },
      { title: "Email Marketing", path: "/promotions/email" }
    ]
  },


  {
    title: "Contact",
    subItems: [
      { title: "Careers", path: "/contact/careers" },
      { title: "Contact", path: "/contact" },
      { title: "Insight", path: "/contact/insight" },
      { title: "Blogs", path: "/contact/blogs" }
    ]
  }
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleLinkClick = () => {
    setOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header className="w-full sticky top-0 left-0 bg-[white]   z-[999999]">
      <div className="flex justify-between items-center pl-[40px] pr-[40px] p-[10px]">
        <div className="flex items-center gap-[10px]">
          <Link to="/">
            <img src={logo} alt="WebNest Media Logo" className="w-[80px] h-[80px] rounded-full cursor-pointer" />
          </Link>
          <div>
            <h6 className="text-[#5c945c] font-bold">WebNest Media</h6>
            <p className="text-[grey] text-[10px]">(Nest your brand in the web of success)</p>
          </div>
        </div>
        <button onClick={() => setOpen(!open)} className="text-[#9ac496]  z-[10000] relativeborder-[#9ac496]">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 space-y-4 pl-[20px]">
          {menuItems.map((item, index) => (
            <div key={item.title}>
              <div className="flex items-center p-[10px] gap-1 text-[16px] cursor-pointer font-normal leading-[21px] text-[#374151] bg-transparent border-0 outline-none">
                {item.subItems ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center gap-1 bg-transparent border-0 outline-none"
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${dropdownOpen === index ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link to={item.path} onClick={handleLinkClick} className="block w-full">
                    {item.title}
                  </Link>
                )}
              </div>

              {dropdownOpen === index && item.subItems && (
                <ul className="ml-4 mt-1 space-y-2">
                  {item.subItems.map((sub) => (
                    <li
                      key={sub.title}
                      className="pb-[10px] pl-[10px] pt-[5px] cursor-pointer text-[#374151] text-[14px] font-normal hover:text-[#43b649] border-b border-gray-100 last:border-0"
                    >
                      <Link to={sub.path} onClick={handleLinkClick} className="block w-full">
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="flex gap-[10px] hidden">
            <button className="px-[10px] py-[6px] text-[#43b649] rounded-md border border-[#43b649] hover:bg-[#f0fdf4] transition">
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
  {
    title: "About Us",


  },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <header className="w-full fixed bg-[white]   bg-white px-4 py-3 md:hidden z-[999]  ">
      <div className="flex justify-between items-center pl-[40px] pr-[40px] p-[10px]">

        <img src={logo} alt="WebNest Media Logo" className="w-[45px] h-[45px] rounded-full" />

        <button onClick={() => setOpen(!open)} className="text-[#9ac496] border-[#9ac496]">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 space-y-4 pl-[20px] ">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(index)}

                className="flex items-center p-[10px] gap-1 text-[16px] cursor-pointer font-normal leading-[21px]   text-[#374151] bg-transparent border-0 outline-none focus:outline-none"


              >
                {item.title}


                {item.subItems && item.subItems.length > 0 && (
                  <ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen === index ? "rotate-180" : ""}`} />
                )}
              </button>

              {dropdownOpen === index && (

                <ul className="ml-4 mt-1 space-y-2">

                  {item.subItems.map((sub, idx) => (

                    <li
                      key={idx}
                      className={`pb-[10px] pl-[10px] pt-[5px] cursor-pointer text-[#374151]  text-[14px] font-normal hover:text-[#43b649] ${idx === 0 ? "rounded-tl-md rounded-tr-md" : ""
                        } ${idx !== item.subItems.length - 1 ? "border-b border-gray-100" : ""}`}
                    >
                      {sub}
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

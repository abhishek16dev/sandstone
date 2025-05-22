import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <header className="w-full border-b bg-white px-4 py-3 md:hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold text-green-600">Web</span>
          <span className="text-2xl font-semibold text-green-600">Nest</span>
        </div>
        <button onClick={() => setOpen(!open)} className="text-gray-700">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 space-y-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(index)}
                // className="w-full flex justify-between items-center text-left text-gray-800 font-medium py-2"
                  className="flex items-center p-[10px] gap-1 text-[17px] cursor-pointer font-normal leading-[21px] text-gray-800 hover:text-indigo-700 bg-transparent border-0 outline-none focus:outline-none"
            
             
             >
                {item.title}
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${dropdownOpen === index ? "rotate-180" : ""}`}
                />
              </button>
              {dropdownOpen === index && (
                <ul className="ml-4 mt-1 space-y-2">
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
              )}
            </div>
          ))}

          <div className="flex gap-[10px] hidden">
          <button className="px-[10px] py-[6px] text-[#43b649] rounded-md border border-[#43b649] hover:bg-[#f0fdf4] transition">
            Log in
          </button>
          <button className="px-[10px] py-[6px] text-[#43b649] rounded-md border border-[#43b649] hover:bg-[#f0fdf4] transition">
            Book a Demo
          </button>
        </div>
        </div>
      )}
    </header>
  );
}

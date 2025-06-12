import { useState } from "react";
import { Menu, X } from "lucide-react"; // keeping this if you're still using lucide for menu toggle
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../../../public/sandstone.png";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" }
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="w-full sticky top-0 left-0 bg-white z-[999999]">

      <div className="flex justify-between items-center pl-[20px] pr-[20px] py-3">
        <div className="flex items-center gap-[10px]">
             <img src={logo} alt="Sabd and stone Logo" className="w-[15.6rem] h-[3.2rem] " />
              
        </div>
        <button onClick={() => setOpen(!open)} className="text-[#9ac496]">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="mt-2 pl-[20px] pr-[20px] pb-4">
          {menuItems.map((item) => (
            <div key={item.title} className="mb-3">
              <Link
                to={item.path}
                onClick={handleLinkClick}
                className="block text-[#374151] text-[16px] font-normal hover:text-[#43b649] transition-all border-b border-gray-200 pb-2"
              >
                {item.title}
              </Link>
            </div>
          ))}
          <div className="mt-4">
            <button className="px-4 py-2 bg-[#9bc394] text-white rounded-md hover:bg-[#82b280] transition-colors duration-300">
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

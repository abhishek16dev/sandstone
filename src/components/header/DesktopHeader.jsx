
import { useState, useEffect, useRef } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import "./headerStyle.css";
import logo from "../../../public/sandstone.png";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/service" },
 
  { title: "Project", path: "/project" },
   { title: "Contact Us", path: "/contact" },
];

export default function DesktopHeader() {
  const navRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="font-raleway animate-fade-in fixed top-0 left-0 z-[9999] w-full">

      <div className="bg-[black] pl-[15rem] pr-[15rem] border-b-[1px] border-[white] h-[8rem] text-[#FFFFFF] text-sm flex justify-between items-center ">

        <a href="mailto:officesandandstone@gmail.com" className="flex font-semibold items-center gap-2 hover:underline transition-all duration-300">
          <div className="w-[25px] h-[25px] rounded-full bg-[white] flex items-center justify-center">
            <MdEmail size={16} className="text-[#4F6D56]" />
          </div>
          <span className="text-[1.6rem]">officesandandstone@gmail.com</span>
        </a>

        <div className="text-lg font-bold flex items-center gap-2">
          <img src={logo} alt="Sand and Stone Logo" className="w-[15.6rem] h-[6rem] object-contain" />
        </div>

        <a href="tel:9035662976" className="flex font-semibold items-center gap-2 hover:underline transition-all duration-300">
          <div className="w-[25px] h-[25px] rounded-full bg-[white] flex items-center justify-center">
            <MdPhone size={16} className="text-[#4F6D56]" />
          </div>
          <span className="text-[1.6rem]">9035662976</span>
        </a>
      </div>

      <div className="flex bg-[black] items-center justify-center px-[2rem] py-[2rem]">
        <nav ref={navRef} className="flex items-center gap-[3.2rem]">
          {menuItems.map((item) => (
            <Link key={item.title} to={item.path} onClick={() => setDropdownOpen(null)}>
              <button className="relative pb-[0.3rem] text-[1.6rem] font-semibold leading-[2.1rem] text-white hover:text-yellow-400 transition-all duration-300 group">
                {item.title}
                <span className="absolute  inline-block left-0 bottom-[-10px]  h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </button>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

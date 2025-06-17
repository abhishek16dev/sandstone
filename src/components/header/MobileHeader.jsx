import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../../../public/sandstone.png";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/service" },
  { title: "Contact", path: "/contact" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLinkClick = () => setOpen(false);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="lg:hidden w-full sticky top-0 left-0 bg-black shadow-md z-[9999] text-white">
      {/* Header Bar */}
      <div className="flex justify-between items-center px-4 py-3">
        <img
          src={logo}
          alt="Sand and Stone Logo"
          className="w-[13rem] h-[3.5rem] object-contain"
        />
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-white focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-down Nav */}
      {open && (
        <div
          ref={menuRef}
          className="flex flex-col gap-4 px-4 pb-6 bg-black border-t border-gray-700 animate-[slideDown_0.3s_ease-out]"
        >
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              onClick={handleLinkClick}
              className="text-white text-[1.6rem] font-medium border-b border-gray-700 pb-2 hover:text-yellow-400 transition-all duration-300"
            >
              {item.title}
            </Link>
          ))}

          {/* Contact Section */}
          <div className="mt-4 text-sm space-y-2 text-white">
            <div className="flex items-center gap-2">
              <MdEmail size={16} className="text-yellow-400" />
              <a
                href="mailto:officesandandstone@gmail.com"
                className="hover:underline"
              >
                officesandandstone@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone size={16} className="text-yellow-400" />
              <a href="tel:9035662976" className="hover:underline">
                9035662976
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}

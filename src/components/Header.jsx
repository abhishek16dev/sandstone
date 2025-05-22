


// import { useState, useRef, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// const menuItems = [
//   {
//     title: "Solutions",
//     subItems: [
//       "B2B Ecommerce",
//       "Field Sales Management",
//       "Simplified Order Management",
//       "Exhibition Lead management tool",
//     ],
//   },
//   {
//     title: "Industries",
//     subItems: ["Retail", "FMCG", "Distribution", "Healthcare"],
//   },
//   {
//     title: "Resources",
//     subItems: ["Blog", "Guides", "Webinars"],
//   },
//   {
//     title: "Company",
//     subItems: ["About Us", "Careers", "Contact"],
//   },
// ];

// export default function Header() {
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const dropdownRef = useRef(null); // Reference for dropdown menu

//   const handleDropdownToggle = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };


//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(null); // Close dropdown if clicked outside
//       }
//     };


//     document.addEventListener("mousedown", handleClickOutside);


//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="w-full border-b">

//       <div className="flex items-center justify-between px-[10px] py-[6px] bg-white">

//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold text-green-600">Web</span>
//           <span className="text-2xl font-semibold text-green-600">Nest</span>
//         </div>


//         <nav className="flex items-center gap-[15px] text-sm cursor-pointer">
//           {menuItems.map((item, index) => (
//             <div key={item.title} className="relative" ref={dropdownRef}>
//               <button
//                 aria-haspopup="true"
//                 aria-expanded={dropdownOpen === index ? "true" : "false"}
//                 onClick={() => handleDropdownToggle(index)}
//                 className="flex items-center gap-1 text-[17px] cursor-pointer font-normal leading-[21px] text-gray-800 hover:text-indigo-700 bg-transparent border-0 outline-none focus:outline-none"
//               >
//                 {item.title}
//                 <ChevronDown size={16} />
//               </button>
//               {dropdownOpen === index && (
//                 <div className="absolute  w-[180px] left-0 top-full mt-[20px] bg-white rounded-md shadow-[0_4px_10px_-2px_rgba(0,0,0,.1)] z-50 ">
//                   <ul className="cursor-pointer">
//                     {item.subItems.map((sub, idx) => (
//                       <li
//                         key={idx}
//                         className={`pb-[10px] pl-[10px] pt-[5px]   text-[#727176] text-sm hover:bg-gray-100 ${idx === 0 ? "rounded-tl-md rounded-tr-md" : ""
//                           } ${idx !== item.subItems.length - 1 ? "border-b border-gray-100" : " border-b border-gray-100"}`}
//                       >
//                         {sub}
//                       </li>
//                     ))}
//                   </ul>

//                 </div>
//               )}
//             </div>
//           ))}
//           <a href="#" className="font-medium hover:text-indigo-700">
//             Contact Us
//           </a>
//         </nav>


//         <div className="flex gap-[6px]">
//               <button className="px-[10px] py-[6px] text-[#43b649] rounded-md border-2 border-[#43b649] bg-transparent cursor-pointer ">
//             Log in
//           </button>

//           <button className="px-[10px] py-[6px] text-[#43b649] rounded-md border-2 border-[#43b649] bg-transparent cursor-pointer ">
//             Book a Demo
//           </button>

//         </div>
//       </div>
//     </header>
//   );
// }



import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

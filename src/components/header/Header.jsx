import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [isMobile, setIsMobile] = useState(null); // Initially unknown

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // less than 1024 to avoid lg:hidden clash
    };

    checkMobile(); // run immediately after mount
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Wait until screen size is known
  if (isMobile === null) return null;

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

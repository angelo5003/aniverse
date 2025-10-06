"use client";

import { useBreakpointValue } from "@chakra-ui/react";
import MobileNavBar from "./MobileNavBar/MobileNavBar";
import DesktopNavbar from "./DesktopNavBar/DesktopNavbar";

const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return <>{isDesktop ? <DesktopNavbar /> : <MobileNavBar />}</>;
};

export default NavBar;

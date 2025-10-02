"use client";

import React from "react";
import { NavBarContainer } from "./NavBar.styled";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { NavBarItems } from "./NavBarItems/NavBarItems";

const NavBar: React.FC = () => {
  return (
    <NavBarContainer as="nav">
      {NavBarItems.map((navLink) => (
        <ChakraLink asChild key={navLink.href}>
          <Link href={navLink.href}>{navLink.label}</Link>
        </ChakraLink>
      ))}
    </NavBarContainer>
  );
};

export default NavBar;

"use client";

import React from "react";
import { Link as ChakraLink, List, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { NavBarItems } from "./NavBarItems/NavBarItems";
import { NavBarContainer, NavBarList, NavBarListItem } from "./NavBar.styled";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <NavBarContainer as="nav">
      <NavBarList unstyled>
        {NavBarItems.map((navLink, index) => (
          <NavBarListItem
            key={navLink.href}
            $index={index} // Position in the list (0, 1, 2, 3...)
            $count={NavBarItems.length} // Total number of items (4)
            $amplitude={18} // Curve height in pixels
            $isActive={isActive(navLink.href)}
          >
            <VStack gap={2} align="center">
              {navLink.icon && (
                <List.Indicator>
                  {navLink.icon && <navLink.icon />}
                </List.Indicator>
              )}
              <ChakraLink asChild>
                <Link href={navLink.href} aria-label={navLink.ariaLabel}>
                  {navLink.label}
                </Link>
              </ChakraLink>
            </VStack>
          </NavBarListItem>
        ))}
      </NavBarList>
    </NavBarContainer>
  );
};

export default NavBar;

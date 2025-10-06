"use client";

import React from "react";
import Link from "next/link";
import { Link as ChakraLink, List, Text, VStack } from "@chakra-ui/react";
import { NavBarItems } from "../NavBarItems/NavBarItems";
import {
  StyledNavBarContainer,
  StyledNavBarListContainer,
  StyledNavBarListItem,
} from "./MobileNavBar.styled";
import { usePathname } from "next/navigation";
import { StyledActiveLinkLabelContainer } from "@/components/shared/Navbar/MobileNavBar/MobileNavBar.styled";

const MobileNavBar: React.FC = () => {
  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;
  const activeNavItem = NavBarItems.find((item) => isActiveLink(item.href));

  return (
    <StyledNavBarContainer as="nav">
      <StyledNavBarListContainer unstyled gap={6}>
        {NavBarItems.map((navLink, index) => (
          <StyledNavBarListItem
            key={navLink.href}
            $index={index} // Position in the list
            $count={NavBarItems.length} // Total number of items (4)
            $amplitude={18} // Curve height in pixels
            $isActive={isActiveLink(navLink.href)}
          >
            <ChakraLink
              as={Link}
              href={navLink.href}
              aria-label={navLink.ariaLabel}
              focusRing="none"
              padding={3}
            >
              <VStack gap={2} align="center">
                {navLink.icon && (
                  <List.Indicator>
                    {navLink.icon && <navLink.icon />}
                  </List.Indicator>
                )}
              </VStack>
            </ChakraLink>
          </StyledNavBarListItem>
        ))}
      </StyledNavBarListContainer>

      {activeNavItem && (
        <StyledActiveLinkLabelContainer>
          <Text fontSize="sm" color="white" textAlign="center">
            {activeNavItem.label}
          </Text>
        </StyledActiveLinkLabelContainer>
      )}
    </StyledNavBarContainer>
  );
};

export default MobileNavBar;

"use client";

import { Link as ChakraLink, List, Box, Input } from "@chakra-ui/react";
import { NavBarItems } from "../NavBarItems/NavBarItems";
import { StyledDesktopNavBarContainer } from "@/components/shared/Navbar/DesktopNavBar/DesktopNavBar.styled";
import Link from "next/link";

const DesktopNavbar: React.FC = () => {
  return (
    <Box as="nav" padding={4} gap={4}>
      <StyledDesktopNavBarContainer unstyled>
        {NavBarItems.map((item) => (
          <List.Item key={item.href}>
            <ChakraLink
              as={Link}
              href={item.href}
              aria-label={item.ariaLabel}
              focusRing="none"
              padding={3}
            >
              {item.label}
            </ChakraLink>
          </List.Item>
        ))}
        <Input
          placeholder="Search a user or a movie"
          variant="subtle"
          size="md"
          maxW="15rem"
        />
      </StyledDesktopNavBarContainer>
    </Box>
  );
};

export default DesktopNavbar;

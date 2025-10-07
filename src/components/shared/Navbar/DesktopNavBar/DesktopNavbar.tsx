"use client";

import {
  Link as ChakraLink,
  List,
  Box,
  Input,
  InputGroup,
  Flex,
  Text,
} from "@chakra-ui/react";
import { NavBarItems } from "../NavBarItems/NavBarItems";
import { StyledDesktopNavBarContainer } from "@/components/shared/Navbar/DesktopNavBar/DesktopNavBar.styled";
import Link from "next/link";
import { Search } from "lucide-react";

const DesktopNavbar: React.FC = () => {
  return (
    <Box as="nav" padding={4} gap={4} backgroundColor="red">
      <StyledDesktopNavBarContainer>
        <List.Item>
          <ChakraLink as={Link} href="/" focusRing="none"></ChakraLink>
        </List.Item>
        <InputGroup startElement={<Search />} width="16rem">
          <Input
            placeholder="Search a user or a movie"
            variant="subtle"
            size="md"
          />
        </InputGroup>
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
      </StyledDesktopNavBarContainer>
    </Box>
  );
};

export default DesktopNavbar;

import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { breakpoints } from "@/lib/breakpoints";

export const NavBarContainer = styled(Flex)`
  position: fixed;
  bottom: 0;
  left: -10px;
  right: -10px;
  width: calc(100% + 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: #3c3533;
  padding: 1.5rem 2rem 1rem 2rem;

  border-top-left-radius: 90% 70%;
  border-top-right-radius: 90% 70%;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);

  @media (min-width: ${breakpoints.md}) {
    bottom: auto;
    top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 90% 70%;
    border-bottom-right-radius: 90% 70%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    background-color: red;
  }
`;

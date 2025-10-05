import { breakpoints } from "@/theme";
import { Flex, List } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const NavBarContainer = styled(Flex)`
  position: fixed;
  left: -10px;
  right: -10px;
  width: calc(100% + 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  bottom: 0;
  top: auto;
  background-color: #3c3533;
  padding: 1.5rem 2rem 1rem 2rem;
  border-top-left-radius: 90% 70%;
  border-top-right-radius: 90% 70%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);

  @media (min-width: ${breakpoints.md}) {
    bottom: auto;
    top: 0;
    background-color: red;
    padding: 1rem 2rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 90% 70%;
    border-bottom-right-radius: 90% 70%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

// Container for the navigation list - simple flexbox layout
export const NavBarList = styled(List.Root)`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  width: 100%;
  justify-content: space-around;
`;

// Mathematical function to calculate how much each item should be moved up/down
// Creates a parabolic curve: center items are highest, edge items are lowest
export const computeArcOffset = (
  index: number, // Current item position (0, 1, 2, 3...)
  count: number, // Total number of items
  amplitude: number = 18 // How high the curve should be (in pixels)
): number => {
  // If only 1 item, no curve needed
  if (count <= 1) return 0;

  // Find the center point of the list
  const midpoint = (count - 1) / 2;

  // Normalize position: -1 (leftmost) to +1 (rightmost)
  const x = (index - midpoint) / midpoint;

  // Create parabolic curve: 1 - x² gives us a smooth arc
  // Center (x=0) = 1, edges (x=±1) = 0
  return amplitude * (1 - x * x);
};

// TypeScript type for the props that each nav item needs
export type NavItemIndexProps = {
  $index: number; // Position of this item in the list
  $count: number; // Total number of items
  $amplitude?: number; // Optional curve height (defaults to 18px)
  $isActive?: boolean; // Whether this nav item is currently active
};

// Individual navigation item with curved positioning
export const NavBarListItem = styled(List.Item)<NavItemIndexProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform; // Optimize for smooth animations

  // Apply the curved transform - negative Y moves item UP
  transform: ${({ $index, $count, $amplitude }) =>
    `translateY(-${computeArcOffset($index, $count, $amplitude ?? 18)}px)`};

  transition: transform 150ms ease; // Smooth curve transitions
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  // Active state styling
  ${({ $isActive }) =>
    $isActive &&
    `
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    
    a {
      color: #ffffff;
      font-weight: 600;
    }
    
    svg {
      color: #ffffff;
    }
  `}

  // Desktop navbar: items should curve DOWN (positive Y) to match top navbar
  @media (min-width: ${breakpoints.md}) {
    transform: ${({ $index, $count, $amplitude }) =>
      `translateY(${computeArcOffset($index, $count, $amplitude ?? 18)}px)`};
  }
`;

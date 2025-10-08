"use client";

import AniverseLogo from "../../../assets/aniverse-logo-transparant.svg";
import { NavBarContainer } from "./NavBar.styled";

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <AniverseLogo width={120} height={40} />
    </NavBarContainer>
  );
};

export default NavBar;

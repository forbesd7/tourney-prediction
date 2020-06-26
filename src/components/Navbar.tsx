import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { Button } from "../styled-components/Button";
import { NavbarComponent } from "../styled-components/Navbar/NavbarComponent";
import StyledLink from "../styled-components/StyledLink";
import { NavbarTitle } from "../styled-components/Navbar/NavbarTitle";
import { Menu } from "../styled-components/Navbar/Menu";
import { NavbarTitleSection } from "../styled-components/Navbar/NavbarTitleSection";
import { DropdownContainer } from "../styled-components/Navbar/DropdownContainer";
import { Logo } from "../styled-components/Navbar/Logo";
export const Navbar = () => {
  const { user } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);

  const setShowMenuFunc = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    menuState: boolean
  ) => {
    setShowMenu(menuState);
  };
  return (
    <NavbarComponent>
      <Menu>
        <Logo>SC2 Predictor</Logo>

        <NavbarTitleSection borderR borderL>
          <StyledLink to="/tournaments">
            <NavbarTitleSection hover borderR>
              <NavbarTitle>Tournaments</NavbarTitle>
            </NavbarTitleSection>
          </StyledLink>

          <StyledLink to="/predictions">
            <NavbarTitleSection hover>
              <NavbarTitle>Predictions</NavbarTitle>
            </NavbarTitleSection>
          </StyledLink>

          <StyledLink to="/predictions">
            <NavbarTitleSection borderL hover>
              <NavbarTitle>Leaderboard</NavbarTitle>
            </NavbarTitleSection>
          </StyledLink>
        </NavbarTitleSection>

        <NavbarTitleSection
          onMouseOver={(e) => setShowMenuFunc(e, true)}
          borderL
          borderR
          hover
          mr={10}
          account
        >
          <NavbarTitle>Account</NavbarTitle>
          {showMenu ? <DropdownContainer>Profile</DropdownContainer> : ""}
          {showMenu ? <DropdownContainer>Settings</DropdownContainer> : ""}
          {showMenu ? <DropdownContainer>Help</DropdownContainer> : ""}
          {showMenu ? <DropdownContainer>Log out</DropdownContainer> : ""}
        </NavbarTitleSection>
      </Menu>
    </NavbarComponent>
  );
};

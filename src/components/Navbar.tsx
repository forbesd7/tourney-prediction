import React, { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { Button } from "../styled-components/Button";
import { NavbarComponent } from "../styled-components/Navbar/NavbarComponent";
import StyledLink from "../styled-components/StyledLink";
import { NavbarTitle } from "../styled-components/Navbar/NavbarTitle";
import { Menu } from "../styled-components/Navbar/Menu";
import { NavbarTitleSection } from "../styled-components/Navbar/NavbarTitleSection";
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
          <NavbarTitleSection hover borderR>
            <NavbarTitle>Tournaments</NavbarTitle>
          </NavbarTitleSection>
          <NavbarTitleSection hover>
            <NavbarTitle>Predictions</NavbarTitle>
          </NavbarTitleSection>
        </NavbarTitleSection>

        <NavbarTitleSection
          onMouseOver={(e) => setShowMenuFunc(e, true)}
          onMouseLeave={(e) => setShowMenuFunc(e, false)}
          borderL
          borderR
          hover
          mr={20}
        >
          <NavbarTitle>Account</NavbarTitle>
        </NavbarTitleSection>
      </Menu>
      {showMenu ? <div>hey</div> : ""}
    </NavbarComponent>
  );
};

import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Typography, Toolbar } from "@material-ui/core";
import { Button } from "../styled-components/Button";
import { NavbarComponent } from "../styled-components/NavbarComponent";
import StyledLink from "../styled-components/StyledLink";
import { NavbarTitle } from "../styled-components/NavbarTitle";
import { NavbarTitleSection } from "../styled-components/NavbarTitleSection";
export const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <NavbarComponent>
      <Typography>SC2 Predictor</Typography>

      <NavbarTitleSection>
        <StyledLink to="/profile">
          <NavbarTitle>Tournaments</NavbarTitle>
        </StyledLink>
      </NavbarTitleSection>
      <NavbarTitleSection>
        <StyledLink to="/profile">
          <NavbarTitle>Profile</NavbarTitle>
        </StyledLink>
      </NavbarTitleSection>

      <NavbarTitleSection>
        <StyledLink to="/profile">
          <NavbarTitle>{user ? "Log Out" : "Log in"}</NavbarTitle>
        </StyledLink>
      </NavbarTitleSection>
    </NavbarComponent>
  );
};

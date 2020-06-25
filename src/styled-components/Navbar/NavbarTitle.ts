import styled from "styled-components";

interface NavbarTitleProps {
  readonly isActive?: boolean;
}

const NavbarTitle = styled.p<NavbarTitleProps>`
  font-weight: bold;
  font-size: 18px;
  padding-right: 2em;
  padding-left: 2em;
`;

export { NavbarTitle };

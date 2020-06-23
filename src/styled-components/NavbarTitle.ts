import styled from "styled-components";

interface NavbarTitleProps {
  readonly isActive?: boolean;
}

const NavbarTitle = styled.p<NavbarTitleProps>`
  color: #a3b8cc;
  font-weight: bold;
  font-size: 18px;
`;

export { NavbarTitle };

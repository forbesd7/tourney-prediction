import styled from "styled-components";

interface NavbarProps {
  readonly isActive?: boolean;
}

const NavbarComponent = styled.div<NavbarProps>`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background-color: #065dba;
`;

export { NavbarComponent };

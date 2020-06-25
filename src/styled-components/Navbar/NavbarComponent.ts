import styled from "styled-components";

interface NavbarProps {
  readonly isActive?: boolean;
}

const NavbarComponent = styled.div<NavbarProps>`
  display: flex;
  justify-content: space-between;
  height: 6em;
  width: 100%;
  background-color: #001f3f;
  opacity: 0.9;
`;

export { NavbarComponent };

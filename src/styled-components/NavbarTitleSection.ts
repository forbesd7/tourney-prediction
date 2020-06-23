import styled from "styled-components";

interface NavbarTitleSection {
  readonly isActive?: boolean;
}

const NavbarTitleSection = styled.div<NavbarTitleSection>`
  &:hover {
    cursor: pointer;
  }
`;

export { NavbarTitleSection };

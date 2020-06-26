import styled from "styled-components";

interface DropdownContainerProps {
  readonly isActive?: boolean;
}

const DropdownContainer = styled.div<DropdownContainerProps>`
  width: 100%;
  background-color: red;
  height: 2em;
  border: 2px #4981ce solid;
  color: #ffffff;
  background-color: #104e8b;
`;

export { DropdownContainer };

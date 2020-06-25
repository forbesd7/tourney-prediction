import styled from "styled-components";

interface MenuProps {
  readonly isActive?: boolean;
}

const Menu = styled.div<MenuProps>`
  height: 4em;
  margin-top: 0.75em;
  background-color: #104e8b;
  width: 100%;
  border-top: white solid 1.5px;
  border-bottom: white solid 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { Menu };

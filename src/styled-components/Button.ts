import styled from "styled-components";

interface ButtonProps {
  readonly isActive?: boolean;
}

const Button = styled.button<ButtonProps>`
  all: unset;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export { Button };

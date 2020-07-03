import styled from "styled-components";

interface ButtonProps {
  readonly selected?: boolean;
  readonly size?: string;
}

const Button = styled.button<ButtonProps>`
  all: unset;
  color: ${(props) => (props.selected ? `#4981ce` : "#ffffff")};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    color: #4981ce;
    background-color: #ffffff;
  }
  opacity: ${(props) => (props.selected ? `0.8` : "1")};
  padding: 0.75em;
  margin-right: 0.5em;
  background-color: ${(props) => (props.selected ? `#ffffff` : "#104e8b")};
  width: ${(props) => (props.size === "small" ? `2em` : "4em")};
  border-radius: 5px;
  transition: color 0.4s ease-out;
  transition: background-color 0.2s ease-out;
  border: ${(props) => (props.selected ? `1.5px #104e8b solid` : "")};
`;

export { Button };

import styled from "styled-components";

interface LogoProps {
  readonly isActive?: boolean;
}

const Logo = styled.div<LogoProps>`
  color: #ffffff;
  font-weight: bold;
  font-size: 1em;
  padding-left: 1em;
`;

export { Logo };

import styled from "styled-components";

interface TwoPartContainerProps {
  readonly isActive?: boolean;
}

const TwoPartContainer = styled.div<TwoPartContainerProps>`
  display: flex;
  margin: 2em;
`;

export { TwoPartContainer };

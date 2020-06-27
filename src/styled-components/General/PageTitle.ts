import styled from "styled-components";

interface PageTitleProps {
  readonly isActive?: boolean;
}

const PageTitle = styled.div<PageTitleProps>`
  color: #ffffff;
  font-size: 3.5em;
`;

export { PageTitle };

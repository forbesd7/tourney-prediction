import styled from "styled-components";

interface GridContainerProps {
  readonly columns?: string;
  readonly rows?: string;
}

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  width: 100%;
  height: 50vh;
  grid-template-columns: ${(props) => props.columns};
  grid-template-columns: ${(props) => props.rows};
  grid-auto-flow: column;
  color: ${(props) => props.theme.offWhite};
  background-color: ${(props) => props.theme.darkBlue};
`;
interface GridItemProps {
  readonly columns?: string;
  readonly rows?: string;
}

const GridItem = styled.div<GridItemProps>`
  display: grid;
  width: 100%;
  height: 50vh;
  grid-template-columns: ${(props) => props.columns};
  grid-template-columns: ${(props) => props.rows};
  grid-auto-flow: column;
  color: ${(props) => props.theme.offWhite};
  background-color: ${(props) => props.theme.darkBlue};
`;

export { GridContainer, GridItem };

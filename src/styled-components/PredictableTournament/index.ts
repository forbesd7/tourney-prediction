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
  grid-template-rows: ${(props) => props.rows};
  grid-auto-flow: column;
  color: ${(props) => props.theme.offWhite};
  background-color: ${(props) => props.theme.darkBlue};
`;

interface GridItemProps {
  readonly column?: string;
  readonly row?: string;
}

const GridItem = styled.div<GridItemProps>`
  grid-row-start: ${(props) => props.row};
  grid-column-start: ${(props) => props.column};
  color: ${(props) => props.theme.darkBlue};
  background-color: ${(props) => props.theme.offWhite};
`;

export { GridContainer, GridItem };

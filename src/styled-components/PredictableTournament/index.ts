import styled from "styled-components";

interface GridContainerProps {
  readonly columns?: string;
  readonly rows?: string;
}

const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  width: 50%;
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
`;

interface PredictableMatchUpProps {
  readonly column?: string;
  readonly row?: string;
}

const PredictableMatchup = styled.div<PredictableMatchUpProps>`
  background-color: ${(props) => props.theme.offWhite};
  color: ${(props) => props.theme.darkBlue};
  border-radius: 10px;
  width: 80%;
`;

interface PredictableMatchupEntryProps {
  selected?: boolean;
  topEntry?: boolean;
}
const PredictableMatchupEntry = styled.div<PredictableMatchupEntryProps>`
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.selected ? props.theme.darkBlue : "#ffffff")};
    background-color: ${(props) => (props.selected ? "" : "green")};
  }
  border-radius: ${(props) =>
    props.topEntry ? "10px 10px 0px 0px" : "0px 0px 10px 10px;"};
  background-color: ${(props) => (props.selected ? "green" : "#ffffff")};
`;

export { GridContainer, GridItem, PredictableMatchup, PredictableMatchupEntry };

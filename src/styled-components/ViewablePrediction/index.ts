import styled from "styled-components";

interface ViewableMatchupEntryProps {
  predicted?: boolean;
  topEntry?: boolean;
}

const ViewableMatchupEntry = styled.div<ViewableMatchupEntryProps>`
  border-radius: ${(props) =>
    props.topEntry ? "10px 10px 0px 0px" : "0px 0px 10px 10px;"};
  background-color: ${(props) => (props.predicted ? "grey" : "#ffffff")};
`;

export { ViewableMatchupEntry };

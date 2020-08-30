import styled from "styled-components";

interface TournamentResultMatchupEntryProps {
  predicted?: boolean;
  selected?: boolean;
  topEntry?: boolean;
}

const TournamentResultMatchupEntry = styled.div<
  TournamentResultMatchupEntryProps
>`
  &:hover {
    cursor: pointer;
    color: ${(props) => (props.selected ? props.theme.darkBlue : "#ffffff")};
    background-color: ${(props) => (props.selected ? "" : "green")};
  }
  border-radius: ${(props) =>
    props.topEntry ? "10px 10px 0px 0px" : "0px 0px 10px 10px;"};
  background-color: ${(props) => (props.selected ? "green" : "#ffffff")};
`;

export { TournamentResultMatchupEntry };

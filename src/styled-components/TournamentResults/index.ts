import styled from "styled-components";

interface TournamentResultMatchupEntryProps {
  predicted?: boolean;
  topEntry?: boolean;
}

const TournamentResultMatchupEntry = styled.div<
  TournamentResultMatchupEntryProps
>`
  border-radius: ${(props) =>
    props.topEntry ? "10px 10px 0px 0px" : "0px 0px 10px 10px;"};
  background-color: ${(props) => (props.predicted ? "grey" : "#ffffff")};
`;

export { TournamentResultMatchupEntry };

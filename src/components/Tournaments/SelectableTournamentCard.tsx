import React from "react";
import StyledLink from "../../styled-components/StyledLink";
import * as S from "../../styled-components/Tournaments/index";
import { MatchupInfo } from "../../providers/CreatedTournamentProvider";

interface SelectableTournamentCardProps {
  matchupInfo: MatchupInfo;
  name: string;
  numOfPlayers: number;
}
export const SelectableTournamentCard = (
  props: SelectableTournamentCardProps
) => {
  const { matchupInfo, name, numOfPlayers } = props;
  return (
    <S.SelectableTournamentCard>
      {name}

      {numOfPlayers}
    </S.SelectableTournamentCard>

    //on click link to tournament with a specific link? or just normal link
    // then update context with selectedTournament so the tournaments component can access
    //ideally we can figure out how to pass props with router but it seems like a pain
  );
};

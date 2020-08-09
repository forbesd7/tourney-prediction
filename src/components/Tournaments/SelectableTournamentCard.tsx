import React from "react";
import StyledLink from "../../styled-components/StyledLink";
import * as S from "../../styled-components/Tournaments/index";
import { MatchupInfo } from "../../providers/CreatedTournamentProvider";

interface SelectableTournamentCardProps {
  id: number;
  matchupInfo: MatchupInfo;
  name: string;
  numOfPlayers: number;
}
export const SelectableTournamentCard = (
  props: SelectableTournamentCardProps
) => {
  const { id, name, numOfPlayers } = props;
  return (
    <S.SelectableTournamentCard>
      <StyledLink
        to={{
          pathname: `/tournament/${id}/asdasd`,
        }}
      >
        {name}
      </StyledLink>

      {numOfPlayers}
    </S.SelectableTournamentCard>
  );
};

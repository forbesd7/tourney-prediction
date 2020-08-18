import React from "react";
import StyledLink from "../../styled-components/StyledLink";
import * as S from "../../styled-components/Tournaments/index";
import { MatchupInfo } from "../../providers/CreatedTournamentProvider";

interface SelectableTournamentCardProps {
  id: number;
  matchupInfo: MatchupInfo;
  name: string;
  numOfPlayers: number;
  cardType: string;
}
export const SelectableTournamentCard = (
  props: SelectableTournamentCardProps
) => {
  const { id, name, numOfPlayers, cardType } = props;

  const determineRoute = () => {
    if (cardType === "tournament") {
      return "tournament";
    }
    return "prediction";
  };
  return (
    <S.SelectableTournamentCard>
      <StyledLink
        to={{
          pathname: `/${determineRoute()}/${id}/asdasd`,
        }}
      >
        {name}
      </StyledLink>

      {numOfPlayers}
    </S.SelectableTournamentCard>
  );
};

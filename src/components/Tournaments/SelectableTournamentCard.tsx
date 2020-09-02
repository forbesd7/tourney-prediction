import React from "react";
import StyledLink from "../../styled-components/StyledLink";
import * as S from "../../styled-components/Tournaments/index";

interface SelectableTournamentCardProps {
  id: number | string;
  name: string;
  numOfPlayers: number;
  cardType: string;
  predictionId?: string;
}
export const SelectableTournamentCard = (
  props: SelectableTournamentCardProps
) => {
  const { id, name, numOfPlayers, cardType, predictionId } = props;

  const determineRoute = () => {
    if (cardType === "tournament") {
      return "tournament";
    }
    return `prediction/${predictionId}`;
  };
  return (
    <S.SelectableTournamentCard>
      <div>
        <StyledLink
          to={{
            pathname: `/${determineRoute()}/${id}`,
          }}
        >
          {name}
        </StyledLink>
      </div>
      <div>
        <StyledLink
          to={{
            pathname: `/results/${id}`,
          }}
        >
          Results
        </StyledLink>
      </div>

      {numOfPlayers}
    </S.SelectableTournamentCard>
  );
};

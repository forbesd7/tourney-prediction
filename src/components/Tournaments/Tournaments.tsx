import React from "react";
import { Button } from "../../styled-components/General/Button";
import StyledLink from "../../styled-components/StyledLink";
import * as S from "../../styled-components/Tournaments/index";
import { SelectableTournamentCard } from "./SelectableTournamentCard";
import { useTournaments } from "../../hooks/useTournaments";
export const Tournaments = () => {
  const { status, data } = useTournaments();

  const renderTournaments = () => {
    if (status === "loading") {
      return <div> Loading </div>;
    } else {
      return (
        <S.SelectableTournaments>
          {data!.map((tournament, index) => {
            return (
              <SelectableTournamentCard
                cardType="tournament"
                key={tournament.id + index}
                id={tournament.id}
                name={tournament.name}
                numOfPlayers={tournament.numOfPlayers}
              />
            );
          })}
        </S.SelectableTournaments>
      );
    }
  };
  return (
    <S.Tournaments>
      <StyledLink to="/createTournament">
        <Button>Create Tournament</Button>
      </StyledLink>
      {renderTournaments()}
    </S.Tournaments>
  );
};

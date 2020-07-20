import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Button } from "../../styled-components/General/Button";
import StyledLink from "../../styled-components/StyledLink";
import { getTournamentsFromDB } from "../db-funcs";
import * as S from "../../styled-components/Tournaments/index";
import { SelectableTournamentCard } from "./SelectableTournamentCard";
import { SelectableTournament } from "./SelectableTournament";
import { useTournaments } from "../../hooks/useTournaments";
export const Tournaments = () => {
  const { user } = useContext(UserContext);
  const { status, data, error, isFetching } = useTournaments();

  const renderTournaments = () => {
    if (status === "loading") {
      return <div> Loading </div>;
    } else {
      return (
        <S.SelectableTournaments>
          {data!.map((tournament) => {
            return (
              <SelectableTournamentCard
                name={tournament.name}
                matchupInfo={tournament.matchupInfo}
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

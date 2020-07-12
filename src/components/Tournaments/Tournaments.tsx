import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Button } from "../../styled-components/General/Button";
import StyledLink from "../../styled-components/StyledLink";
import { getTournamentsFromDB } from "../db-funcs";
import * as S from "../../styled-components/Tournaments/index";
import { SelectableTournamentCard } from "./SelectableTournamentCard";
import { SelectableTournament } from "./SelectableTournament";
import { Route } from "react-router-dom";
export const Tournaments = () => {
  const { user } = useContext(UserContext);
  const getTournaments = async () => {
    const tournaments = await getTournamentsFromDB();
    setAvailableTournaments(tournaments);
    console.log(availableTournaments);
  };

  const [availableTournaments, setAvailableTournaments] = useState<
    firebase.firestore.DocumentData[]
  >([]);

  useEffect(() => {
    getTournaments();
  }, [user]);
  return (
    <S.Tournaments>
      <StyledLink to="/createTournament">
        <Button>Create Tournament</Button>
      </StyledLink>
      <S.SelectableTournaments>
        {availableTournaments.map((tournament) => {
          return (
            <SelectableTournamentCard
              name={tournament.name}
              matchupInfo={tournament.matchupInfo}
              numOfPlayers={tournament.numOfPlayers}
            />
          );
        })}
      </S.SelectableTournaments>
    </S.Tournaments>
  );
};

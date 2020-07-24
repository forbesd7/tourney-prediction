import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Button } from "../../styled-components/General/Button";
import StyledLink from "../../styled-components/StyledLink";
import { getTournamentsFromDB } from "../db-funcs";
import * as S from "../../styled-components/PredictableTournament/index";
import { TournamentInfo } from "../../providers/CreatedTournamentProvider";
import { calculateRows, calculateColumns, calculateLocation } from "./utils.";
interface PredictableTournamentProps extends TournamentInfo {}
export const PredictableTournament = (props: PredictableTournamentProps) => {
  const { matchupInfo, numOfPlayers, name } = props;

  const renderTournament = () => {
    return "hi";
  };
  return (
    <div>
      <S.GridContainer
        rows={calculateRows(numOfPlayers)}
        columns={calculateColumns(numOfPlayers)}
      >
        {Object.keys(matchupInfo).map((matchup) => {
          const [rowLocation, columnLocation] = calculateLocation(
            numOfPlayers,
            matchup
          );
          console.log(rowLocation);
          return <S.GridItem></S.GridItem>;
        })}
      </S.GridContainer>
    </div>
  );
};

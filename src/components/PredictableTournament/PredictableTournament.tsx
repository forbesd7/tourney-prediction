import React, { useContext, useState, useEffect } from "react";
import { Button } from "../../styled-components/General/Button";
import * as S from "../../styled-components/PredictableTournament/index";
import { TournamentInfo } from "../../providers/CreatedTournamentProvider";
import { calculateRows, calculateColumns, calculateLocation } from "./utils.";
import { PredictableMatchup } from "./PredictableMatchup";
interface PredictableTournamentProps extends TournamentInfo {}

export const PredictableTournament = (props: PredictableTournamentProps) => {
  const { matchupInfo, numOfPlayers, name } = props;

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
          return (
            <S.GridItem row={rowLocation} column={columnLocation}>
              <PredictableMatchup
                matchupEntries={[
                  matchupInfo[matchup]["A"],
                  matchupInfo[matchup]["B"],
                ]}
                matchupRound={matchup}
              />
            </S.GridItem>
          );
        })}
      </S.GridContainer>
      <Button>submit</Button>
    </div>
  );
};

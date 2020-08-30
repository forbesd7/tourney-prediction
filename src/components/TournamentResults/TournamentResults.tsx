import React, { useContext, useState, useEffect } from "react";
import { Button } from "../../styled-components/General/Button";
import * as S from "../../styled-components/PredictableTournament/index";
import {
  calculateRows,
  calculateColumns,
  calculateLocation,
} from "../PredictableTournament/utils.";
import { RouteComponentProps } from "react-router-dom";
import { useTourneyInfo } from "../../hooks/useTourneyInfo";
import { ResultsMatchup } from "./ResultsMatchup";

interface TournamentResultsProps
  extends RouteComponentProps<
    { tournamentId: string }, // props.match.params.myParamProp
    any // history
  > {}
export const TournamentResults = (props: TournamentResultsProps) => {
  const { tournamentId } = props.match.params;

  const tourneyData = useTourneyInfo(tournamentId).data;
  const tourneyStatus = useTourneyInfo(tournamentId).status;
  if (tourneyStatus === "loading") return <div>loading</div>;

  return tourneyData ? (
    <div>
      <S.GridContainer
        rows={calculateRows(tourneyData.numOfPlayers)}
        columns={calculateColumns(tourneyData.numOfPlayers)}
      >
        {Object.keys(tourneyData!.matchupInfo).map((matchup, index) => {
          const [rowLocation, columnLocation] = calculateLocation(
            tourneyData.numOfPlayers,
            matchup
          );

          const matchupResult = tourneyData.results
            ? tourneyData.results[matchup]
            : "";

          return (
            <S.GridItem
              key={matchup + index + "predict"}
              row={rowLocation}
              column={columnLocation}
            >
              <ResultsMatchup
                matchupEntries={[
                  tourneyData.matchupInfo[matchup]["A"],
                  tourneyData.matchupInfo[matchup]["B"],
                ]}
                matchupResult={matchupResult}
              />
            </S.GridItem>
          );
        })}
      </S.GridContainer>
    </div>
  ) : (
    <div>loading</div>
  );
};

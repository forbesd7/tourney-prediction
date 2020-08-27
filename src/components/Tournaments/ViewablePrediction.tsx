import React, { useContext, useState, useEffect } from "react";
import { Button } from "../../styled-components/General/Button";
import * as S from "../../styled-components/PredictableTournament/index";
import { TournamentInfo } from "../../providers/CreatedTournamentProvider";
import {
  calculateRows,
  calculateColumns,
  calculateLocation,
} from "../PredictableTournament/utils.";
import { PredictableMatchup } from "../PredictableTournament/PredictableMatchup";
import { predictionContext } from "../../providers/PredictionProvider";
import { UserContext } from "../../providers/UserProvider";
import { Dialogue } from "../Dialogue";
import { RouteComponentProps } from "react-router-dom";
import { useCreatePrediction } from "../../hooks/useCreatePrediction";
import { useTourneyInfo } from "../../hooks/useTourneyInfo";
interface ViewablePredictionProps
  extends RouteComponentProps<
    { tournamentId: string; predictionId: string }, // props.match.params.myParamProp
    any // history
  > {}
const ViewablePrediction = (props: ViewablePredictionProps) => {
  const { tournamentId, predictionId } = props.match.params;
  const { data, status } = useTourneyInfo(tournamentId);

  if (status === "loading") return <div>loading</div>;
  return (
    <div>
      <S.GridContainer
        rows={calculateRows(data!.numOfPlayers)}
        columns={calculateColumns(data!.numOfPlayers)}
      >
        {Object.keys(data!.matchupInfo).map((matchup, index) => {
          const [rowLocation, columnLocation] = calculateLocation(
            data!.numOfPlayers,
            matchup
          );
          return (
            <S.GridItem
              key={matchup + index + "predict"}
              row={rowLocation}
              column={columnLocation}
            >
              <PredictableMatchup
                matchupEntries={[
                  data!.matchupInfo[matchup]["A"],
                  data!.matchupInfo[matchup]["B"],
                ]}
                matchupRound={matchup}
              />
            </S.GridItem>
          );
        })}
      </S.GridContainer>
    </div>
  );
};

export default ViewablePrediction;

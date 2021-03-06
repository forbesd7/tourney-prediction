import React from "react";
import * as S from "../../styled-components/PredictableTournament/index";
import {
  calculateRows,
  calculateColumns,
  calculateLocation,
} from "../PredictableTournament/utils.";
import { ViewableMatchup } from "./ViewableMatchup";
import { RouteComponentProps } from "react-router-dom";
import { useTourneyInfo } from "../../hooks/useTourneyInfo";
import { usePredictionInfo } from "../../hooks/usePredictionInfo";
interface ViewablePredictionProps
  extends RouteComponentProps<
    { tournamentId: string; predictionId: string }, // props.match.params.myParamProp
    any // history
  > {}
const ViewablePrediction = (props: ViewablePredictionProps) => {
  const { tournamentId, predictionId } = props.match.params;
  const predictionData = usePredictionInfo(predictionId).data;
  const predictionStatus = usePredictionInfo(predictionId).status;
  const tourneyData = useTourneyInfo(tournamentId).data;
  const tourneyStatus = useTourneyInfo(tournamentId).status;
  if (tourneyStatus === "loading") return <div>loading</div>;
  if (predictionStatus === "loading") return <div>loading</div>;

  return (
    <div>
      <S.GridContainer
        rows={calculateRows(tourneyData!.numOfPlayers)}
        columns={calculateColumns(tourneyData!.numOfPlayers)}
      >
        {Object.keys(tourneyData!.matchupInfo).map((matchup, index) => {
          const [rowLocation, columnLocation] = calculateLocation(
            tourneyData!.numOfPlayers,
            matchup
          );
          return (
            <S.GridItem
              key={matchup + index + "predict"}
              row={rowLocation}
              column={columnLocation}
            >
              <ViewableMatchup
                matchupEntries={[
                  tourneyData!.matchupInfo[matchup]["A"],
                  tourneyData!.matchupInfo[matchup]["B"],
                ]}
                matchupPrediction={predictionData!.matchupPredictions[matchup]}
              />
            </S.GridItem>
          );
        })}
      </S.GridContainer>
    </div>
  );
};

export default ViewablePrediction;

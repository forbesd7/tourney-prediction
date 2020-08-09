import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useTourneyInfo } from "../../hooks/useTourneyInfo";
import { PredictableTournament } from "../PredictableTournament/PredictableTournament";
import { PredictionProvider } from "../../providers/PredictionProvider";

interface SelectableTournamentProps
  extends RouteComponentProps<
    { id?: string }, // props.match.params.myParamProp
    any // history
  > {
  matchupInfo: string;
  name: string;
  numOfPlayers: string;
}
export const SelectableTournament = (props: SelectableTournamentProps) => {
  const { id } = props.match.params;
  const { data, status } = useTourneyInfo(id);

  const renderTournament = () => {
    if (status === "loading") {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {data!.name}{" "}
          <PredictableTournament
            matchupInfo={data!.matchupInfo}
            name={data!.name}
            numOfPlayers={data!.numOfPlayers}
          />
        </div>
      );
    }
  };
  //put the context for predictions here and update in the matchups
  return (
    <PredictionProvider>
      <div>{renderTournament()}</div>
    </PredictionProvider>
  );
};

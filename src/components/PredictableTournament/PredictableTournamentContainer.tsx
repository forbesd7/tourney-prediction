import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useTourneyInfo } from "../../hooks/useTourneyInfo";
import PredictableTournament from "./PredictableTournament";
import { PredictionProvider } from "../../providers/PredictionProvider";

interface SelectableTournamentProps
  extends RouteComponentProps<
    { id: string }, // props.match.params.myParamProp
    any // history
  > {}
export const PredictableTournamentContainer = (
  props: SelectableTournamentProps
) => {
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
            tournamentId={id}
            matchupInfo={data!.matchupInfo}
            name={data!.name}
            numOfPlayers={data!.numOfPlayers}
          />
        </div>
      );
    }
  };
  return (
    <PredictionProvider>
      <div>{renderTournament()}</div>
    </PredictionProvider>
  );
};

import React, { useContext } from "react";
import { MatchupBox } from "../../styled-components/TournamentPreview/index";

interface PredictableMatchupProps {
  matchups: string[];
}
export const PredictableMatchup = (props: PredictableMatchupProps) => {
  const [A, B] = props.matchups;
  return (
    <div>
      <div>{A}</div>
      <div>{B}</div>
    </div>
  );
};

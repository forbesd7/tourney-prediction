import React, { useState, useContext } from "react";
import * as S from "../../styled-components/ViewablePrediction/index";
import * as PS from "../../styled-components/PredictableTournament/index";

interface ViewableMatchupProps {
  matchupEntries: string[];
  matchupPrediction: string;
}

export const ViewableMatchup = (props: ViewableMatchupProps) => {
  const [A, B] = props.matchupEntries;
  const { matchupPrediction } = props;

  const determinePredicted = (matchup: string) => {
    if (matchup === matchupPrediction) {
      return true;
    }
    return false;
  };

  return (
    <PS.PredictableMatchup>
      <S.ViewableMatchupEntry predicted={determinePredicted("A")} topEntry>
        {A}
      </S.ViewableMatchupEntry>
      <S.ViewableMatchupEntry predicted={determinePredicted("B")}>
        {B}
      </S.ViewableMatchupEntry>
    </PS.PredictableMatchup>
  );
};

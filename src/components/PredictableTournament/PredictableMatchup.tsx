import React, { useState, useContext } from "react";
import * as S from "../../styled-components/PredictableTournament/index";
import { predictionContext } from "../../providers/PredictionProvider";

interface PredictableMatchupProps {
  matchupEntries: string[];
  matchupRound: string;
}

export const PredictableMatchup = (props: PredictableMatchupProps) => {
  const [A, B] = props.matchupEntries;
  const { matchupRound } = props;
  const [selectedEntry, setSelectedEntry] = useState("");

  const { predictionInfo, updatePredictionInfo } = useContext(
    predictionContext
  );

  const determineSelected = (matchupEntry: string) => {
    if (matchupEntry === selectedEntry) {
      return true;
    }
    return false;
  };

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    entry: "A" | "B"
  ) => {
    setSelectedEntry(entry);
    updatePredictionInfo({
      ...predictionInfo,
      matchupPredictions: {
        ...predictionInfo.matchupPredictions,
        [matchupRound]: entry,
      },
    });
  };

  return (
    <S.PredictableMatchup>
      <S.PredictableMatchupEntry
        onClick={(e) => handleClick(e, "A")}
        selected={determineSelected("A")}
        topEntry
      >
        {A}
      </S.PredictableMatchupEntry>
      <S.PredictableMatchupEntry
        onClick={(e) => handleClick(e, "B")}
        selected={determineSelected("B")}
      >
        {B}
      </S.PredictableMatchupEntry>
    </S.PredictableMatchup>
  );
};

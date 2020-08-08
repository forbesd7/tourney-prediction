import React, { useState } from "react";
import * as S from "../../styled-components/PredictableTournament/index";

interface PredictableMatchupProps {
  matchupEntries: string[];
  matchupRound: string;
}

export const PredictableMatchup = (props: PredictableMatchupProps) => {
  const [A, B] = props.matchupEntries;
  const [selectedEntry, setSelectedEntry] = useState("");
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

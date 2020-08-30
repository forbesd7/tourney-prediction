import React, { useState, useContext } from "react";
import * as PS from "../../styled-components/PredictableTournament/index";
import * as S from "../../styled-components/TournamentResults/index";

interface PredictableMatchupProps {
  matchupEntries: string[];
  matchupResult?: string;
}

export const ResultsMatchup = (props: PredictableMatchupProps) => {
  const [A, B] = props.matchupEntries;
  const { matchupResult } = props;
  const [selectedEntry, setSelectedEntry] = useState("");
  const resultExists = matchupResult !== "";

  const determineSelected = (matchupEntry: string) => {
    if (matchupEntry === matchupResult) {
      return true;
    }
    return false;
  };

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    entry: "A" | "B"
  ) => {
    if (resultExists) return;
    console.log(entry);
  };

  //make a new styled component called PredictedEntry
  // use that one if there is a prediction
  //otherwise use the other one you can hover
  return (
    <PS.PredictableMatchup>
      <S.TournamentResultMatchupEntry
        predicted={resultExists}
        onClick={(e) => handleClick(e, "A")}
        selected={determineSelected("A")}
        topEntry
      >
        {A}
      </S.TournamentResultMatchupEntry>
      <S.TournamentResultMatchupEntry
        predicted={resultExists}
        onClick={(e) => handleClick(e, "B")}
        selected={determineSelected("B")}
      >
        {B}
      </S.TournamentResultMatchupEntry>
    </PS.PredictableMatchup>
  );
};

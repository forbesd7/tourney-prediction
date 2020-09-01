import React, { useState, useContext } from "react";
import * as PS from "../../styled-components/PredictableTournament/index";
import * as S from "../../styled-components/TournamentResults/index";

interface PredictableMatchupProps {
  matchupEntries: string[];
  matchupResult?: "A" | "B" | "";
  updateResults: (matchupRound: string, selectedResult: "A" | "B") => void;
  matchup: string;
}

export const ResultsMatchup = (props: PredictableMatchupProps) => {
  const [A, B] = props.matchupEntries;
  const { matchupResult, updateResults, matchup } = props;
  const [selectedEntry, setSelectedEntry] = useState("");
  const resultExists = matchupResult !== undefined;
  const determinePredicted = (matchupEntry: string) => {
    if (matchupEntry === matchupResult) {
      return true;
    }
    return false;
  };
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
    updateResults(matchup, entry);
  };

  const renderMatchups = () => {
    if (resultExists) {
      return (
        <PS.PredictableMatchup>
          <S.TournamentResultMatchupEntry
            predicted={determinePredicted("A")}
            topEntry
          >
            {A}
          </S.TournamentResultMatchupEntry>
          <S.TournamentResultMatchupEntry predicted={determinePredicted("B")}>
            {B}
          </S.TournamentResultMatchupEntry>
        </PS.PredictableMatchup>
      );
    }

    return (
      <PS.PredictableMatchup>
        <PS.PredictableMatchupEntry
          onClick={(e) => handleClick(e, "A")}
          topEntry
          selected={determineSelected("A")}
        >
          {A}
        </PS.PredictableMatchupEntry>
        <PS.PredictableMatchupEntry
          onClick={(e) => handleClick(e, "B")}
          selected={determineSelected("B")}
        >
          {B}
        </PS.PredictableMatchupEntry>
      </PS.PredictableMatchup>
    );
  };
  return <>{renderMatchups()}</>;
};

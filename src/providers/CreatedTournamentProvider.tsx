import React, { createContext, useState } from "react";
import { MatchupPrediction } from "./PredictionProvider";

interface Matchups {
  A: string;
  B: string;
}

export interface MatchupInfo {
  [key: string]: Matchups;
}

export interface TournamentInfo {
  numOfPlayers: number;
  matchupInfo: MatchupInfo;
  name: string;
  results?: MatchupPrediction;
}

interface CreatedTournamentContext {
  tournamentInfo: TournamentInfo;
  updateInfo: React.Dispatch<React.SetStateAction<TournamentInfo>>;
}

export const defaultTournamentInfo = {
  numOfPlayers: 8,
  name: "",
  matchupInfo: {},
  results: {},
};

const defaultCreatedTournamentContext: CreatedTournamentContext = {
  tournamentInfo: defaultTournamentInfo,
  updateInfo: (): void => {},
};

export const createdTournamentContext = createContext<CreatedTournamentContext>(
  defaultCreatedTournamentContext
);

export const CreatedTournamentProvider: React.FC = ({ children }) => {
  const [tournamentInfo, updateInfo] = useState<TournamentInfo>(
    defaultTournamentInfo
  );
  return (
    <createdTournamentContext.Provider
      value={{
        tournamentInfo,
        updateInfo,
      }}
    >
      {children}
    </createdTournamentContext.Provider>
  );
};

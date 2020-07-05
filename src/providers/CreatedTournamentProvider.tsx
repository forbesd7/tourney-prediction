import React, { createContext, useState, useEffect } from "react";

interface Matchups {
  A: string;
  B: string;
}

interface MatchupInfo {
  [key: string]: Matchups;
}

interface TournamentInfo {
  numOfPlayers: number;
  matchupInfo: MatchupInfo;
}

interface CreatedTournamentContext {
  tournamentInfo: TournamentInfo;
  updateInfo: React.Dispatch<React.SetStateAction<TournamentInfo>>;
}

const defaultCreatedTournamentContext: CreatedTournamentContext = {
  tournamentInfo: {
    numOfPlayers: 8,
    matchupInfo: {},
  },
  updateInfo: (): void => {},
};

const defaultTournamentInfo = {
  numOfPlayers: 8,
  matchupInfo: {},
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

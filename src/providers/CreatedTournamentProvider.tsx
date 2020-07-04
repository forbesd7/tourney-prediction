import React, { createContext, useState, useEffect } from "react";

interface MatchupInfo {
  [key: string]: Object;
}

interface CreatedTournamentContext {
  matchupInfo: MatchupInfo;
  updateMatchupInfo: React.Dispatch<React.SetStateAction<MatchupInfo>>;
}

const defaultCreatedTournamentContext: CreatedTournamentContext = {
  matchupInfo: {},
  updateMatchupInfo: (): void => {},
};

export const createdTournamentContext = createContext<CreatedTournamentContext>(
  defaultCreatedTournamentContext
);

export const CreatedTournamentProvider: React.FC = ({ children }) => {
  const [matchupInfo, updateMatchupInfo] = useState<MatchupInfo>({});
  return (
    <createdTournamentContext.Provider
      value={{ matchupInfo, updateMatchupInfo }}
    >
      {children}
    </createdTournamentContext.Provider>
  );
};

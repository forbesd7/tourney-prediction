import React, { createContext, useState } from "react";

export interface MatchupPrediction {
  [key: string]: "A" | "B";
}

export interface PredictionInfo {
  matchupPredictions: MatchupPrediction;
  userId: string;
  tournamentId: string;
}

interface PredictionContext {
  predictionInfo: PredictionInfo;
  updatePredictionInfo: React.Dispatch<React.SetStateAction<PredictionInfo>>;
}

export const defaultPredictionInfo = {
  userId: "",
  tournamentId: "",
  matchupPredictions: {},
};

const defaultPredictionContext: PredictionContext = {
  predictionInfo: defaultPredictionInfo,
  updatePredictionInfo: (): void => {},
};

export const predictionContext = createContext<PredictionContext>(
  defaultPredictionContext
);

export const PredictionProvider: React.FC = ({ children }) => {
  const [predictionInfo, updatePredictionInfo] = useState<PredictionInfo>(
    defaultPredictionInfo
  );
  return (
    <predictionContext.Provider
      value={{
        predictionInfo,
        updatePredictionInfo,
      }}
    >
      {children}
    </predictionContext.Provider>
  );
};

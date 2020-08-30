import React, { useEffect } from "react";
import { UserPredictionInfo } from "../../hooks/usePredictions";
import { SelectableTournamentCard } from "../Tournaments/SelectableTournamentCard";
import * as S from "../../styled-components/Tournaments/index";

interface PredictionsContainerProps {
  predictions?: UserPredictionInfo[];
}

export const PredictionsContainer = (props: PredictionsContainerProps) => {
  const { predictions } = props;

  const renderPredictionCards = () => {
    return (
      <S.SelectableTournaments>
        {predictions?.map((prediction, index) => {
          return (
            <SelectableTournamentCard
              cardType="prediction"
              predictionId={prediction.id}
              key={prediction.id + index}
              id={prediction.tournamentId}
              name={prediction.id}
              numOfPlayers={2}
            />
          );
        })}
      </S.SelectableTournaments>
    );
  };

  return <S.Tournaments>{renderPredictionCards()}</S.Tournaments>;
};

// why does console.log just in the function get called three times, but its only rendered once

import React from "react";
import { MatchupPrediction } from "../../providers/PredictionProvider";

interface PredictionsContainerProps {
  predictions: MatchupPrediction[];
}

export const PredictionsContainer = (props: PredictionsContainerProps) => {
  const { predictions } = props;

  const renderPredictionCards = () => {
    return <>{predictions.map((prediction, index) => {})}</>;
  };

  return <div>{renderPredictionCards()}</div>;
};

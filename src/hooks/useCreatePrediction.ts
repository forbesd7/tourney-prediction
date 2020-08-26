import { useMutation, queryCache } from "react-query";
import { PredictionInfo } from "../providers/PredictionProvider";
import { firestore } from "../firebase";
import * as firebase from "firebase/app";

const useCreatePrediction = () => {
  const addPrediction = async (predictionInfo: PredictionInfo) => {
    console.log("added tourney");
    const predictionInfoWithTimestamp = {
      ...predictionInfo,
      created: firebase.firestore.Timestamp.now(),
    };
    await firestore.collection("predictions").add(predictionInfoWithTimestamp);
  };

  return useMutation(addPrediction);
};

export { useCreatePrediction };

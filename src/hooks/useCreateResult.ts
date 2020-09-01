import { useMutation, queryCache } from "react-query";
import { PredictionInfo } from "../providers/PredictionProvider";
import { firestore } from "../firebase";
import * as firebase from "firebase/app";

const useCreateResult = () => {
  const addResult = async (predictionInfo: PredictionInfo) => {
    const predictionInfoWithTimestamp = {
      ...predictionInfo,
      created: firebase.firestore.Timestamp.now(),
    };
    await firestore.collection("predictions").add(predictionInfoWithTimestamp);
  };

  return useMutation(addResult);
};

export { useCreateResult };

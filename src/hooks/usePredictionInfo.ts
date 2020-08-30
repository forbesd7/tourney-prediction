import { firestore } from "../firebase";
import { useQuery } from "react-query";
import { PredictionInfo } from "../providers/PredictionProvider";

interface FirebasePredictionInfo
  extends firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>,
    PredictionInfo {}

const usePredictionInfo = (predictionId: string) => {
  const getPredictionInfo = async () => {
    const predictionInfo = await firestore
      .collection("predictions")
      .doc(predictionId)
      .get();

    return predictionInfo.data() as FirebasePredictionInfo;
  };
  return useQuery("getPredictionInfo", getPredictionInfo);
};

export { usePredictionInfo };

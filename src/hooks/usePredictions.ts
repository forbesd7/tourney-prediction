import { firestore } from "../firebase";
import { useQuery } from "react-query";
import { MatchupPrediction } from "../providers/PredictionProvider";

export interface UserPredictionInfo {
  id: string;
  matchupPredictions: MatchupPrediction;
  userId: string;
  tournamentId: string;
}

export interface UserInfo {
  displayName: string;
  email: string;
  photoURL: string;
}
const usePredictions = (profileId: string, page?: number) => {
  const getPredictions = async () => {
    const firstQuery = await firestore
      .collection("predictions")
      .where("userId", "==", `${profileId}`)
      .limit(5);

    const snapshot = await firstQuery.get();

    const last = snapshot.docs[snapshot.docs.length - 1];

    const next = firestore
      .collection("predictions")
      .where("userId", "==", `${profileId}`)
      .limit(5);

    const userPredictionsArr: UserPredictionInfo[] = [];

    userPredictions.forEach((predictionInfo) => {
      userPredictionsArr.push({
        ...predictionInfo.data(),
        id: predictionInfo.id,
      } as UserPredictionInfo);
    });

    return userPredictionsArr;
  };

  return useQuery("predictions", getPredictions);
};

export { usePredictions };

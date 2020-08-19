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
const useProfile = (profileId: string, page?: number) => {
  const getProfile = async () => {
    const userDoc = await firestore.collection("users").doc(profileId).get();

    const userData = userDoc.data() as UserInfo;

    const userPredictionsInfo = await getPredictions(profileId);

    const userPredictions: UserPredictionInfo[] = [];

    userPredictionsInfo.forEach((predictionInfo) => {
      userPredictions.push({
        ...predictionInfo.data(),
        id: predictionInfo.id,
      } as UserPredictionInfo);
    });
    console.log("called");
    return { ...userData, predictions: userPredictions };
  };

  const getPredictions = async (userId: string) => {
    const userPredictions = await firestore
      .collection("predictions")
      .where("userId", "==", `${userId}`)
      .get();
    return userPredictions;
  };

  return useQuery("getProfile", getProfile);
};

export { useProfile };

// separate these? or dont get user inform

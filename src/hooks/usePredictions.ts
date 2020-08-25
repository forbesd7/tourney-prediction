import { useState } from "react";
import { firestore } from "../firebase";
import { usePaginatedQuery } from "react-query";
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
const usePredictions = (profileId: string, page: number) => {
  const [lastDoc, setLastDoc] = useState<
    firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
  >();
  const getPredictions = async (key: any, page: any) => {
    let userPredictions;
    console.log(page);
    const firstQuery = firestore
      .collection("predictions")
      .where("userId", "==", `${profileId}`)
      .limit(5);

    if (page === 0) {
      userPredictions = await firstQuery.get();
    } else {
      const nextQuery = firestore
        .collection("predictions")
        .where("userId", "==", `${profileId}`)
        .startAfter(lastDoc)
        .limit(5);

      userPredictions = await nextQuery.get();
    }

    const putPredictionsIntoArr = (predictions: any) => {
      const userPredictionsArr: UserPredictionInfo[] = [];

      predictions.forEach((predictionInfo: any) => {
        userPredictionsArr.push({
          ...predictionInfo.data(),
          id: predictionInfo.id,
        } as UserPredictionInfo);
      });

      return userPredictionsArr;
    };

    const last = userPredictions.docs[userPredictions.docs.length - 1];
    setLastDoc(last);
    console.log(putPredictionsIntoArr(userPredictions));
    return putPredictionsIntoArr(userPredictions);
  };

  return usePaginatedQuery(["predictions", page], getPredictions);
};

export { usePredictions };

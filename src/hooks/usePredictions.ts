import { useState, useEffect } from "react";
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

export interface UserPredictionData {
  items: UserPredictionInfo[];
  noMoreData: boolean;
}
const usePredictions = (profileId: string, page: number) => {
  const [lastDoc, setLastDoc] = useState<
    firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
  >();
  const [firstDoc, setFirstDoc] = useState<
    firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
  >();
  const [curPage, setCurPage] = useState(1);

  const getPredictions = async (key: any, page: any) => {
    let userPredictions;
    const firstQuery = firestore
      .collection("predictions")
      .where("userId", "==", `${profileId}`)
      .limit(5);

    if (page === 1) {
      userPredictions = await firstQuery.get();
    } else if (curPage > page) {
      const prevQuery = firestore
        .collection("predictions")
        .where("userId", "==", `${profileId}`)
        .orderBy("tournamentId")
        .endBefore(firstDoc)
        .limitToLast(5);
      userPredictions = await prevQuery.get();
    } else if (curPage < page) {
      const nextQuery = firestore
        .collection("predictions")
        .where("userId", "==", `${profileId}`)
        .orderBy("tournamentId")
        .startAfter(lastDoc)
        .limit(5);

      userPredictions = await nextQuery.get();
    } else return;

    const checkForMoreData = async (predictions: any) => {
      const lastDocInCurrentQuery =
        predictions.docs[predictions.docs.length - 1];
      const nextPredictions = await firestore
        .collection("predictions")
        .where("userId", "==", `${profileId}`)
        .orderBy("tournamentId")
        .startAfter(lastDocInCurrentQuery)
        .limit(5)
        .get();

      if (nextPredictions.docs.length === 0) {
        return true;
      }
      return false;
    };
    const putPredictionsIntoObj = async (predictions: any) => {
      const userPredictionsData: UserPredictionData = {
        items: [],
        noMoreData: false,
      };

      predictions.forEach((predictionInfo: any) => {
        userPredictionsData.items.push({
          ...predictionInfo.data(),
          id: predictionInfo.id,
        } as UserPredictionInfo);
      });

      if (userPredictionsData.items.length !== 5) {
        userPredictionsData.noMoreData = true;
      }

      if ((await checkForMoreData(predictions)) === true) {
        userPredictionsData.noMoreData = true;
      }
      return userPredictionsData;
    };
    const last = userPredictions.docs[userPredictions.docs.length - 1];
    const first = userPredictions.docs[0];
    setFirstDoc(first);
    setLastDoc(last);
    setCurPage(page);
    return putPredictionsIntoObj(userPredictions);
  };

  return usePaginatedQuery(["predictions", page], getPredictions);
};

export { usePredictions };

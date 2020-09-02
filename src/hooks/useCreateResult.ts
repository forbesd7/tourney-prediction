import { useMutation, queryCache } from "react-query";
import { PredictionInfo } from "../providers/PredictionProvider";
import { firestore } from "../firebase";
import * as firebase from "firebase/app";

interface ResultsWithId {
  results: PredictionInfo;
  tournamentId: string;
}
const useCreateResult = () => {
  const addResult = async (resultsWithId: ResultsWithId) => {
    const userReportedResults = resultsWithId.results;
    const { tournamentId } = resultsWithId;

    const tourneyDocRef = firestore.collection("tournaments").doc(tournamentId);
    const tourneyDoc = await tourneyDocRef.get();
    const tourneyData = tourneyDoc.data();

    const savedResults = tourneyData!.results;

    tourneyDocRef.update({
      results: { ...savedResults, ...userReportedResults },
      updatedData: firebase.firestore.Timestamp.now(),
    });
  };

  return useMutation(addResult);
};

export { useCreateResult };

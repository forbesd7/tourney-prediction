import { useMutation, queryCache } from "react-query";
import { PredictionInfo } from "../providers/PredictionProvider";
import { firestore } from "../firebase";
import * as firebase from "firebase/app";

const useCreatePrediction = () => {
  const addPrediction = async (predictionInfo: PredictionInfo) => {
    console.log("added tourney");
    const { userId } = predictionInfo;
    const newPredictionRef = await firestore
      .collection("predictions")
      .add(predictionInfo);

    const userDocRef = await firestore.collection("users").doc(userId);

    const userDocData = (await userDocRef.get()).data();
    if (userDocData!.predictions) {
      userDocRef.update({
        predictions: firebase.firestore.FieldValue.arrayUnion(
          newPredictionRef.id
        ),
      });
    } else {
      userDocRef.update({
        predictions: [newPredictionRef.id],
      });
    }
  };

  return useMutation(addPrediction);
};

export { useCreatePrediction };

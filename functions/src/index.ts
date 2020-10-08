import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as _ from "underscore";

admin.initializeApp();

export const allocatePointsOnResultUpdate = functions.firestore
  .document("/tournaments/{documentId}")
  .onUpdate(async (change, context) => {
    const tournamentId = change.before.id;
    const beforeFields = change.before.data();
    const updatedFields = change.after.data();
    if (
      beforeFields.results &&
      !_.isEqual(beforeFields.results, updatedFields.results)
    ) {
      const newResults = updatedFields.results;
      await updateAccuracyForUsers(tournamentId, newResults);
      await admin.firestore().collection("messages").add({ data: "a" });
    }
  });

const updateAccuracyForUsers = async (tournamentId: string, results: any) => {
  console.log("tourney id", tournamentId);
  const predictionDocRefs = await admin
    .firestore()
    .collection("predictions")
    .where("tournamentId", "==", `${tournamentId}`)
    .get();

  const batch = admin.firestore().batch();

  predictionDocRefs.docs.forEach(async (doc) => {
    const docRef = admin.firestore().collection("predictions").doc(doc.id);
    const predictionData = (await docRef.get()) as any;
    const userPredictions = predictionData.matchupPredictions;
    const predictionAccuracy = userPredictions
      ? determineAccuracyOfPrediction(userPredictions, results)
      : {};

    await batch.update(docRef, { predictionAccuracy });
  });
  batch
    .commit()
    .then(() => {
      console.log(`updated all documents inside predictions`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const determineAccuracyOfPrediction = (userPrediction: any, results: any) => {
  const resultsLength = Object.keys(results).length;
  let accuratePredictions = 0;
  Object.keys(userPrediction).map((prediction) => {
    if (
      results[prediction] &&
      results[prediction] === userPrediction[prediction]
    ) {
      accuratePredictions++;
    }
  });

  return accuratePredictions / resultsLength;
};

import * as firebase from "firebase/app";
import { firestore } from "../../firebase";
import { PredictionInfo } from "../../providers/PredictionProvider";

export const calculateColumns = (playerNum: number) => {
  switch (playerNum) {
    case 8:
      return "1fr 1fr 1fr ";
    case 16:
      return "1fr 1fr 1fr 1fr";
    case 32:
      return "1fr 1fr 1fr 1fr 1fr ";
    case 64:
      return "1fr 1fr 1fr 1fr 1fr 1fr";
  }
};

export const calculateRows = (playerNum: number) => {
  let frs = "1fr ";
  while (playerNum !== 0) {
    frs += "1fr ";
    playerNum--;
  }
  return frs;
};

export const calculateLocation = (numOfPlayers: number, matchup: string) => {
  const [round, position] = matchup.slice(2).split("-");
  let column = "";
  let row = "";

  if ((numOfPlayers = 8)) {
    switch (round) {
      case "8":
        column = "1";
        break;
      case "4":
        column = "2";
        break;
      case "2":
        column = "3";
        break;
    }
    if (column === "1") {
      switch (position) {
        case "4":
          row = "2";
          break;
        case "3":
          row = "4";
          break;
        case "2":
          row = "6";
          break;
        case "1":
          row = "8";
          break;
      }
    }

    if (column === "2") {
      switch (position) {
        case "1":
          row = "3";
          break;
        case "2":
          row = "7";
          break;
      }
    }
    if (column === "3") {
      row = "5";
    }
    return [row, column];
  }
  return ["1", "2"];
};

export const addPrediction = async (predictionInfo: PredictionInfo) => {
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

//calculate where in the grid the match up should land depend on round/position

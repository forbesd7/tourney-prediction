import firebase from "firebase";
import { firestore } from "../../firebase";
import { User } from "firebase";
import { TournamentInfo } from "../../providers/CreatedTournamentProvider";

const userCollection = firestore.collection("users");
export const addTournament = async (
  user: User,
  tournamentInfo: TournamentInfo
) => {
  const userId = user.uid;
  await userCollection.doc(userId).update({
    created_tournament: firebase.firestore.FieldValue.arrayUnion(
      tournamentInfo
    ),
  });
  console.log("entered that shit");
};

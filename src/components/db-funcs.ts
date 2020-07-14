import firebase from "firebase";
import { firestore } from "../firebase";
import { User } from "firebase";
import { TournamentInfo } from "../providers/CreatedTournamentProvider";

export const addTournament = async (
  user: User,
  tournamentInfo: TournamentInfo
) => {
  const userId = user.uid;

  const userDoc = firestore.collection("tournaments").doc(userId);
  const userDocData = await userDoc.get();
  if (userDocData.exists) {
    userDoc.update({
      createdTournaments: firebase.firestore.FieldValue.arrayUnion(
        tournamentInfo
      ),
    });
  } else {
    userDoc.set({ createdTournaments: tournamentInfo });
  }
  console.log("entered that shit");
};

export const getTournamentsFromDB = async () => {
  const tournamentSnapshot = await firestore.collection("tournaments").get();

  const allTourneys: TournamentInfo[] = [];
  tournamentSnapshot.docs.map((doc) =>
    doc.data().createdTournaments.map((tournament: TournamentInfo) => {
      allTourneys.push(tournament);
    })
  );

  return allTourneys;
};

export const getTourneyInfo = async (tourneyName?: string) => {
  const tournamentSnapshot = await firestore.collection("tournaments").get();

  const allTourneys: TournamentInfo[] = [];
  tournamentSnapshot.docs.map((doc) =>
    doc.data().createdTournaments.map((tournament: TournamentInfo) => {
      allTourneys.push(tournament);
    })
  );

  return allTourneys;
};

//when tournament is made, it should generate an ID
//when rendering the tournament cards we also need to have that ID in the state
// then when the user clicks on this card, it will take the ID with it
// then it will find the tourney in DB and render the correct information / tournament for user
// is this 'server-side rendering'? how would i do this otherwise?
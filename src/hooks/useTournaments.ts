import { firestore } from "../firebase";
import { useQuery } from "react-query";
import * as firebase from "firebase/app";

const useTournaments = () => {
  const getTourneys = async () => {
    console.log("got tourneys");
    const tournamentSnapshot = await firestore.collection("tournaments").get();

    const allTourneys: firebase.firestore.DocumentData[] = [];
    tournamentSnapshot.docs.forEach((doc) => {
      allTourneys.push({ ...doc.data(), id: doc.id });
    });

    return allTourneys;
  };
  return useQuery("getTourneys", getTourneys);
};

export { useTournaments };

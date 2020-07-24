import React from "react";
import { firestore } from "../firebase";
import { TournamentInfo } from "../providers/CreatedTournamentProvider";
import { useQuery } from "react-query";
import firebase from "firebase";

const useTournaments = () => {
  const getTourneys = async (tourneyName?: string) => {
    console.log("got tourneys");
    const tournamentSnapshot = await firestore.collection("tournaments").get();

    const allTourneys: firebase.firestore.DocumentData[] = [];
    tournamentSnapshot.docs.map((doc) => {
      allTourneys.push({ ...doc.data(), id: doc.id });
    });

    return allTourneys;
  };
  return useQuery("getTourneys", getTourneys);
};

export { useTournaments };

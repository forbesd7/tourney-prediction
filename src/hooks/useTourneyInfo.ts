import React from "react";
import { firestore } from "../firebase";
import { TournamentInfo } from "../providers/CreatedTournamentProvider";
import { useQuery } from "react-query";

const useTourneyInfo = () => {
  const getTourneyInfo = async (tourneyName?: string) => {
    const tournamentSnapshot = await firestore.collection("tournaments").get();

    const allTourneys: TournamentInfo[] = [];
    tournamentSnapshot.docs.map((doc) =>
      doc.data().createdTournaments.map((tournament: TournamentInfo) => {
        allTourneys.push(tournament);
      })
    );

    return allTourneys;
  };
  return useQuery("getTourneys", getTourneyInfo);
};

export { useTourneyInfo };

import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { TournamentInfo } from "../providers/CreatedTournamentProvider";
import { useQuery } from "react-query";

const useTournaments = () => {
  const getTourneyInfo = async (tourneyName?: string) => {
    const tournamentSnapshot = await firestore.collection("tournaments").get();

    const allTourneys: TournamentInfo[] = [];
    tournamentSnapshot.docs.map((doc) =>
      doc.data().createdTournaments.map((tournament: TournamentInfo) => {
        allTourneys.push(tournament);
      })
    );
    console.log(allTourneys);
    return allTourneys;
  };
  return useQuery("gets", getTourneyInfo);
};

export { useTournaments };

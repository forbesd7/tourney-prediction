import { firestore } from "../firebase";
import { TournamentInfo } from "../providers/CreatedTournamentProvider";
import { useQuery } from "react-query";

interface TourneyInfo
  extends firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>,
    TournamentInfo {}

const useTourneyInfo = (tourneyId?: string) => {
  const getTourneyInfo = async () => {
    const tourneyInfo = await firestore
      .collection("tournaments")
      .doc(tourneyId)
      .get();

    return tourneyInfo.data() as TourneyInfo;
  };
  return useQuery("getTourneyInfo", getTourneyInfo);
};

export { useTourneyInfo };

import { firestore } from "../firebase";
import { useQuery } from "react-query";

const useProfile = (profileId: string) => {
  console.log("hi");

  const getProfile = async () => {
    const tourneyInfo = await firestore
      .collection("users")
      .doc(profileId)
      .get();
    const userData = tourneyInfo.data();

    const userPredictions = getPredictions(userData?.predictions);
    return tourneyInfo.data();
  };

  const getPredictions = async (predictions: string[]) => {};

  return useQuery("getProfile", getProfile);
};

export { useProfile };

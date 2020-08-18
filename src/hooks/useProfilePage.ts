import { firestore } from "../firebase";
import { useQuery } from "react-query";

const useProfile = (profileId: string) => {
  console.log("hi");
  const getProfile = async () => {
    const tourneyInfo = await firestore
      .collection("users")
      .doc(profileId)
      .get();
    console.log(tourneyInfo);
    return tourneyInfo.data();
  };

  return useQuery("getProfile", getProfile);
};

export { useProfile };

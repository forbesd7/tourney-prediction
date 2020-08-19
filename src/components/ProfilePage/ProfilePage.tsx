import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { RouteComponentProps } from "react-router";
import { useProfile } from "../../hooks/useProfilePage";
import { MatchupPrediction } from "../../providers/PredictionProvider";
import { PredictionsContainer } from "./PredictionsContainer";

interface ProfilePageProps extends RouteComponentProps<{ id: string }, any> {}

export const ProfilePage = (props: ProfilePageProps) => {
  const { user } = useContext(UserContext);

  const { id } = props.match.params;

  const { data, status } = useProfile(id);

  const photoUrl = data?.photoURL;
  const displayName = data?.displayName;
  const email = data?.email;
  const predictions = data?.predictions;
  const renderProfile = () => {
    if (status === "loading") {
      return <div>Loading</div>;
    }
    return (
      <div style={{ color: "white" }}>
        <p>{displayName}</p>
        <PredictionsContainer predictions={predictions} />
      </div>
    );
  };

  return <div>{renderProfile()}</div>;
};

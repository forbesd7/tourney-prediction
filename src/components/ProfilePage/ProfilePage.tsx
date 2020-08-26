import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import { RouteComponentProps } from "react-router";
import { usePredictions } from "../../hooks/usePredictions";
import { MatchupPrediction } from "../../providers/PredictionProvider";
import { PredictionsContainer } from "./PredictionsContainer";
import { queryCache } from "react-query";
interface ProfilePageProps extends RouteComponentProps<{ id: string }, any> {}

export const ProfilePage = (props: ProfilePageProps) => {
  const { user } = useContext(UserContext);
  const [page, setPage] = useState(1);

  const { id } = props.match.params;

  const { resolvedData, latestData, status } = usePredictions(id, page);

  const displayName = user?.displayName;

  const previousPageHandler = () => {
    setPage((old) => Math.max(old - 1, 1));
  };

  const nextPageHandler = () => {
    setPage((old) => (!latestData || latestData.noMoreData ? old : old + 1));
  };

  const renderProfile = () => {
    if (status === "loading") {
      return <div>Loading</div>;
    }
    return (
      <div style={{ color: "white" }}>
        <p>{displayName}</p>
        <button onClick={previousPageHandler}>Previous page</button>
        <span>{page}</span>
        <button onClick={nextPageHandler}> Next page</button>
        <PredictionsContainer predictions={resolvedData?.items} />
      </div>
    );
  };

  return <div>{renderProfile()}</div>;
};

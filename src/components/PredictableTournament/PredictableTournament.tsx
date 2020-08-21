import React, { useContext, useState, useEffect } from "react";
import { Button } from "../../styled-components/General/Button";
import * as S from "../../styled-components/PredictableTournament/index";
import { TournamentInfo } from "../../providers/CreatedTournamentProvider";
import { calculateRows, calculateColumns, calculateLocation } from "./utils.";
import { PredictableMatchup } from "./PredictableMatchup";
import { predictionContext } from "../../providers/PredictionProvider";
import { UserContext } from "../../providers/UserProvider";
import { useMutation } from "react-query";
import { Dialogue } from "../Dialogue";
import { useHistory } from "react-router-dom";
import { useCreatePrediction } from "../../hooks/useCreatePrediction";
interface PredictableTournamentProps extends TournamentInfo {
  tournamentId: string;
}

const PredictableTournament = (props: PredictableTournamentProps) => {
  const history = useHistory();
  const { matchupInfo, numOfPlayers, tournamentId } = props;
  const { predictionInfo } = useContext(predictionContext);
  const [showDialogue, setShowDialogue] = useState(false);
  const [shouldAddPrediction, setShouldAddPrediction] = useState(false);
  const { user } = useContext(UserContext);

  const [mutate] = useCreatePrediction();

  const setUserPrediction = () => {
    setShowDialogue(true);
  };
  const redirectUser = () => {
    history.push(`/profile/${user.uid}`);
  };

  useEffect(() => {
    if (shouldAddPrediction) {
      mutate({ ...predictionInfo, userId: user.uid, tournamentId });
      redirectUser();
    }
  }, [shouldAddPrediction]);

  const shouldRenderConfirmationDialogue = () => {
    if (showDialogue) {
      return (
        <Dialogue
          errorMsg="Add prediction? (This cannot be changed)"
          showRenderConfirmation={setShowDialogue}
          confirmAction={setShouldAddPrediction}
        />
      );
    }
    return "";
  };

  return (
    <div>
      <S.GridContainer
        rows={calculateRows(numOfPlayers)}
        columns={calculateColumns(numOfPlayers)}
      >
        {Object.keys(matchupInfo).map((matchup, index) => {
          const [rowLocation, columnLocation] = calculateLocation(
            numOfPlayers,
            matchup
          );
          return (
            <S.GridItem
              key={matchup + index + "predict"}
              row={rowLocation}
              column={columnLocation}
            >
              <PredictableMatchup
                matchupEntries={[
                  matchupInfo[matchup]["A"],
                  matchupInfo[matchup]["B"],
                ]}
                matchupRound={matchup}
              />
            </S.GridItem>
          );
        })}
      </S.GridContainer>
      <Button onClick={setUserPrediction}>submit</Button>
      {shouldRenderConfirmationDialogue()}
    </div>
  );
};

export default PredictableTournament;

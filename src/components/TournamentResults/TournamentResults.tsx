import React, { useContext, useState, useEffect } from "react";
import { Button } from "../../styled-components/General/Button";
import * as S from "../../styled-components/PredictableTournament/index";
import {
  calculateRows,
  calculateColumns,
  calculateLocation,
} from "../PredictableTournament/utils.";
import { RouteComponentProps } from "react-router-dom";
import { useTourneyInfo } from "../../hooks/useTourneyInfo";
import { ResultsMatchup } from "./ResultsMatchup";
import { useCreateResult } from "../../hooks/useCreateResult";
import { PredictionInfo } from "../../providers/PredictionProvider";
import { Dialogue } from "../Dialogue";

interface TournamentResultsProps
  extends RouteComponentProps<
    { tournamentId: string }, // props.match.params.myParamProp
    any // history
  > {}
export const TournamentResults = (props: TournamentResultsProps) => {
  const { tournamentId } = props.match.params;

  const [renderConfirmation, showRenderConfirmation] = useState(false);
  const [shouldUpdateResults, setShouldUpdateResults] = useState(false);

  const [results, setResults] = useState<PredictionInfo>({} as PredictionInfo);
  const tourneyData = useTourneyInfo(tournamentId).data;
  const tourneyStatus = useTourneyInfo(tournamentId).status;
  const [mutate] = useCreateResult();

  useEffect(() => {
    if (shouldUpdateResults === true) {
      submitResults();

      setShouldUpdateResults(false);
    }
  }, [shouldUpdateResults]);

  const updateResults = (matchupRound: string, selectedResult: "A" | "B") => {
    setResults({
      ...results,
      [matchupRound]: selectedResult,
    } as PredictionInfo);
  };

  if (tourneyStatus === "loading") return <div>loading</div>;

  const submitResults = () => {
    const resultsWithId = { results, tournamentId };
    mutate(resultsWithId);
  };

  const shouldRenderConfirmation = () => {
    if (renderConfirmation) {
      const confirmationMessage =
        "This will permanently update the results. Proceed?";
      return (
        <Dialogue
          showRenderConfirmation={showRenderConfirmation}
          confirmAction={setShouldUpdateResults}
          errorMsg={confirmationMessage}
        />
      );
    }
  };

  return (
    <div>
      {tourneyData ? (
        <div>
          <S.GridContainer
            rows={calculateRows(tourneyData.numOfPlayers)}
            columns={calculateColumns(tourneyData.numOfPlayers)}
          >
            {Object.keys(tourneyData!.matchupInfo).map((matchup, index) => {
              const [rowLocation, columnLocation] = calculateLocation(
                tourneyData.numOfPlayers,
                matchup
              );

              const matchupResult = tourneyData.results
                ? tourneyData.results[matchup]
                : undefined;

              return (
                <S.GridItem
                  key={matchup + index + "predict"}
                  row={rowLocation}
                  column={columnLocation}
                >
                  <ResultsMatchup
                    updateResults={updateResults}
                    matchupEntries={[
                      tourneyData.matchupInfo[matchup]["A"],
                      tourneyData.matchupInfo[matchup]["B"],
                    ]}
                    matchupResult={matchupResult}
                    matchup={matchup}
                  />
                </S.GridItem>
              );
            })}
          </S.GridContainer>
          <Button onClick={() => showRenderConfirmation(true)}>Submit</Button>
        </div>
      ) : (
        <div>loading</div>
      )}
      {shouldRenderConfirmation()}
    </div>
  );
};

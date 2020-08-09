import React, { useContext, Fragment } from "react";
import {
  PreviewContainer,
  RoundOfContainer,
  RoundOfTitle,
} from "../../../styled-components/TournamentPreview/index";
import { Matchup } from "./Matchup";
import { createdTournamentContext } from "../../../providers/CreatedTournamentProvider";
import { getNumOfMatchups, getRoundOfNames } from "../../utils";

interface TournamentPreviewProps {}
export const TournamentPreview = (props: TournamentPreviewProps) => {
  const { tournamentInfo } = useContext(createdTournamentContext);
  const { numOfPlayers } = tournamentInfo;

  const renderMatchups = (num: number, index: number) => {
    const roundName = getRoundOfNames(num).toLocaleLowerCase();
    const arrayOfMatchups = [];
    while (num !== 0) {
      arrayOfMatchups.push(
        <Matchup roundNum={index} matchAndRoundNum={`${roundName}-${num}`} />
      );
      num--;
    }

    return arrayOfMatchups;
  };

  const renderBracket = () => {
    const numOfMatchups = getNumOfMatchups(numOfPlayers);
    return (
      <PreviewContainer>
        {numOfMatchups.map((num, index) => {
          return (
            <RoundOfContainer key={index + "previewRounds"}>
              <RoundOfTitle>{getRoundOfNames(num)}</RoundOfTitle>
              {renderMatchups(num, index)}
            </RoundOfContainer>
          );
        })}
      </PreviewContainer>
    );
  };

  return <Fragment>{renderBracket()}</Fragment>;
};

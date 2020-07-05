import React, { useContext, Fragment } from "react";
import { UserContext } from "../../../providers/UserProvider";
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
  const { user } = useContext(UserContext);
  const { tournamentInfo } = useContext(createdTournamentContext);
  const { numOfPlayers } = tournamentInfo;

  const renderMatchups = (num: number, index: number) => {
    const roundName = getRoundOfNames(num).toLocaleLowerCase();
    const arrayOfMatchups = [];
    const marginAmnt = `${(index + 1) * 4}`;
    while (num !== 0) {
      arrayOfMatchups.push(
        <Matchup
          marginAmnt={marginAmnt}
          matchAndRoundNum={`${roundName}-${num}`}
        />
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
            <RoundOfContainer>
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

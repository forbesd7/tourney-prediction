import React, { useContext, Fragment } from "react";
import { UserContext } from "../../../providers/UserProvider";
import {
  PreviewContainer,
  RoundOfContainer,
} from "../../../styled-components/TournamentPreview/index";
import { Matchup } from "./Matchup";
interface TournamentPreviewProps {
  numOfPlayers: number;
}
export const TournamentPreview = (props: TournamentPreviewProps) => {
  const { user } = useContext(UserContext);
  const { numOfPlayers } = props;

  const getNumOfMatchups = () => {
    let numOfPlayersToBeDivided = numOfPlayers;
    let numOfMatchups = [];

    while (numOfPlayersToBeDivided % 2 === 0) {
      numOfMatchups.push(numOfPlayersToBeDivided / 2);
      numOfPlayersToBeDivided /= 2;
    }

    return numOfMatchups;
  };

  const renderMatchups = (num: number, matchNum: number) => {
    const arrayOfMatchups = [];

    while (num !== 0) {
      arrayOfMatchups.push(<Matchup matchAndRoundNum={`${matchNum}-${num}`} />);
      num--;
    }

    return arrayOfMatchups;
  };

  const renderBracket = () => {
    const numOfMatchups = getNumOfMatchups();
    return (
      <PreviewContainer>
        {numOfMatchups.map((num, index) => {
          return (
            <RoundOfContainer>{renderMatchups(num, index)}</RoundOfContainer>
          );
        })}
      </PreviewContainer>
    );
  };
  return <Fragment>{renderBracket()}</Fragment>;
};

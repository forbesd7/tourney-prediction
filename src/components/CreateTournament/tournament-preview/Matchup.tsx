import React, { useContext } from "react";
import { MatchupBox } from "../../../styled-components/TournamentPreview/index";
import { Input } from "../../../styled-components/Form";
import { createdTournamentContext } from "../../../providers/CreatedTournamentProvider";

interface MatchupProps {
  matchAndRoundNum: string;
}
export const Matchup = (props: MatchupProps) => {
  const { matchupInfo, updateMatchupInfo } = useContext(
    createdTournamentContext
  );

  const { matchAndRoundNum } = props;

  const updateCurrentMatchup = (
    event: React.ChangeEvent<HTMLInputElement>,
    matchupSpot: "A" | "B"
  ) => {
    let currentMatchup = matchupInfo[matchAndRoundNum];
    let currentPlayerName = event.target.value;

    updateMatchupInfo({
      ...matchupInfo,
      [matchAndRoundNum]: {
        ...currentMatchup,
        [matchupSpot]: currentPlayerName,
      },
    });
  };
  return (
    <MatchupBox>
      <Input
        onChange={(e) => updateCurrentMatchup(e, "A")}
        placeholder="Enter player name.."
      ></Input>
      <Input
        onChange={(e) => updateCurrentMatchup(e, "B")}
        placeholder="Enter player name.."
      ></Input>
    </MatchupBox>
  );
};

import React, { useContext } from "react";
import { MatchupBox } from "../../../styled-components/TournamentPreview/index";
import { Input } from "../../../styled-components/Form";
import { createdTournamentContext } from "../../../providers/CreatedTournamentProvider";

interface MatchupProps {
  matchAndRoundNum: string;
  roundNum: number;
}
export const Matchup = (props: MatchupProps) => {
  const { tournamentInfo, updateInfo } = useContext(createdTournamentContext);
  const { matchupInfo } = tournamentInfo;
  const { matchAndRoundNum, roundNum } = props;

  const updateCurrentMatchup = (
    event: React.ChangeEvent<HTMLInputElement>,
    matchupSpot: "A" | "B"
  ) => {
    let currentMatchup = matchupInfo[matchAndRoundNum];
    let currentPlayerName = event.target.value;

    updateInfo({
      ...tournamentInfo,
      matchupInfo: {
        ...matchupInfo,
        [matchAndRoundNum]: {
          ...currentMatchup,
          [matchupSpot]: currentPlayerName,
        },
      },
    });
  };

  const getValue = (matchupSpot: "A" | "B") => {
    const matchup = matchupInfo[matchAndRoundNum];
    if (matchup) {
      const matchupVal = matchupInfo[matchAndRoundNum][matchupSpot];
      if (matchupVal) {
        return matchupVal;
      }
    }
    return "";
  };

  const calculateSpacing = () => {
    if (roundNum === 0) {
      return "0";
    } else if (roundNum === 1) {
      return `${roundNum * 2.7}`;
    } else if (roundNum === 2) {
      return `${roundNum * 4}`;
    } else if (roundNum === 3) {
      return `${roundNum * 6.7}`;
    } else if (roundNum === 4) {
      return `${roundNum * 8}`;
    }
  };

  return (
    <MatchupBox padding={calculateSpacing()} marginBottom={"2"}>
      <Input
        onChange={(e) => updateCurrentMatchup(e, "A")}
        placeholder="Enter player name.."
        value={getValue("A")}
      ></Input>
      <Input
        value={getValue("B")}
        onChange={(e) => updateCurrentMatchup(e, "B")}
        placeholder="Enter player name.."
      ></Input>
    </MatchupBox>
  );
};

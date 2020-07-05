import React, { useContext } from "react";
import { MatchupBox } from "../../../styled-components/TournamentPreview/index";
import { Input } from "../../../styled-components/Form";
import { createdTournamentContext } from "../../../providers/CreatedTournamentProvider";

interface MatchupProps {
  matchAndRoundNum: string;
  marginAmnt: string;
}
export const Matchup = (props: MatchupProps) => {
  const { tournamentInfo, updateInfo } = useContext(createdTournamentContext);
  const { matchupInfo } = tournamentInfo;
  const { matchAndRoundNum, marginAmnt } = props;

  const updateCurrentMatchup = (
    event: React.ChangeEvent<HTMLInputElement>,
    matchupSpot: "A" | "B"
  ) => {
    let currentMatchup = matchupInfo[matchAndRoundNum];
    let currentPlayerName = event.target.value;

    updateInfo({
      ...tournamentInfo,
      matchupInfo: {
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

  return (
    <MatchupBox marginBottom={marginAmnt}>
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

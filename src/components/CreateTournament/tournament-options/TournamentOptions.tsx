import React, { useContext, Fragment } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { GroupOption, BracketOption } from "../CreateTournamentContainer";
import { FormatButton } from "../FormatButton";

interface TournamentOptionsProps {
  groupOptions?: GroupOption;
  bracketOptions?: BracketOption;
  updateOptions: (
    format: string,
    option: string,
    selectedVal: string | number
  ) => void;
  type: string;
}

const potentialNumForPlayers = [4, 8, 16, 32, 64];
const potentialNumForGroups: number[] = [4, 8, 10, 12];

export const TournamentOptions = (props: TournamentOptionsProps) => {
  const { user } = useContext(UserContext);
  const { type, groupOptions, bracketOptions, updateOptions } = props;

  const renderButtons = () => {
    if(groupOptions) {

      const optionKeys = Object.keys(groupOptions) as Array<keyof typeof groupOptions>;
  
      optionKeys.map((option) => {
          return potentialNumForGroups.map((num) => (
            <FormatButton
              size="normal"
              key={option + num}
              buttonType={"format"}
              label={num}
              selectedFormat={groupOptions[option]}
              setSelectedButton={updateOptions}
            />
          ));
    }
    );
  };
  const renderGroupButtons = () => {};

  return <Fragment>{renderButtons()}</Fragment>;
};

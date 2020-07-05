import React, { useContext, Fragment } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { GroupOption, BracketOption } from "../CreateTournamentContainer";
import { OptionsButton } from "./OptionsButton";
import {
  FormGroup,
  Label,
  ButtonContainer,
} from "../../../styled-components/Form/index";
import { getOptionNames } from "./utils";

interface TournamentOptionsProps {
  groupOptions?: GroupOption;
  bracketOptions?: BracketOption;
}

const potentialNumForPlayers = [4, 8, 16, 32, 64];
const potentialNumForGroups: number[] = [4, 8, 10, 12];

export const TournamentOptions = (props: TournamentOptionsProps) => {
  const { user } = useContext(UserContext);
  const { groupOptions, bracketOptions } = props;

  const renderButtons = () => {
    if (groupOptions) {
      const optionKeys = Object.keys(groupOptions) as Array<
        keyof typeof groupOptions
      >;

      return optionKeys.map((option, index) => {
        return (
          <FormGroup key={option + index}>
            <Label>{getOptionNames(option)}</Label>
            <ButtonContainer>
              {potentialNumForGroups.map((num) => (
                <OptionsButton
                  optionType={"Groups"}
                  option={option}
                  size="small"
                  key={option + num}
                  label={num}
                  selectedOption={groupOptions[option]}
                />
              ))}
            </ButtonContainer>
          </FormGroup>
        );
      });
    } else if (bracketOptions) {
      const optionKeys = Object.keys(bracketOptions) as Array<
        keyof typeof bracketOptions
      >;

      return optionKeys.map((option, index) => {
        return (
          <FormGroup key={option + index}>
            <Label>{getOptionNames(option)}</Label>
            <ButtonContainer>
              {potentialNumForPlayers.map((num) => (
                <OptionsButton
                  optionType={"Bracket"}
                  option={option}
                  size="small"
                  key={option + num}
                  label={num}
                  selectedOption={bracketOptions[option]}
                />
              ))}
            </ButtonContainer>
          </FormGroup>
        );
      });
    }
    return <></>;
  };

  return <Fragment>{renderButtons()}</Fragment>;
};

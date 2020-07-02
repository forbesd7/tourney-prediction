import React, { useContext, Fragment } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { BracketOption } from "../CreateTournamentContainer";
import { FormatButton } from "../FormatButton";

interface BracketOptionsProps {
  bracketOptions: BracketOption;
  updateBracketOptions: (option: string, selectedVal: string | number) => void;
}
const numPlayers = [4, 8, 16, 32, 64];

export const BracketOptions = (props: BracketOptionsProps) => {
  const { user } = useContext(UserContext);
  const { updateBracketOptions, bracketOptions } = props;

  const { selectedNumOfPlayers } = bracketOptions;

  return <Fragment>hi</Fragment>;
};

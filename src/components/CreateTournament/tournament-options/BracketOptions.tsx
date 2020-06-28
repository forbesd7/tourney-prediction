import React, { useContext, Fragment } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { BracketOption } from "../CreateTournamentContainer";
import { FormatButton } from "../FormatButton";

interface BracketOptionsProps {
  type?: string;
  bracketOptions: BracketOption;
}
const numPlayers = [4, 8, 16, 32, 64];

export const BracketOptions = (props: BracketOptionsProps) => {
  const { user } = useContext(UserContext);
  const { type, bracketOptions } = props;

  const { selectedNumOfPlayers } = bracketOptions;

  const renderButtons = () => {};

  return <Fragment>hi</Fragment>;
};

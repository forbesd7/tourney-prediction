import React, { useContext, Fragment } from "react";
import { Button } from "../../../styled-components/General/index";
import { UserContext } from "../../../providers/UserProvider";
import { BracketOptions } from "./BracketOptions";
import { GroupOptions } from "./GroupOptions";
import { BracketOption } from "../CreateTournamentContainer";

interface TournamentOptionsProps {
  type: string;
  bracketOptions: BracketOption;
}
export const TournamentOptions = (props: TournamentOptionsProps) => {
  const { user } = useContext(UserContext);
  const { type, bracketOptions } = props;

  const renderOptions = () => {
    if (type === "Bracket") {
      return <BracketOptions bracketOptions={bracketOptions} />;
    }
    return <GroupOptions />;
  };

  return <Fragment>{renderOptions()}</Fragment>;
};

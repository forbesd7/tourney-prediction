import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Button } from "../../styled-components/General/Button";
import StyledLink from "../../styled-components/StyledLink";
import { getTournamentsFromDB } from "../db-funcs";
import * as S from "../../styled-components/Tournaments/index";
import { MatchupInfo } from "../../providers/CreatedTournamentProvider";
import { RouteComponentProps } from "react-router-dom";
import { getTourneyInfo } from "../db-funcs";

interface SelectableTournamentProps
  extends RouteComponentProps<
    { name?: string }, // props.match.params.myParamProp
    any // history
  > {
  matchupInfo: string;
  name: string;
  numOfPlayers: string;
}
export const SelectableTournament = (props: SelectableTournamentProps) => {
  const { name } = props.match.params;
  const tourneyInfo = getTourneyInfo(name);
  console.log(name);
  return <div>s</div>;
};

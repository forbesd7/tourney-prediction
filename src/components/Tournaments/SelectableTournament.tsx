import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Button } from "../../styled-components/General/Button";
import StyledLink from "../../styled-components/StyledLink";
import { getTournamentsFromDB } from "../db-funcs";
import * as S from "../../styled-components/Tournaments/index";
import { MatchupInfo } from "../../providers/CreatedTournamentProvider";

interface SelectableTournamentProps {
  matchupInfo: MatchupInfo;
  name: string;
  numOfPlayers: number;
}
export const SelectableTournament = (props: SelectableTournamentProps) => {
  const { matchupInfo, name, numOfPlayers } = props;
  return <div>FUCK</div>;
};

import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Button } from "../../styled-components/General/Button";
import StyledLink from "../../styled-components/StyledLink";
import { getTournamentsFromDB } from "../db-funcs";
import * as S from "../../styled-components/Tournaments/index";
import { MatchupInfo } from "../../providers/CreatedTournamentProvider";
import { RouteComponentProps } from "react-router-dom";
import { getTourneyInfo } from "../db-funcs";
import { useTourneyInfo } from "../../hooks/useTourneyInfo";
import { PredictableTournament } from "../PredictableTournament/PredictableTournament";

interface SelectableTournamentProps
  extends RouteComponentProps<
    { id?: string }, // props.match.params.myParamProp
    any // history
  > {
  matchupInfo: string;
  name: string;
  numOfPlayers: string;
}
export const SelectableTournament = (props: SelectableTournamentProps) => {
  const { id } = props.match.params;
  const { data, status } = useTourneyInfo(id);

  const renderTournament = () => {
    if (status === "loading") {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {data!.name}{" "}
          <PredictableTournament
            matchupInfo={data!.matchupInfo}
            name={data!.name}
            numOfPlayers={data!.numOfPlayers}
          />
        </div>
      );
    }
  };
  return <div>{renderTournament()}</div>;
};

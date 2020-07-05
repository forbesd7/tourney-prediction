import React, { useState, useContext, Fragment, useEffect } from "react";
import { Button } from "../../../styled-components/General/index";
import { createdTournamentContext } from "../../../providers/CreatedTournamentProvider";
import { Error } from "../../Error";

interface SubOptionsProps {}
export const SubOptions = (props: SubOptionsProps) => {
  const { tournamentInfo, updateInfo } = useContext(createdTournamentContext);
  const { numOfPlayers, matchupInfo } = tournamentInfo;

  const renderInputs = () => {
    return <div></div>;
  };
  return <Fragment>{renderInputs()}</Fragment>;
};

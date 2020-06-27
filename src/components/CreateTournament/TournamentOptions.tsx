import React, { useContext, Fragment } from "react";
import { Button } from "../../styled-components/General/index";
import { UserContext } from "../../providers/UserProvider";

interface TournamentOptionsProps {
  type?: string;
  label: string | number;
  selectedFormat: string | number;
  setSelectedButton: React.Dispatch<React.SetStateAction<any>>;
}
export const TournamentOptions = (props: TournamentOptionsProps) => {
  const { user } = useContext(UserContext);

  return <div></div>;
};

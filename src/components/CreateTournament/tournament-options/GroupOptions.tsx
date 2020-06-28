import React, { useContext, Fragment } from "react";
import { UserContext } from "../../../providers/UserProvider";
// import { BracketOptions } from "../CreateTournamentContainer";
interface GroupOptionsProps {
  type?: string;
}
export const GroupOptions = (props: GroupOptionsProps) => {
  const { user } = useContext(UserContext);
  const { type } = props;

  return <Fragment>hi</Fragment>;
};

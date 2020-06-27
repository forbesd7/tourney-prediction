import React, { useContext, Fragment } from "react";
import { Button } from "../../styled-components/General/index";
import { UserContext } from "../../providers/UserProvider";

interface TournamentPreviewProps {
  size?: string;
}
export const TournamentPreview = (props: TournamentPreviewProps) => {
  const { user } = useContext(UserContext);

  return <Fragment>hi</Fragment>;
};

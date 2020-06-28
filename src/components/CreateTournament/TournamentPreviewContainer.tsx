import React, { useContext, Fragment } from "react";
import { UserContext } from "../../providers/UserProvider";

interface TournamentPreviewProps {
  type?: string;
}
export const TournamentPreview = (props: TournamentPreviewProps) => {
  const { user } = useContext(UserContext);

  return <Fragment>hi</Fragment>;
};

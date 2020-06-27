import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Button } from "../styled-components/General/Button";
import StyledLink from "../styled-components/StyledLink";

export const Tournaments = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledLink to="/createTournament">
      <Button>Create Tournament</Button>;
    </StyledLink>
  );
};

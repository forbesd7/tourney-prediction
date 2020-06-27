import React, { useContext, Fragment, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import {
  PageTitle,
  TwoPartContainer,
} from "../../styled-components/General/index";
import {
  FormGroup,
  Label,
  Input,
  FormContainer,
  ButtonContainer,
} from "../../styled-components/Form/index";
import { Button } from "../../styled-components/General/index";
import { FormatButton } from "./FormatButton";
import StyledLink from "../../styled-components/StyledLink";

const formatButtons = ["Bracket", "Groups"];
const numPlayers = [4, 8, 16, 32, 64];
export const CreateTournamentContainer = () => {
  const { user } = useContext(UserContext);
  const [selectedFormat, setSelectedFormat] = useState("Bracket");
  const [selectedNumPlayers, setSelectedNumPlayers] = useState(8);

  const renderButtons = (buttonType: string) => {
    if (buttonType === "format") {
      return formatButtons.map((button) => (
        <FormatButton
          size="normal"
          key={button}
          label={button}
          selectedFormat={selectedFormat}
          setSelectedButton={setSelectedFormat}
        ></FormatButton>
      ));
    } else if ((buttonType = "numPlayers")) {
      return numPlayers.map((button) => (
        <FormatButton
          size="small"
          key={button}
          label={button}
          selectedFormat={selectedNumPlayers}
          setSelectedButton={setSelectedNumPlayers}
        ></FormatButton>
      ));
    }
  };
  return (
    <Fragment>
      <PageTitle>Enter Tournament Information</PageTitle>;
      <TwoPartContainer>
        <FormContainer>
          <FormGroup>
            <Label>Tournament name</Label>
            <Input type="text"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Format</Label>
            <ButtonContainer>{renderButtons("format")}</ButtonContainer>
          </FormGroup>
          <FormGroup>
            <Label>Number of players</Label>
            <ButtonContainer>{renderButtons("numPlayers")}</ButtonContainer>
          </FormGroup>
        </FormContainer>
      </TwoPartContainer>
    </Fragment>
  );
};

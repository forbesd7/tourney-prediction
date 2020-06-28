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
import { FormatButton } from "./FormatButton";
import { TournamentPreview } from "./TournamentPreviewContainer";
import { TournamentOptions } from "./tournament-options/TournamentOptions";

const formatButtons = ["Bracket", "Groups"];

export interface BracketOption {
  selectedNumOfPlayers: number;
}

const defaultBracketOptions: BracketOption = {
  selectedNumOfPlayers: 8,
};

export const CreateTournamentContainer = () => {
  const { user } = useContext(UserContext);
  const [selectedFormat, setSelectedFormat] = useState("Bracket");
  const [bracketOptions, setBracketOptions] = useState<BracketOption>(
    defaultBracketOptions
  );

  const updateBracketOptions = (
    option: string,
    selectedVal: string | number
  ) => {
    setBracketOptions({ ...bracketOptions, [option]: selectedVal });
  };

  const renderButtons = (buttonType: string) => {
    if (buttonType === "format") {
      return formatButtons.map((button) => (
        <FormatButton
          size="normal"
          key={button}
          buttonType={"format"}
          label={button}
          selectedFormat={selectedFormat}
          setSelectedButton={setSelectedFormat}
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
          <TournamentOptions
            bracketOptions={defaultBracketOptions}
            type={selectedFormat}
          />
          {/* <FormGroup>
            <Label>Number of players</Label>
            <ButtonContainer>{renderButtons("numPlayers")}</ButtonContainer>
          </FormGroup> */}
        </FormContainer>
        <TournamentPreview />
      </TwoPartContainer>
    </Fragment>
  );
};

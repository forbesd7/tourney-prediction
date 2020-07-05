import React, { useContext, Fragment, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import {
  PageTitle,
  TwoPartContainer,
  Button,
} from "../../styled-components/General/index";
import {
  FormGroup,
  Label,
  Input,
  FormContainer,
  ButtonContainer,
} from "../../styled-components/Form/index";
import { FormatButton } from "./FormatButton";
import { TournamentPreview } from "./tournament-preview/TournamentPreviewContainer";
import { TournamentOptions } from "./tournament-options/TournamentOptions";
import { createdTournamentContext } from "../../providers/CreatedTournamentProvider";

const formatButtons = ["Bracket", "Groups"];

export interface BracketOption {
  selectedNumOfPlayers: number;
}
export interface GroupOption {
  groupNumber: number;
  playersPerGroup: number;
}

const defaultBracketOptions: BracketOption = {
  selectedNumOfPlayers: 8,
};

const defaultGroupOptions: GroupOption = {
  groupNumber: 4,
  playersPerGroup: 4,
};

export const CreateTournamentContainer = () => {
  const { user } = useContext(UserContext);
  const [selectedFormat, setSelectedFormat] = useState<string>("Bracket");

  const [bracketOptions] = useState<BracketOption>(defaultBracketOptions);
  const [groupOptions] = useState<GroupOption>(defaultGroupOptions);

  const renderFormatButtons = () => {
    return formatButtons.map((button, index) => (
      <FormatButton
        size="normal"
        key={button + index}
        label={button}
        selectedFormat={selectedFormat}
        setSelectedButton={setSelectedFormat}
      ></FormatButton>
    ));
  };

  const renderOptions = () => {
    if (selectedFormat === "Bracket") {
      return <TournamentOptions bracketOptions={bracketOptions} />;
    }
    return <TournamentOptions groupOptions={groupOptions} />;
  };

  return (
    <Fragment>
      <ButtonContainer>
        <PageTitle>Enter Tournament Information</PageTitle>;
        <Button>Submit</Button>
      </ButtonContainer>
      <TwoPartContainer>
        <FormContainer>
          <FormGroup>
            <Label>Tournament name</Label>
            <Input type="text"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Format</Label>
            <ButtonContainer>{renderFormatButtons()}</ButtonContainer>
          </FormGroup>
          {renderOptions()}
        </FormContainer>
        <TournamentPreview />
      </TwoPartContainer>
    </Fragment>
  );
};

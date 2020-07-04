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
import { TournamentPreview } from "./tournament-preview/TournamentPreviewContainer";
import { TournamentOptions } from "./tournament-options/TournamentOptions";

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

  const [bracketOptions, setBracketOptions] = useState<BracketOption>(
    defaultBracketOptions
  );
  const [groupOptions, setGroupOptions] = useState<GroupOption>(
    defaultGroupOptions
  );

  const updateOptions = (
    selectedVal: string | number,
    format: string,
    selectedOption: string
  ) => {
    switch (format) {
      case "Bracket":
        setBracketOptions({ ...bracketOptions, [selectedOption]: selectedVal });
        break;
      case "Groups":
        setGroupOptions({ ...groupOptions, [selectedOption]: selectedVal });
        break;
    }
  };

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
      return (
        <TournamentOptions
          updateOptions={updateOptions}
          bracketOptions={bracketOptions}
        />
      );
    }
    return (
      <TournamentOptions
        updateOptions={updateOptions}
        groupOptions={groupOptions}
      />
    );
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
            <ButtonContainer>{renderFormatButtons()}</ButtonContainer>
          </FormGroup>
          {renderOptions()}
        </FormContainer>
        <TournamentPreview numOfPlayers={bracketOptions.selectedNumOfPlayers} />
      </TwoPartContainer>
    </Fragment>
  );
};

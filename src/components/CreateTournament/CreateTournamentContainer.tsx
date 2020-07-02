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
import { BracketOptions } from "./tournament-options/BracketOptions";
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
  const [selectedFormat, setSelectedFormat] = useState("Bracket");
  const [bracketOptions, setBracketOptions] = useState<BracketOption>(
    defaultBracketOptions
  );
  const [groupOptions, setGroupOptions] = useState<GroupOption>(
    defaultGroupOptions
  );

  const updateOptions = (
    format: string,
    option: string,
    selectedVal: string | number
  ) => {
    switch (format) {
      case "Bracket":
        setBracketOptions({ ...bracketOptions, [option]: selectedVal });
        break;
      case "Group":
        setGroupOptions({ ...groupOptions, [option]: selectedVal });
        break;
    }
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

  const renderOptions = () => {
    if (selectedFormat === "Bracket") {
      return (
        <TournamentOptions
          type={"Bracket"}
          updateOptions={updateOptions}
          options={bracketOptions}
        />
      );
    }
    return (
      <TournamentOptions
        type={"Group"}
        updateOptions={updateOptions}
        options={groupOptions}
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
            <ButtonContainer>{renderButtons("format")}</ButtonContainer>
          </FormGroup>
          {renderOptions()}
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

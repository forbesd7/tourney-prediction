import React, { useState, useContext, Fragment, useEffect } from "react";
import { Button } from "../../../styled-components/General/index";
import { createdTournamentContext } from "../../../providers/CreatedTournamentProvider";
import { Dialogue } from "../../Dialogue";

interface OptionsButtonProps {
  option: string;
  size?: string;
  label: string | number;
  optionType: string;
  selectedOption: number;
}
export const OptionsButton = (props: OptionsButtonProps) => {
  const { label, size, selectedOption } = props;
  const [renderConfirmation, showRenderConfirmation] = useState(false);
  const [shouldUpdateSelectedButton, setShouldUpdateSelectedButton] = useState(
    false
  );
  const { tournamentInfo, updateInfo } = useContext(createdTournamentContext);
  const { numOfPlayers, matchupInfo } = tournamentInfo;

  useEffect(() => {
    if (shouldUpdateSelectedButton === true) {
      updateInfo({
        ...tournamentInfo,
        matchupInfo: {},
        numOfPlayers: label as number,
      });

      setShouldUpdateSelectedButton(false);
    }
  }, [shouldUpdateSelectedButton]);

  const checkSelectedButton = () => {
    if (label === numOfPlayers) {
      return true;
    }
    return false;
  };

  const updateSelectedButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (renderConfirmation) return;

    if (Object.keys(matchupInfo).length === 0) {
      updateInfo({ ...tournamentInfo, numOfPlayers: label as number });
      return;
    }

    if (label === selectedOption) return;
    showRenderConfirmation(true);
  };

  const shouldRenderError = () => {
    if (renderConfirmation) {
      const errorMsg =
        "Changing player number will erase what you've entered. Proceed?";
      return (
        <Dialogue
          showRenderConfirmation={showRenderConfirmation}
          confirmAction={setShouldUpdateSelectedButton}
          errorMsg={errorMsg}
        />
      );
    }
  };
  return (
    <Fragment>
      <Button
        size={size}
        onClick={updateSelectedButton}
        selected={checkSelectedButton()}
      >
        {label}
      </Button>
      {shouldRenderError()}
    </Fragment>
  );
};

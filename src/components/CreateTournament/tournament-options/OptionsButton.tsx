import React, { useState, useContext, Fragment, useEffect } from "react";
import { Button } from "../../../styled-components/General/index";
import { createdTournamentContext } from "../../../providers/CreatedTournamentProvider";
import { Error } from "../../Error";

interface OptionsButtonProps {
  option: string;
  size?: string;
  label: string | number;
  optionType: string;
  selectedOption: number;
  updateOptions: (
    selectedVal: string | number,
    format: string,
    selectedOption: string
  ) => void;
}
export const OptionsButton = (props: OptionsButtonProps) => {
  const {
    updateOptions,
    label,
    optionType,
    size,
    selectedOption,
    option,
  } = props;
  const [renderConfirmation, showRenderConfirmation] = useState(false);
  const [shouldUpdateSelectedButton, setShouldUpdateSelectedButton] = useState(
    false
  );
  const { updateMatchupInfo } = useContext(createdTournamentContext);

  useEffect(() => {
    if (shouldUpdateSelectedButton === true) {
      updateMatchupInfo({});
      updateOptions(label, optionType, option);

      setShouldUpdateSelectedButton(false);
    }
  }, [shouldUpdateSelectedButton]);

  const checkSelectedButton = () => {
    if (label === selectedOption) {
      return true;
    }
    return false;
  };

  const updateSelectedButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (renderConfirmation) return;
    showRenderConfirmation(true);
  };

  const shouldRenderError = () => {
    if (renderConfirmation) {
      const errorMsg =
        "Changing player number will erase what you've entered. Proceed?";
      return (
        <Error
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

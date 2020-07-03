import React, { useContext, Fragment } from "react";
import { Button } from "../../../styled-components/General/index";
import { UserContext } from "../../../providers/UserProvider";

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
  const { user } = useContext(UserContext);
  const {
    updateOptions,
    label,
    optionType,
    size,
    selectedOption,
    option,
  } = props;

  const checkSelectedButton = () => {
    if (label === selectedOption) {
      return true;
    }
    return false;
  };

  const updateSelectedButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    updateOptions(label, optionType, option);
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
    </Fragment>
  );
};

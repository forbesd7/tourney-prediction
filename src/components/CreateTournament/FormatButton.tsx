import React, { useContext, Fragment } from "react";
import { Button } from "../../styled-components/General/index";
import { UserContext } from "../../providers/UserProvider";

interface FormatButtonProps {
  size?: string;
  label: string | number;
  selectedFormat: string | number;
  setSelectedButton: React.Dispatch<React.SetStateAction<any>>;
}
export const FormatButton = (props: FormatButtonProps) => {
  const { user } = useContext(UserContext);
  const { label, selectedFormat, setSelectedButton, size } = props;

  const checkSelectedButton = () => {
    if (label === selectedFormat) {
      return true;
    }
    return false;
  };

  const updateSelectedButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedButton(label);
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

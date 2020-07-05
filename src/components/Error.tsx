import React, { useEffect, useRef } from "react";
import {
  ModalWindow,
  ErrorWindow,
  Button,
  ErrorButtonContainer,
  ErrorTitle,
} from "../styled-components/General/index";
import { ButtonContainer } from "../styled-components/Form";
interface ErrorProps {
  errorMsg: string;
  confirmAction: React.Dispatch<React.SetStateAction<boolean>>;
  showRenderConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Error = (props: ErrorProps) => {
  const { errorMsg, confirmAction, showRenderConfirmation } = props;
  const errorRef = useRef<HTMLDivElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    confirmation: boolean
  ) => {
    if (confirmation === false) {
      confirmAction(false);
    } else {
      confirmAction(true);
    }
    showRenderConfirmation(false);
  };

  const handleClickOutsideError = () => {
    showRenderConfirmation(false);
  };
  return (
    <ModalWindow onClick={handleClickOutsideError}>
      <ErrorWindow tabIndex={-1} ref={errorRef}>
        <ErrorTitle>{errorMsg}</ErrorTitle>
        <ErrorButtonContainer>
          <Button selected onClick={(e) => handleClick(e, true)}>
            OK
          </Button>
          <Button selected onClick={(e) => handleClick(e, false)}>
            Cancel
          </Button>
        </ErrorButtonContainer>
      </ErrorWindow>
    </ModalWindow>
  );
};

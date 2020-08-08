import React, { useEffect, useRef } from "react";
import * as S from "../styled-components/General/index";
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
    <S.ModalWindow onClick={handleClickOutsideError}>
      <S.ErrorWindow tabIndex={-1} ref={errorRef}>
        <S.ErrorTitle>{errorMsg}</S.ErrorTitle>
        <S.ErrorButtonContainer>
          <S.Button selected onClick={(e) => handleClick(e, true)}>
            OK
          </S.Button>
          <S.Button selected onClick={(e) => handleClick(e, false)}>
            Cancel
          </S.Button>
        </S.ErrorButtonContainer>
      </S.ErrorWindow>
    </S.ModalWindow>
  );
};

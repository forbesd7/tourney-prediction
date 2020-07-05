import { Button } from "./Button";
import { PageTitle } from "./PageTitle";
import { TwoPartContainer } from "./TwoPartContainer";
import styled from "styled-components";

interface ErrorWindowProps {}

const ErrorWindow = styled.div<ErrorWindowProps>`
  position: fixed;
  top: 40vh;
  left: 5vw;
  height: 10em;
  width: 15em;
  color: #ffffff;
  background-color: #104e8b;
  border: black 2px solid;
  border-radius: 10px;
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 499;
`;

const ErrorButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ErrorTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 0.5em;
`;

export {
  ErrorTitle,
  ErrorButtonContainer,
  ErrorWindow,
  ModalWindow,
  Button,
  PageTitle,
  TwoPartContainer,
};

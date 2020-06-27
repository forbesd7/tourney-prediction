import styled from "styled-components";

interface LabelProps {
  readonly isActive?: boolean;
}

interface FormGroupProps {
  readonly isActive?: boolean;
}

interface InputProps {
  readonly type?: string;
}

const Input = styled.input<InputProps>`
  padding: 0.5em;
  width: 18em;
`;

const Label = styled.label<LabelProps>`
  margin-bottom: 0.5em;
  color: #ffffff;
  display: block;
  text-align: left;
`;

const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1.5em;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40em;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export { Label, FormGroup, Input, FormContainer, ButtonContainer };

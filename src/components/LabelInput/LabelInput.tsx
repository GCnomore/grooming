import React from "react";

import * as Styled from "./LabelInput.styled";

interface ILabelInputProps {
  children?: JSX.Element;
  label: string;
  error?: string;
}

const LabelInput: React.FC<ILabelInputProps> = ({ children, label, error }) => {
  return (
    <Styled.Container>
      <label>{label}</label>
      {children}
      <Styled.Error>{error}</Styled.Error>
    </Styled.Container>
  );
};

export default LabelInput;

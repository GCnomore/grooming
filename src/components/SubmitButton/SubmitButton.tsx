import React from "react";

import * as Styled from "./SubmitButton.styled";

interface ISubmitButton {
  show: boolean;
  btnAction: () => any;
}

const SubmitBUtton: React.FC<ISubmitButton> = ({ show, btnAction }) => {
  return (
    <Styled.SubmitButtonContainer>
      <p>
        Already have an account? <a href="#">Log in</a>
      </p>
      <p>
        <a href="#">Create an account to save your preference</a>
      </p>
      <Styled.SubmitButton
        type="submit"
        form="hook-form"
        onClick={btnAction}
        show={show}
      >
        Next
      </Styled.SubmitButton>
    </Styled.SubmitButtonContainer>
  );
};

export default SubmitBUtton;

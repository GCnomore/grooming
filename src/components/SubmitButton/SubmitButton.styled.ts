import styled from "styled-components";
import STYLE from "../../style";

export const SubmitButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;

  p {
    font-size: 0.8rem;
    a {
      color: black;
    }
  }
`;

export const SubmitButton = styled.button<{ show: boolean }>`
  width: 50%;
  height: 50px;
  ${({ show }) => (show ? STYLE.BUTTON : STYLE.DISABLED_BUTTON)};
`;

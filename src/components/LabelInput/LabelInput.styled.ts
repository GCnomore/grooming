import styled from "styled-components";
import STYLE from "../../style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  > label {
    font-size: ${STYLE.LABEL_FONT_SIZE};
    margin-bottom: 0.1rem;
    margin-left: 0.25rem;
    text-align: start;
  }
`;

export const Error = styled.p`
  text-align: start;
  color: white;
  margin-bottom: 0;
  margin-top: 0.15rem;
  font-size: ${STYLE.LABEL_FONT_SIZE};
`;

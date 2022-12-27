import styled from "styled-components";
import STYLE from "../../style";

export const Container = styled.div`
  height: 100%;
`;

export const NextButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  padding-bottom: 3rem;

  p {
    font-size: 0.8rem;
    a {
      color: #fff;
    }
  }

  > button {
    width: 12rem;
    ${STYLE.BUTTON};
  }
`;

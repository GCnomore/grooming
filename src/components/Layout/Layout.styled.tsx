import styled from "styled-components";
import STYLE from "../../style";

export const Container = styled.main`
  width: 1280px;
  height: calc(100vh - ${STYLE.PADDING} - ${STYLE.PADDING});
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  background-color: white;

  .left-section {
    border-top-left-radius: 21px;
    border-bottom-left-radius: 21px;
    background-color: white;
    padding: 3%;
    width: 45%;
    overflow-y: auto;
  }

  .right-section {
    border-top-right-radius: 21px;
    border-bottom-right-radius: 21px;
    padding: 3%;
    width: 55%;
    background-color: rgba(255, 150, 79, 0.15);
    overflow-y: auto;
  }
`;

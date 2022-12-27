import styled from "styled-components";
import STYLE from "./style";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: ${STYLE.FONT_COLOR};
  background-color: ${STYLE.MAIN_BG_COLOR};
`;

export const Header = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1% 2%;

  > div:first-child {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const StoreNameContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

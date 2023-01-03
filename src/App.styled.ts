import styled from "styled-components";
import STYLE from "./style";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${STYLE.PADDING};
  color: ${STYLE.FONT_COLOR};
  background-color: ${STYLE.MAIN_BG_COLOR};
`;

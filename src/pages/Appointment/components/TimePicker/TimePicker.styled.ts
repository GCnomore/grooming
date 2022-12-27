import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import STYLE from "../../../../style";

export const Container = styled(Dropdown)``;

export const TimeButton = styled(Dropdown.Toggle)<{ isset: string }>`
  width: 12rem;
  background-color: transparent !important;
  background: transparent !important;
  border: 1px solid ${STYLE.FONT_COLOR} !important;
  color: ${({ isset }) => (isset === "true" ? "#fff" : STYLE.FONT_COLOR)};

  &:hover,
  /* &:focus, */
  /* &:focus-visible, */
  &:active {
    transition: 0.3s ease-in-out;
    background-color: #00000040 !important;
    background: #00000040 !important;
    border: 1px solid ${STYLE.FONT_COLOR} !important;
    box-shadow: none;
  }

  &:visited {
    background-color: transparent !important;
    background: #00000040 !important;
  }
`;

export const TimeMenu = styled(Dropdown.Menu)``;

export const TimeItem = styled(Dropdown.Item)``;

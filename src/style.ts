import { css } from "styled-components";

const STYLE = {
  MAIN_BG_COLOR: "rgba(255, 150, 79, 0.6)",
  FONT_COLOR: "#343434",
  LABEL_FONT_SIZE: "0.8rem",
  PADDING: "115px",
  BOX_SHADOW: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  BUTTON: css`
    border: none;
    background-color: rgba(255, 150, 79, 0.6);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 0.5rem 3rem;
    color: white;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #3434349e;
      transition: background-color 0.3s ease-in-out;
    }
  `,
  DISABLED_BUTTON: css`
    border: none;
    background-color: #ccc;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    color: white;
    transition: background-color 0.3s ease-in-out;
    cursor: default !important;
  `,
  INPUT: css`
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    border: 2px solid transparent;
    margin: 0.25rem;
    outline: none;
    font-size: 1rem;

    &:focus {
      border-color: #ff964f;
      outline: 4px solid white;
      transition: 0.2s ease-in-out;
    }
  `,
};

export default STYLE;

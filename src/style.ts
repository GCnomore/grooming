import { css } from "styled-components";

const STYLE = {
  MAIN_BG_COLOR: "#FF964F",
  FONT_COLOR: "#343434",
  LABEL_FONT_SIZE: "0.8rem",
  BUTTON: css`
    border: 1px solid #fff;
    background-color: transparent;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    color: white;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #3434349e;
      transition: background-color 0.3s ease-in-out;
    }
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

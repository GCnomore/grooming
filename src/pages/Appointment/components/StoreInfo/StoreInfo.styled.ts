import styled from "styled-components";
import STYLE from "../../../../style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 1.5rem;
  }

  > span:nth-child(5) {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  > span:nth-child(8) {
    margin-top: 1rem;
  }

  > div:last-child {
    margin-left: 3rem;
  }
`;

export const DatePickerContainer = styled.div`
  .gr-date-picker > div {
    margin-left: 3rem;
    border: 1px solid ${STYLE.FONT_COLOR};
    border-radius: 5px;
    cursor: pointer;
    width: 12rem;
    transition: 0.3s ease-in-out;
    color: white;

    &:hover,
    &:focus {
      color: white;
      transition: 0.3s ease-in-out;
      background-color: #00000040;

      > div > input {
        color: white;
        transition: 0.3s ease-in-out;
      }
    }

    > div {
      display: flex;
      justify-content: center;
      padding: 0.25rem 1.5rem;

      > input {
        color: white;
        cursor: pointer;
        user-select: none;
      }
    }
  }
`;

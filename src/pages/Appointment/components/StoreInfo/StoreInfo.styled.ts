import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .gr-date-picker > div {
    border: 1px solid white;
    border-radius: 5px;

    > div {
      padding: 0.25rem 1.5rem;

      > input {
        color: white;
        cursor: pointer;
        user-select: none;
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom: 2rem;

  > div:first-child {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  > div:last-child {
    display: flex;
    justify-content: center;
    max-width: 70%;
    word-break: break-all;
    > h1 {
      font-size: 1.8rem;
    }
  }
`;

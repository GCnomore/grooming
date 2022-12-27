import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Contents = styled.article`
  display: flex;
  justify-content: space-between;
`;

export const StoreInfoSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MapSection = styled.section`
  width: 40%;
  height: 25rem;
  position: relative;

  > div > div {
    border-radius: 12px;
  }
`;

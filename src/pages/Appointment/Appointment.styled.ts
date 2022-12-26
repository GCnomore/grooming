import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1% 2%;
`;

export const StoreNameContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.article`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
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

export const NextButton = styled.button``;

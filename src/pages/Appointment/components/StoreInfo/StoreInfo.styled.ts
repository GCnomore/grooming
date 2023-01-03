import styled from "styled-components";
import STYLE from "../../../../style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MapSection = styled.div`
  width: 100%;
  height: 50%;
  position: relative;

  > div > div {
    border-radius: 12px;
  }
`;

export const StoreInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  > h2 {
    font-size: 1.4rem;
  }
  > span {
    margin-bottom: 0.25rem;
  }
  > span:nth-child(2) {
    margin-bottom: 0;
  }
`;

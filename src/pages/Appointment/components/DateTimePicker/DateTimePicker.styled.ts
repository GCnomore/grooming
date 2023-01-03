import styled from "styled-components";
import STYLE from "../../../../style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CalendarContainer = styled.div`
  display: flex;
  width: 100%;

  > .react-calendar {
    width: 100%;
    border: none;
    border-radius: 21px;
    padding: 4%;
    box-shadow: ${STYLE.BOX_SHADOW};

    .react-calendar__viewContainer {
      background-color: rgb(242, 249, 255);
      border-radius: 21px;
      padding: 4%;
    }
  }
`;

export const TimeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  > span {
    font-size: 1.2rem;
    font-weight: 600;
  }

  > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
  }
`;

export const TimeButton = styled.button<{ isset: boolean }>`
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 1rem 0.5rem;
  background-color: rgb(242, 249, 255);
  filter: ${({ isset }) => (!isset ? "brightness(0.9)" : "brightness(1)")};
  transition: 0.3s ease-in-out filter;

  &:hover {
    filter: brightness(1.1);
    transition: 0.2s ease-in-out filter;
  }
`;

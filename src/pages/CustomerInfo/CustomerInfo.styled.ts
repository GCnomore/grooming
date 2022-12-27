import styled from "styled-components";
import STYLE from "../../style";

export const Container = styled.main`
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    input[type="text"] {
      width: 100%;
      ${STYLE.INPUT};
      margin: 0;
    }

    > div {
      width: 100%;
      text-align: center;
    }
  }
`;

export const PageTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const NameSection = styled.div`
  display: flex;

  div:first-child {
    margin-right: 2rem;
  }
`;

export const AddressSection = styled.div`
  > div:first-child {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  > div:last-child {
    display: flex;

    > div {
      margin-right: 2rem;
    }
    > div:last-child {
      margin-right: 0;
    }
  }
`;

export const ContactSection = styled.div`
  margin-top: 2rem;

  > div {
    margin-top: 0.5rem;
  }
`;

export const EmergencyContactSection = styled.div`
  margin-top: 2rem;

  > div {
    margin-top: 0.5rem;
  }
`;

export const ContactMethodSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  > p {
    font-size: 1.2rem;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 0.9rem;
      margin-bottom: 0;
    }

    > div:first-child {
      margin-right: 3rem;
    }

    > div > input {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

import React from "react";

import * as Styled from "./AppointmentLayout.styled";

interface IAppointmentLayoutProps {
  children?: JSX.Element;
  show?: boolean;
  btnAction: () => any;
}

const AppointmentLayout: React.FC<IAppointmentLayoutProps> = ({
  children,
  show,
  btnAction,
}) => {
  return (
    <Styled.Container>
      {children}

      <Styled.NextButtonContainer>
        <p>
          Already have an account? <a href="#">Log in</a>
        </p>
        <p>
          <a href="#">Create an account to save your preference</a>
        </p>
        {show ? (
          <button type="submit" form="hook-form" onClick={btnAction}>
            Next
          </button>
        ) : (
          <></>
        )}
      </Styled.NextButtonContainer>
    </Styled.Container>
  );
};

export default AppointmentLayout;

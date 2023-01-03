import React from "react";
import { useSelector } from "react-redux";

import * as Styled from "./Appointment.styled";
import { RootState } from "../../data/redux/appointmentSlice";
import StoreInfo from "./components/StoreInfo/StoreInfo";
import { useNavigate } from "react-router-dom";
import SubmitBUtton from "../../components/SubmitButton/SubmitButton";
import AppHeader from "../../components/AppHeader/AppHeader";

const Appointment: React.FC = () => {
  const { groomingShop, apptDate, apptTime } = useSelector(
    (state: RootState) => state
  );

  const navigate = useNavigate();

  if (!groomingShop) {
    return <div></div>;
  } else {
    return (
      <>
        <section className="left-section">
          <Styled.LeftContainer>
            <AppHeader />
            <StoreInfo store={groomingShop} />

            <SubmitBUtton
              show={apptDate && apptTime ? true : false}
              btnAction={() => navigate("/customer-info")}
            />
          </Styled.LeftContainer>
        </section>
        <section className="right-section">
          {/* <span>Select date:</span>
          <Styled.DatePickerContainer>
            <DatePicker
              value={apptDate}
              onChange={(e: Date) => {
                dispatch(setApptDate(e));
              }}
              calendarIcon={null}
              clearIcon={null}
              className="gr-date-picker"
            />
          </Styled.DatePickerContainer>
          <span>Select time:</span>
          <div>
            <TimePicker store={store} date={apptDate} />
          </div> */}
          <Styled.RightContainer></Styled.RightContainer>
        </section>
      </>
    );
  }
};

export default Appointment;

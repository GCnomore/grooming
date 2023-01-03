import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { DAYS } from "../../../../constant";
import IStore from "../../../../data/models/store.model";
import {
  RootState,
  setApptDate,
  setApptTime,
} from "../../../../data/redux/appointmentSlice";
import { RootDispatch } from "../../../../data/redux/store";
import * as Styled from "./DateTimePicker.styled";

interface IDateTimePickerProps {
  store: IStore;
}

const DateTimePicker: React.FC<IDateTimePickerProps> = ({ store }) => {
  const dispatch = useDispatch<RootDispatch>();
  const { apptTime, apptDate } = useSelector((state: RootState) => state);

  const [timeItems, setTimeItems] = useState<string[]>();
  const [isClosed, setIsClosed] = useState<boolean>(false);

  // //? Fetch store's business hour and create time selections
  useEffect(() => {
    const timeItems: string[] = [];
    const dayKey: string = DAYS[moment(apptDate).day()]
      .toLowerCase()
      .slice(0, 3);
    const businessHours: string[] = store.hours[dayKey].split("-");

    if (businessHours[0] === "Closed") {
      setIsClosed(true);
    } else {
      for (
        let i = Number(businessHours[0]);
        i < Number(businessHours[1]);
        i++
      ) {
        if (i < 11) {
          timeItems.push(`${i}:00AM - ${i + 1}:00AM`);
        }
        if (i === 11) {
          timeItems.push("11:00AM - 12:00PM");
        }
        if (i === 12) {
          timeItems.push("12:00PM - 1:00PM");
        }
        if (i > 12) {
          timeItems.push(`${i - 12}:00PM - ${i - 11}:00PM`);
        }
      }
      setIsClosed(false);
      setTimeItems(timeItems);
    }
  }, [apptDate]);

  const onChangeDate = (date: Date) => {
    dispatch(setApptDate(date));
  };

  return (
    <Styled.Container>
      <Styled.CalendarContainer>
        <Calendar onChange={onChangeDate} value={new Date()} />
      </Styled.CalendarContainer>
      <Styled.TimeContainer>
        <span>Available Time</span>
        {isClosed ? (
          <div style={{ flexWrap: "nowrap" }}>
            <p>This store is closed on selected date</p>
          </div>
        ) : (
          <>
            <div>
              {timeItems?.map((item) => (
                <Styled.TimeButton
                  key={item}
                  isset={apptTime === item}
                  onClick={() => dispatch(setApptTime(item))}
                >
                  {item}
                </Styled.TimeButton>
              ))}
            </div>
          </>
        )}
      </Styled.TimeContainer>
    </Styled.Container>
  );
};

export default DateTimePicker;

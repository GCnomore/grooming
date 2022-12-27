import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DAYS } from "../../../../constant";
import IStore from "../../../../data/models/store.model";

import {
  RootState,
  setApptTime,
} from "../../../../data/redux/appointmentSlice";
import { RootDispatch } from "../../../../data/redux/store";

import * as Styled from "./TimePicker.styled";

interface TimePickerProps {
  store: IStore;
  date: Date;
}

const TimePicker: React.FC<TimePickerProps> = ({ store, date }) => {
  const dispatch = useDispatch<RootDispatch>();
  const { apptTime } = useSelector((state: RootState) => state);

  const [timeItems, setTimeItems] = useState<string[]>();
  const [isClosed, setIsClosed] = useState<boolean>(false);

  // //? Fetch store's business hour and create time selections
  useEffect(() => {
    const timeItems: string[] = [];
    const dayKey: string = DAYS[moment(date).day()].toLowerCase().slice(0, 3);
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
  }, [date]);

  return (
    <Styled.Container>
      {isClosed ? (
        <span>This store is closed on selected date</span>
      ) : (
        <>
          <Styled.TimeButton isset={apptTime ? "true" : "false"}>
            {apptTime ?? "Select time"}
          </Styled.TimeButton>
          {timeItems ? (
            <Styled.TimeMenu>
              {timeItems.map((item) => (
                <Styled.TimeItem
                  key={item}
                  onClick={() => dispatch(setApptTime(item))}
                >
                  {item}
                </Styled.TimeItem>
              ))}
            </Styled.TimeMenu>
          ) : null}
        </>
      )}
    </Styled.Container>
  );
};

export default TimePicker;

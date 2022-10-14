import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, setApptTime } from "../../../../data/redux/slice";
import { RootDispatch } from "../../../../data/redux/store";

import * as Styled from "./TimePicker.styled";

const TimePicker: React.FC = () => {
  const dispatch = useDispatch<RootDispatch>();
  const { apptTime } = useSelector((state: RootState) => state);
  const [timeItems, setTimeItems] = useState<string[]>();

  //? Fetch store's business hour and create time selections
  useEffect(() => {
    const _timeItems: string[] = [];
    for (let i = 1; i < 3; i++) {
      for (let ii = 1; ii < 12; ii++) {
        if (i === 1) {
          if (ii < 10) {
            _timeItems.push(
              `0${ii}:00 - ${ii === 9 ? ii + 1 : `0${ii + 1}`}:00 AM`
            );
          } else {
            _timeItems.push(`${ii}:00 - ${ii + 1}:00 AM`);
          }
        } else {
          if (ii < 10) {
            _timeItems.push(
              `0${ii}:00 - ${ii === 9 ? ii + 1 : `0${ii + 1}`}:00 PM`
            );
          } else {
            _timeItems.push(`${ii}:00 - ${ii + 1}:00 PM`);
          }
        }
      }
    }
    setTimeItems(_timeItems);
  }, []);

  return (
    <Styled.Container>
      <Styled.TimeButton>{apptTime ?? "Select time"}</Styled.TimeButton>
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
    </Styled.Container>
  );
};

export default TimePicker;

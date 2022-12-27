import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";

import * as Styled from "./StoreInfo.styled";
import IStore from "../../../../data/models/store.model";
import upperAllFirst from "../../../../util/upperAllFirst";
import TimePicker from "../TimePicker/TimePicker";
import { RootDispatch } from "../../../../data/redux/store";
import {
  RootState,
  setApptDate,
} from "../../../../data/redux/appointmentSlice";
import { useSelector } from "react-redux";

interface StoreInfoProps {
  store: IStore;
}

const StoreInfo: React.FC<StoreInfoProps> = ({ store }) => {
  const dispatch = useDispatch<RootDispatch>();
  const { apptDate } = useSelector((state: RootState) => state);

  const petAcceptance = useCallback(() => {
    if (store.petLimit.all) {
      return "Accepts all pets (No size/wieght limit)";
    } else {
      return `Accepts pets under: ${store.petLimit.limit}lb`;
    }
  }, [store.petLimit]);

  return (
    <Styled.Container>
      <h2>{upperAllFirst(store.name)}</h2>
      <span>
        <FontAwesomeIcon icon={faLocationDot} />
        &nbsp;&nbsp;&nbsp;
        {store.address.street} {store.address.street2}
      </span>
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {store.address.city}, {store.address.state} {store.address.zip}
      </span>
      <span>
        <FontAwesomeIcon icon={faPhone} /> &nbsp;{store.phone}
      </span>
      <span>{petAcceptance()}</span>

      <span>Select date:</span>
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
      </div>
    </Styled.Container>
  );
};

export default StoreInfo;

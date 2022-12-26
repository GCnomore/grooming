import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Accordion from "react-bootstrap/Accordion";
import DatePicker from "react-date-picker";

import * as Styled from "./StoreInfo.styled";
import { IStore } from "../../../../data/models/store.model";
import upperAllFirst from "../../../../util/upperAllFirst";
import TimePicker from "../TimePicker/TimePicker";

interface StoreInfoProps {
  store: IStore;
}

const StoreInfo: React.FC<StoreInfoProps> = ({ store }) => {
  const [date, setDate] = useState(new Date());

  const petAcceptance = useCallback(() => {
    if (store.petLimit.all) {
      return "Accepts all pets (No size/wieght limit)";
    } else {
      return `Accepts pets under: ${store.petLimit.limit}lb`;
    }
  }, [store.petLimit]);

  return (
    <Styled.Container>
      <span>{upperAllFirst(store.name)}</span>
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

      <div>Select date:</div>
      <div>
        <DatePicker
          value={date}
          onChange={setDate}
          calendarIcon={null}
          clearIcon={null}
          className="gr-date-picker"
        />
      </div>
      <div>Select time:</div>
      <TimePicker store={store} date={date} />
    </Styled.Container>
  );
};

export default StoreInfo;

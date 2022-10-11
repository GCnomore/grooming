import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Accordion from "react-bootstrap/Accordion";

import * as Styled from "./StoreInfo.styled";
import { IStore } from "../../../../data/models/store.model";
import upperAllFirst from "../../../../util/upperAllFirst";

interface StoreInfoProps {
  store: IStore;
}

const StoreInfo: React.FC<StoreInfoProps> = ({ store }) => {
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
      <div>
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FontAwesomeIcon icon={faClock} /> &nbsp;&nbsp; Hours
            </Accordion.Header>
            <Accordion.Body>Monday: Tuesday</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Styled.Container>
  );
};

export default StoreInfo;

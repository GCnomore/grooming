import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import * as Styled from "./Appointment.styled";
import { RootState } from "../../data/redux/slice";
import { getStore } from "../../data/redux/actions";
import { RootDispatch } from "../../data/redux/store";
import upperAllFirst from "../../util/upperAllFirst";
import StoreMap from "./components/MapView/StoreMap";

const Appointment: React.FC = () => {
  const dispatch = useDispatch<RootDispatch>();
  const { store } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getStore("632f5719c380ab7a91cda655"));
  }, []);

  const petAcceptance = useCallback(() => {
    if (store?.petLimit.all) {
      return "Accepts all pets (No size/wieght limit)";
    } else {
      return `Accepts pets under: ${store?.petLimit.limit}lb`;
    }
  }, [store?.petLimit]);

  console.log("store", store);

  if (!store) {
    return <div></div>;
  } else {
    return (
      <Styled.Container>
        <Styled.Header>
          <div>Logo</div>
          <div>Account</div>
        </Styled.Header>

        <Styled.Contents>
          <Styled.StoreInfoSection>
            <div>
              <span>{upperAllFirst(store.name)}</span>
              <span>{petAcceptance()}</span>
            </div>
            <div>
              <StoreMap />
            </div>
          </Styled.StoreInfoSection>
          <Styled.DateTimeSection>
            <div>Date picker</div>
            <div>Time picker</div>
          </Styled.DateTimeSection>
        </Styled.Contents>
      </Styled.Container>
    );
  }
};

export default Appointment;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";

import * as Styled from "./Appointment.styled";
import { RootState } from "../../data/redux/appointmentSlice";
import { getGroomingStore } from "../../data/redux/actions";
import { RootDispatch } from "../../data/redux/store";
import StoreInfo from "./components/StoreInfo/StoreInfo";

import upperAllFirst from "../../util/upperAllFirst";

const Appointment: React.FC = () => {
  const dispatch = useDispatch<RootDispatch>();
  const { groomingShop } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getGroomingStore("632f5719c380ab7a91cda655"));
  }, []);

  if (!groomingShop) {
    return <div></div>;
  } else {
    return (
      <Styled.Container>
        <Styled.Header>
          <div>Account</div>
        </Styled.Header>

        <Styled.StoreNameContainer>
          <h1>{upperAllFirst(groomingShop.name)}</h1>
        </Styled.StoreNameContainer>

        <Styled.Contents>
          <Styled.MapSection>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "",
                // key: process.env.REACT_APP_GOOGLE_MAP_KEY ?? "",
              }}
              defaultCenter={{
                lat: Number(groomingShop.lat),
                lng: Number(groomingShop.lng),
              }}
              options={{
                disableDefaultUI: false,
                fullscreenControl: false,
                styles: [
                  {
                    featureType: "all",
                    elementType: "labels",
                    stylers: [{ visibility: "on" }],
                  },
                ],
              }}
              defaultZoom={19}
            />
          </Styled.MapSection>

          <Styled.StoreInfoSection>
            <StoreInfo store={groomingShop} />
          </Styled.StoreInfoSection>
        </Styled.Contents>
      </Styled.Container>
    );
  }
};

export default Appointment;

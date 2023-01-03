import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from "google-map-react";

import * as Styled from "./StoreInfo.styled";
import IStore from "../../../../data/models/store.model";
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
      <Styled.MapSection>
        <GoogleMapReact
          style={{ height: "100%", width: "100%" }}
          bootstrapURLKeys={{
            key: "",
            // key: process.env.REACT_APP_GOOGLE_MAP_KEY ?? "",
          }}
          defaultCenter={{
            lat: Number(store.lat),
            lng: Number(store.lng),
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
          <FontAwesomeIcon icon={faPhone} /> &nbsp;
          <a href={`tel:+${store.phone}`}>{store.phone}</a>
        </span>
        <span>
          <FontAwesomeIcon icon={faCircleInfo} />
          &nbsp;&nbsp;
          {petAcceptance()}
        </span>
      </Styled.StoreInfoSection>
    </Styled.Container>
  );
};

export default StoreInfo;
